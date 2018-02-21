/** @type {CharData} */
let characterData = [];         // Initial character data set used.
/** @type {CharData} */
let characterDataToSort = [];   // Character data set after filtering.

/** @type {Options} */
let options = [];               // Initial option set used.

let currentVersion = '';        // Which version of characterData and options are used.

/** @type {(boolean|boolean[])[]} */
let optTaken = [];              // Records which options are set.

/** Save Data. Concatenated into array, joined into string (delimited by '|') and compressed with lz-string. */
let timestamp = 0;        // savedata[0]      (Unix time when sorter was started, used as initial PRNG seed and in dataset selection)
let timeTaken = 0;        // savedata[1]      (Number of ms elapsed when sorter ends, used as end-of-sort flag and in filename generation)
let optStr = '';          // savedata[2]      (String of '0' and '1' that denotes top-level option selection)
let choices = '';         // savedata[3]      (String of '0', '1' and '2' that records what sorter choices are made)
let suboptStr = '';       // savedata[4...n]  (String of '0' and '1' that denotes nested option selection, separated by '|')
let timeError = false;    // Shifts entire savedata array to the right by 1 and adds an empty element at savedata[0] if true.

/** Intermediate sorter data. */
let sortedIndexList = [];
let recordDataList = [];
let parentIndexList = [];
let tiedDataList = [];

let leftIndex = 0;
let leftInnerIndex = 0;
let rightIndex = 0;
let rightInnerIndex = 0;
let battleNo = 1;
let sortedNo = 0;
let pointer = 0;

/** A copy of intermediate sorter data is recorded for undo() purposes. */
let sortedIndexListPrev = [];
let recordDataListPrev = [];
let parentIndexListPrev = [];
let tiedDataListPrev = [];

let leftIndexPrev = 0;
let leftInnerIndexPrev = 0;
let rightIndexPrev = 0;
let rightInnerIndexPrev = 0;
let battleNoPrev = 1;
let sortedNoPrev = 0;
let pointerPrev = 0;

/** Miscellaneous sorter data that doesn't need to be saved for undo(). */
let loading = false;
let totalBattles = 0;

/** Initialize script. */
function init() {
  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', () => pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', () => pick('right'));
  
  document.querySelector('.sorting.tie.button').addEventListener('click', () => pick('tie'));
  document.querySelector('.sorting.undo.button').addEventListener('click', undo);
  document.querySelector('.sorting.save.button').addEventListener('click', saveProgress);

  setLatestDataset();

  /** Decode query string if available. */
  if (window.location.search.slice(1) !== '') decodeQuery();
}

/** Begin sorting. */
function start() {
  /** Copy data into sorting array to filter. */
  characterDataToSort = characterData.slice(0);

  /** Check selected options and convert to boolean array form. */
  options.forEach(opt => {
    if ('sub' in opt) {
      if (!document.getElementById(`cbgroup-${opt.key}`).checked) optTaken.push(false);
      else {
        const suboptArray = opt.sub.reduce((arr, val, idx) => {
          arr.push(document.getElementById(`cb-${opt.key}-${idx}`).checked);
          return arr;
        }, []);
        optTaken.push(suboptArray);
      }
    } else { optTaken.push(document.getElementById(`cb-${opt.key}`).checked); }
  });

  /** Convert boolean array form to string form. */
  optStr = '';
  suboptStr = '';

  optStr = optTaken
    .map(val => !!val)
    .reduce((str, val) => {
      str += val ? '1' : '0';
      return str;
    }, optStr);
  optTaken.forEach(val => {
    if (Array.isArray(val)) {
      suboptStr += '|';
      suboptStr += val.reduce((str, val) => {
        str += val ? '1' : '0';
        return str;
      }, '');
    }
  });

  /** Filter out deselected nested criteria and remove selected criteria. */
  options.forEach((opt, index) => {
    if ('sub' in opt) {
      if (optTaken[index]) {
        const subArray = optTaken[index].reduce((subList, subBool, subIndex) => {
          if (subBool) { subList.push(subIndex); }
          return subList;
        }, []);
        characterDataToSort = characterDataToSort.filter(char => {
          return char.opts[opt.key].some(subidx => subArray.includes(subidx));
        });
      }
    } else if (optTaken[index]) {
      characterDataToSort = characterDataToSort.filter(char => !char.opts[opt.key]);
    }
  });

  /** Shuffle character array with timestamp seed. */
  timestamp = timestamp || new Date().getTime();
  if (new Date(timestamp) < new Date(currentVersion)) { timeError = true; }
  Math.seedrandom(timestamp);

  characterDataToSort = characterDataToSort
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

  /**
   * tiedDataList will keep a record of indexes on which characters are equal (i.e. tied) 
   * to another one. recordDataList will have an interim list of sorted elements during
   * the mergesort process.
   */

  recordDataList = characterDataToSort.map(() => 0);
  tiedDataList = characterDataToSort.map(() => -1);

  /** 
   * Put a list of indexes that we'll be sorting into sortedIndexList. These will refer back
   * to characterDataToSort.
   * 
   * Begin splitting each element into little arrays and spread them out over sortedIndexList
   * increasing its length until it become arrays of length 1 and you can't split it anymore. 
   * 
   * parentIndexList indicates each element's parent (i.e. where it was split from), except 
   * for the first element, which has no parent.
   */

  sortedIndexList[0] = characterDataToSort.map((val, idx) => idx);
  parentIndexList[0] = -1;

  let midpoint = 0;   // Indicates where to split the array.
  let marker = 1;     // Indicates where to place our newly split array.

  for (let i = 0; i < sortedIndexList.length; i++) {
    if (sortedIndexList[i].length > 1) {
      let parent = sortedIndexList[i];
      midpoint = Math.ceil(parent.length / 2);

      sortedIndexList[marker] = parent.slice(0, midpoint);              // Split the array in half, and put the left half into the marked index.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      
      marker++;                                                         // Increment the marker to put the right half into.

      sortedIndexList[marker] = parent.slice(midpoint, parent.length);  // Put the right half next to its left half.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.

      marker++;                                                         // Rinse and repeat, until we get arrays of length 1. This is initialization of merge sort.
    }
  }

  leftIndex = sortedIndexList.length - 2;     // Start with the second last value and...
  rightIndex = sortedIndexList.length - 1;    // the last value in the sorted list and work our way down to index 0.

  leftInnerIndex = 0;                         // Inner indexes, because we'll be comparing the left array
  rightInnerIndex = 0;                        // to the right array, in order to merge them into one sorted array.

  /** Disable all checkboxes and hide/show appropriate parts while we preload the images. */
  document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.disabled = true);
  document.querySelectorAll('.starting.button').forEach(el => el.style.display = 'none');
  document.querySelector('.loading.button').style.display = 'block';
  loading = true;

  preloadImages().then(() => {
    loading = false;
    document.querySelector('.progress').style.display = 'block';
    document.querySelector('.loading.button').style.display = 'none';
    document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'block');
    display();
  });
}

/** Displays the current state of the sorter. */
function display() {
  const percent = Math.floor(sortedNo * 100 / totalBattles) + '%';
  const leftCharIndex = sortedIndexList[leftIndex][leftInnerIndex];
  const rightCharIndex = sortedIndexList[rightIndex][rightInnerIndex];
  const leftChar = characterDataToSort[leftCharIndex];
  const rightChar = characterDataToSort[rightCharIndex];

  document.querySelector('.progressbattle').innerHTML = `Battle No. ${battleNo}`;
  document.querySelector('.progressfill').style.width = percent;
  document.querySelector('.progresstext').innerHTML = percent;

  document.querySelector('.left.sort.image').src = imageRoot + leftChar.img;
  document.querySelector('.right.sort.image').src = imageRoot + rightChar.img;

  document.querySelector('.left.sort.text > p').innerHTML = leftChar.name;
  document.querySelector('.right.sort.text > p').innerHTML = rightChar.name;
}

/**
 * Sort between two character choices or tie.
 * 
 * @param {'left'|'right'|'tie'} sortType
 */
function pick(sortType) {
  if (timeTaken || loading) { return; }
  else if (!timestamp) { return start(); }

  let sortedIndexListPrev = sortedIndexList.slice(0);
  let recordDataListPrev = recordDataList.slice(0);
  let parentIndexListPrev = parentIndexList.slice(0);
  let tiedDataListPrev = tiedDataList.slice(0);

  let leftIndexPrev = leftIndex;
  let leftInnerIndexPrev = leftInnerIndex;
  let rightIndexPrev = rightIndex;
  let rightInnerIndexPrev = rightInnerIndex;
  let battleNoPrev = battleNo;
  let sortedNoPrev = sortedNo;
  let pointerPrev = pointer;

  /** 
   * For picking 'left' or 'right':
   * 
   * Input the selected character's index into recordDataList. Increment the pointer of
   * recordDataList. Then, check if there are any ties with this character, and keep
   * incrementing until we find no more ties. 
   */
  switch (sortType) {
    case 'left': {
      choices += '0';
      recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
      leftInnerIndex++;
      pointer++;
      sortedNo++;
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
        leftInnerIndex++;
        pointer++;
        sortedNo++;
      }
      break;
    }
    case 'right': {
      choices += '1';
      recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
      rightInnerIndex;
      pointer++;
      sortedNo++;
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
        rightInnerIndex;
        pointer++;
        sortedNo++;
      }
      break;
    }

  /** 
   * For picking 'tie' (i.e. heretics):
   * 
   * Proceed as if we picked the 'left' character. Then, we record the right character's
   * index value into the list of ties (at the left character's index) and then proceed
   * as if we picked the 'right' character.
   */
    case 'tie': {
      choices += '2';
      recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
      leftInnerIndex++;
      pointer++;
      sortedNo++;
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
        leftInnerIndex++;
        pointer++;
        sortedNo++;
      }
      tiedDataList[recordDataList[pointer - 1]] = sortedIndexList[rightIndex][rightInnerIndex];
      recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
      rightInnerIndex++;
      pointer++;
      sortedNo++;
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
        rightInnerIndex;
        pointer++;
        sortedNo++;
      }
      break;
    }
    default: return;
  }

  /**
   * Once we reach the limit of the 'right' character list, we 
   * insert all of the 'left' characters into the record, or vice versa.
   */
  const leftListLen = sortedIndexList[leftIndex].length;
  const rightListLen = sortedIndexList[rightIndex].length;

  if (leftInnerIndex < leftListLen && rightInnerIndex === rightListLen) {
    while (leftInnerIndex < leftListLen) {
      recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
      leftInnerIndex++;
      pointer++;
      sortedNo++;
    }
  } else if (leftInnerIndex === leftListLen && rightInnerIndex < rightListLen) {
    while (rightInnerIndex < rightListLen) {
      recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
      rightInnerIndex++;
      pointer++;
      sortedNo++;
    }
  }

  /**
   * Once we reach the end of both 'left' and 'right' character lists, we can remove 
   * the arrays from the initial mergesort array, since they are now recorded. This
   * record is a sorted version of both lists, so we can replace their original 
   * (unsorted) parent with a sorted version. Purge the record afterwards.
   */
  if (leftInnerIndex === leftListLen && rightInnerIndex === rightListLen) {
    for (let i = 0; i < leftListLen + rightListLen; i++) {
      sortedIndexList[parentIndexList[leftIndex]][i] = recordDataList[i];
    }
    sortedIndexList.pop();
    sortedIndexList.pop();
    leftIndex = leftIndex - 2;
    rightIndex = rightIndex - 2;
    leftInnerIndex = 0;
    rightInnerIndex = 0;

    sortedIndexList.forEach((val, idx) => recordDataList[idx] = 0);
    pointer = 0;
  }

  /**
   * If, after shifting the 'left' index on the sorted list, we reach past the beginning
   * of the sorted array, that means the entire array is now sorted. The original unsorted
   * array in index 0 is now replaced with a sorted version, and we will now output this.
   */
  if (leftIndex < 0) {
    timeTaken = timeTaken || new Date().getTime() - timestamp;
    result();
  } else {
    battleNo++;
    display();
  }
}

/** Undo previous choice. */
function undo() {}

/** Shows the result of the sorter. */
function result() {}

function saveProgress() {}

function loadProgress() {}

function loadResult() {}

function generateImage() {}

function generateTextList() {}

function generateLink() {
  // LZString.compressToEncodedURIComponent()
}

/** Retrieve latest character data and options from dataset. */
function setLatestDataset() {
  /** Set some defaults. */
  timestamp = 0;
  timeTaken = 0;
  choices = '';

  const latestDateIndex = Object.keys(dataSet)
    .map(date => new Date(date))
    .reduce((latestDateIndex, currentDate, currentIndex, array) => {
      return currentDate > array[latestDateIndex] ? currentIndex : latestDateIndex;
    }, 0);
  currentVersion = Object.keys(dataSet)[latestDateIndex];

  characterData = dataSet[currentVersion].characterData;
  options = dataSet[currentVersion].options;

  populateOptions();
}

/** Populate option list. */
function populateOptions() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip = '', checked = true, disabled = false) => {
    return `<div><label class="${tooltip?'tooltip':''}" title="${tooltip}"><input id="cb-${id}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${name}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip = '', checked = true) => {
    return `<div class="large option"><label class="${tooltip?'tooltip':''}" title="${tooltip}"><input id="cbgroup-${id}" type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
  };

  /** Clear out any previous options. */
  optList.innerHTML = '';

  /** Insert sorter options and set grouped option behavior. */
  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.key, opt.tooltip, opt.checked));
      opt.sub.forEach((subopt, subindex) => {
        optList.insertAdjacentHTML('beforeend', optInsert(subopt.name, `${opt.key}-${subindex}`, subopt.tooltip, subopt.checked, opt.checked === false));
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');

      const groupbox = document.getElementById(`cbgroup-${opt.key}`);

      groupbox.parentElement.addEventListener('click', () => {
        opt.sub.forEach((subopt, subindex) => {
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = !groupbox.checked;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${subindex}`).checked = true; }
        });
      });
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.key, opt.tooltip, opt.checked));
    }
  });
}

/**
 * Decodes compressed shareable link query string.
 * @param {string} queryString
 */
function decodeQuery(queryString = window.location.search.slice(1)) {
  let successfulLoad;

  try {
    /** 
     * Retrieve data from compressed string. 
     * @type {string[]}
     */
    const decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|');
    if (!decoded[0]) {
      decoded.splice(0, 1);
      timeError = true;
    }

    timestamp = Number(decoded[0]);
    timeTaken = Number(decoded[1]);
    choices = decoded[3];

    const optDecoded = decoded[2];
    const suboptDecoded = decoded.slice(0);

    /** 
     * Get latest data set version from before the timestamp.
     * If timestamp is before or after any of the datasets, get the closest one.
     * If timestamp is between any of the datasets, get the one in the past, but if timeError is set, get the one in the future.
     */
    const seedDate = { str: timestamp, val: new Date(timestamp) };
    const dateMap = Object.keys(dataSet)
      .map(date => {
        return { str: date, val: new Date(date) };
      })
    const beforeDateIndex = dateMap
      .reduce((prevIndex, currDate, currIndex) => {
        return currDate.val < seedDate.val ? currIndex : prevIndex;
      }, -1);
    const afterDateIndex = dateMap.findIndex(date => date.val > seedDate.val);
    
    if (beforeDateIndex === -1) {
      currentVersion = dateMap[afterDateIndex].str;
    } else if (afterDateIndex === -1) {
      currentVersion = dateMap[beforeDateIndex].str;
    } else {
      currentVersion = dateMap[timeError ? afterDateIndex : beforeDateIndex].str;
    }

    options = dataSet[currentVersion].options;
    characterData = dataSet[currentVersion].characterData;

    /** Populate option list and decode options selected. */
    populateOptions();

    let suboptDecodedIndex = 0;
    options.forEach((opt, index) => {
      if ('sub' in opt) {
        const optIsTrue = optDecoded[index] === '1';
        document.getElementById(`cbgroup-${opt.key}`).checked = optIsTrue;
        opt.sub.forEach((subopt, subindex) => {
          const subIsTrue = optIsTrue ? suboptDecoded[suboptDecodedIndex][subindex] === '1' : true;
          document.getElementById(`cb-${opt.key}-${subindex}`).checked = subIsTrue;
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = optIsTrue;
        });
        suboptDecodedIndex = suboptDecodedIndex + optIsTrue ? 1 : 0;
      } else { document.getElementById(`cb-${opt.key}`).checked = optDecoded[index] === '1'; }
    });

    successfulLoad = true;
  } catch (err) {
    console.error(`Error loading shareable link: ${err}`);
    setLatestDataset(); // Restore to default function if loading link does not work.
  }

  if (successfulLoad) { start(); }
}

function preloadImages() {
  const loadImage = (src) => {
      return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = img.onabort = () => reject(src);
          img.src = src;
      });
  };
  const promises = characterDataToSort.map(char => loadImage(imageRoot + char.img));
  return Promise.all(promises);
}

window.onload = init;
