/** @type {SongData} */
let songData       = [];   // Initial song data set used.
/** @type {SongData} */
let songDataToSort = [];   // Song data set after filtering.
/** @type {Options} */
let options             = [];   // Initial option set used.

let currentVersion      = '';   // Which version of songData and options are used.

/** @type {(boolean|boolean[])[]} */
let optTaken  = [];             // Records which options are set.

/** Save Data. Concatenated into array, joined into string (delimited by '|') and compressed with lz-string. */
let timestamp = 0;        // savedata[0]      (Unix time when sorter was started, used as initial PRNG seed and in dataset selection)
let timeTaken = 0;        // savedata[1]      (Number of ms elapsed when sorter ends, used as end-of-sort flag and in filename generation)
let choices   = '';       // savedata[2]      (String of '0', '1' and '2' that records what sorter choices are made)
let optStr    = '';       // savedata[3]      (String of '0' and '1' that denotes top-level option selection)
let suboptStr = '';       // savedata[4...n]  (String of '0' and '1' that denotes nested option selection, separated by '|')
let timeError = false;    // Shifts entire savedata array to the right by 1 and adds an empty element at savedata[0] if true.

/** Intermediate sorter data. */
let sortedIndexList = [];
let recordDataList  = [];
let parentIndexList = [];
let tiedDataList    = [];

let leftIndex       = 0;
let leftInnerIndex  = 0;
let rightIndex      = 0;
let rightInnerIndex = 0;
let battleNo        = 1;
let sortedNo        = 0;
let pointer         = 0;

/** A copy of intermediate sorter data is recorded for undo() purposes. */
let sortedIndexListPrev = [];
let recordDataListPrev  = [];
let parentIndexListPrev = [];
let tiedDataListPrev    = [];

let leftIndexPrev       = 0;
let leftInnerIndexPrev  = 0;
let rightIndexPrev      = 0;
let rightInnerIndexPrev = 0;
let battleNoPrev        = 1;
let sortedNoPrev        = 0;
let pointerPrev         = 0;

/** Miscellaneous sorter data that doesn't need to be saved for undo(). */
let finalSongs = [];
let loading         = false;
let totalBattles    = 0;
let sorterURL       = window.location.host + window.location.pathname;
let storedSaveType  = localStorage.getItem(`${sorterURL}_saveType`);

/** Initialize script. */
function init() {

  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', () => pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', () => pick('right'));
  
  document.querySelector('.sorting.tie.button').addEventListener('click', () => pick('tie'));
  document.querySelector('.sorting.undo.button').addEventListener('click', undo);
  document.querySelector('.sorting.save.button').addEventListener('click', () => saveProgress('Progress'));
  
  document.querySelector('.finished.save.button').addEventListener('click', () => saveProgress('Last Result'));
  document.querySelector('.finished.getimg.button').addEventListener('click', generateImage);
  document.querySelector('.finished.list.button').addEventListener('click', generateTextList);

  document.querySelector('.clearsave').addEventListener('click', clearProgress);

  /** Define keyboard controls (up/down/left/right vimlike k/j/h/l). */
  document.addEventListener('keypress', (ev) => {
    /** If sorting is in progress. */
    if (timestamp && !timeTaken && !loading && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 's': case '3':                   saveProgress('Progress'); break;
        case 'h': case 'ArrowLeft':           pick('left'); break;
        case 'l': case 'ArrowRight':          pick('right'); break;
        case 'k': case '1': case 'ArrowUp':   pick('tie'); break;
        case 'j': case '2': case 'ArrowDown': undo(); break;
        default: break;
      }
    }
    /** If sorting has ended. */
    else if (timeTaken && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 'k': case '1': saveProgress('Last Result'); break;
        case 'j': case '2': generateImage(); break;
        case 's': case '3': generateTextList(); break;
        default: break;
      }
    } else { // If sorting hasn't started yet.
      switch(ev.key) {
        case '1': case 's': case 'Enter': start(); break;
        case '2': case 'l':               loadProgress(); break;
        default: break;
      }
    }
  });

  document.querySelector('.image.selector').insertAdjacentElement('beforeend', document.createElement('select'));

  /** Initialize image quantity selector for results. */
  for (let i = 0; i <= 10; i++) {
    const select = document.createElement('option');
    select.value = i;
    select.text = i;
    if (i === 3) { select.selected = 'selected'; }
    document.querySelector('.image.selector > select').insertAdjacentElement('beforeend', select);
  }

  document.querySelector('.image.selector > select').addEventListener('input', (e) => {
    const imageNum = e.target.options[e.target.selectedIndex].value;
    result(Number(imageNum));
  });

  /** Show load button if save data exists. */
  if (storedSaveType) {
    document.querySelector('.starting.load.button > span').insertAdjacentText('beforeend', storedSaveType);
    document.querySelectorAll('.starting.button').forEach(el => {
      el.style['grid-row'] = 'span 3';
      el.style.display = 'block';
    });
  }

  setLatestDataset();

  /** Decode query string if available. */
  if (window.location.search.slice(1) !== '') decodeQuery();
}

/** Begin sorting. */
function start() {
  /** Copy data into sorting array to filter. */
  songDataToSort = songData.slice(0);

  /** Check selected options and convert to boolean array form. */
  optTaken = [];

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
  optStr    = '';
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
          if (subBool) { subList.push(options[index].sub[subIndex].key); }
          return subList;
        }, []);
        songDataToSort = songDataToSort.filter(song => {
          if (!(opt.key in song.opts)) console.warn(`Warning: ${opt.key} not set for ${song.name}.`);
          return opt.key in song.opts && song.opts[opt.key].some(key => subArray.includes(key));
        });
      }
    } else if (optTaken[index]) {
      songDataToSort = songDataToSort.filter(song => !song.opts[opt.key]);
    }
  });

  if (songDataToSort.length < 2) {
    alert('Cannot sort with less than two songs. Please reselect.');
    return;
  }

  /** Shuffle song array with timestamp seed. */
  timestamp = timestamp || new Date().getTime();
  if (new Date(timestamp) < new Date(currentVersion)) { timeError = true; }
  Math.seedrandom(timestamp);

  songDataToSort = songDataToSort
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

  /**
   * tiedDataList will keep a record of indexes on which songs are equal (i.e. tied) 
   * to another one. recordDataList will have an interim list of sorted elements during
   * the mergesort process.
   */

  recordDataList  = songDataToSort.map(() => 0);
  tiedDataList    = songDataToSort.map(() => -1);

  /** 
   * Put a list of indexes that we'll be sorting into sortedIndexList. These will refer back
   * to songDataToSort.
   * 
   * Begin splitting each element into little arrays and spread them out over sortedIndexList
   * increasing its length until it become arrays of length 1 and you can't split it anymore. 
   * 
   * parentIndexList indicates each element's parent (i.e. where it was split from), except 
   * for the first element, which has no parent.
   */

  sortedIndexList[0] = songDataToSort.map((val, idx) => idx);
  parentIndexList[0] = -1;

  let midpoint = 0;   // Indicates where to split the array.
  let marker   = 1;   // Indicates where to place our newly split array.

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

  leftIndex  = sortedIndexList.length - 2;    // Start with the second last value and...
  rightIndex = sortedIndexList.length - 1;    // the last value in the sorted list and work our way down to index 0.

  leftInnerIndex  = 0;                        // Inner indexes, because we'll be comparing the left array
  rightInnerIndex = 0;                        // to the right array, in order to merge them into one sorted array.

  /** Disable all checkboxes and hide/show appropriate parts while we preload the images. */
  document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.disabled = true);
  document.querySelectorAll('.starting.button').forEach(el => el.style.display = 'none');
  document.querySelector('.loading.button').style.display = 'block';
  document.querySelector('.progress').style.display = 'block';
  loading = true;

  preloadImages().then(() => {
    loading = false;
    document.querySelector('.loading.button').style.display = 'none';
    document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'block');
    display();
  });
}

/** Displays the current state of the sorter. */
function display() {
  const percent         = Math.floor(sortedNo * 100 / totalBattles);
  const leftSongIndex   = sortedIndexList[leftIndex][leftInnerIndex];
  const rightSongIndex  = sortedIndexList[rightIndex][rightInnerIndex];
  const leftSong        = songDataToSort[leftSongIndex];
  const rightSong       = songDataToSort[rightSongIndex];

  const songNameDisp = name => {
    const songName = reduceTextWidth(name, 'Arial 12.8px', 220);
    const songTooltip = name !== songName ? name : '';
    return `<p title="${songTooltip}">${songName}</p>`;
  };

  progressBar(`Battle No. ${battleNo}`, percent);

  document.querySelector('.left.sort.image').src = leftSong.img;
  document.querySelector('.right.sort.image').src = rightSong.img;

  

  document.querySelector('.left.sort.text').innerHTML = songNameDisp(leftSong.name);
  document.querySelector('.right.sort.text').innerHTML = songNameDisp(rightSong.name);

  /** Autopick if choice has been given. */
  if (choices.length !== battleNo - 1) {
    switch (Number(choices[battleNo - 1])) {
      case 0: pick('left'); break;
      case 1: pick('right'); break;
      case 2: pick('tie'); break;
      default: break;
    }
  } else { saveProgress('Autosave'); }
}

/**
 * Sort between two song choices or tie.
 * 
 * @param {'left'|'right'|'tie'} sortType
 */
function pick(sortType) {
  if ((timeTaken && choices.length === battleNo - 1) || loading) { return; }
  else if (!timestamp) { return start(); }

  sortedIndexListPrev = sortedIndexList.slice(0);
  recordDataListPrev  = recordDataList.slice(0);
  parentIndexListPrev = parentIndexList.slice(0);
  tiedDataListPrev    = tiedDataList.slice(0);

  leftIndexPrev       = leftIndex;
  leftInnerIndexPrev  = leftInnerIndex;
  rightIndexPrev      = rightIndex;
  rightInnerIndexPrev = rightInnerIndex;
  battleNoPrev        = battleNo;
  sortedNoPrev        = sortedNo;
  pointerPrev         = pointer;

  /** 
   * For picking 'left' or 'right':
   * 
   * Input the selected song's index into recordDataList. Increment the pointer of
   * recordDataList. Then, check if there are any ties with this song, and keep
   * incrementing until we find no more ties. 
   */
  switch (sortType) {
    case 'left': {
      if (choices.length === battleNo - 1) { choices += '0'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      break;
    }
    case 'right': {
      if (choices.length === battleNo - 1) { choices += '1'; }
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }

  /** 
   * For picking 'tie' (i.e. heretics):
   * 
   * Proceed as if we picked the 'left' song. Then, we record the right song's
   * index value into the list of ties (at the left song's index) and then proceed
   * as if we picked the 'right' song.
   */
    case 'tie': {
      if (choices.length === battleNo - 1) { choices += '2'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      tiedDataList[recordDataList[pointer - 1]] = sortedIndexList[rightIndex][rightInnerIndex];
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }
    default: return;
  }

  /**
   * Once we reach the limit of the 'right' song list, we 
   * insert all of the 'left' songs into the record, or vice versa.
   */
  const leftListLen = sortedIndexList[leftIndex].length;
  const rightListLen = sortedIndexList[rightIndex].length;

  if (leftInnerIndex < leftListLen && rightInnerIndex === rightListLen) {
    while (leftInnerIndex < leftListLen) {
      recordData('left');
    }
  } else if (leftInnerIndex === leftListLen && rightInnerIndex < rightListLen) {
    while (rightInnerIndex < rightListLen) {
      recordData('right');
    }
  }

  /**
   * Once we reach the end of both 'left' and 'right' song lists, we can remove 
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

    progressBar(`Battle No. ${battleNo} - Completed!`, 100);

    result();
  } else {
    battleNo++;
    display();
  }
}

/**
 * Records data in recordDataList.
 * 
 * @param {'left'|'right'} sortType Record from the left or the right song array.
 */
function recordData(sortType) {
  if (sortType === 'left') {
    recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
    leftInnerIndex++;
  } else {
    recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
    rightInnerIndex++;
  }
  
  pointer++;
  sortedNo++;
}

/**
 * Modifies the progress bar.
 * 
 * @param {string} indicator
 * @param {number} percentage
 */
function progressBar(indicator, percentage) {
  document.querySelector('.progressbattle').innerHTML = indicator;
  document.querySelector('.progressfill').style.width = `${percentage}%`;
  document.querySelector('.progresstext').innerHTML = `${percentage}%`;
}

/**
 * Shows the result of the sorter.
 * 
 * @param {number} [imageNum=3] Number of images to display. Defaults to 3.
 */
function result(imageNum = 3) {
  document.querySelectorAll('.finished.button').forEach(el => el.style.display = 'block');
  document.querySelector('.image.selector').style.display = 'block';
  document.querySelector('.time.taken').style.display = 'block';
  
  document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'none');
  document.querySelector('.options').style.display = 'none';
  document.querySelector('.info').style.display = 'none';

  const header = '<div class="result head"><div class="left">Order</div><div class="right">Name</div></div>';
  const timeStr = `This sorter was completed on ${new Date(timestamp + timeTaken).toString()} and took ${msToReadableTime(timeTaken)}. <a href="${location.protocol}//${sorterURL}">Do another sorter?</a>`;
  const imgRes = (song, num) => {
    const songName = reduceTextWidth(song.name, 'Arial 12px', 160);
    const songTooltip = song.name !== songName ? song.name : '';
    return `<div class="result image"><div class="left"><span>${num}</span></div><div class="right"><img src="${song.img}"><div><span title="${songTooltip}">${songName}</span></div></div></div>`;
  }
  const res = (song, num) => {
    const songName = reduceTextWidth(song.name, 'Arial 12px', 160);
    const songTooltip = song.name !== songName ? song.name : '';
    return `<div class="result"><div class="left">${num}</div><div class="right"><span title="${songTooltip}">${songName}</span></div></div>`;
  }

  let rankNum       = 1;
  let tiedRankNum   = 1;
  let imageDisplay  = imageNum;

  const finalSortedIndexes = sortedIndexList[0].slice(0);
  const resultTable = document.querySelector('.results');
  const timeElem = document.querySelector('.time.taken');

  resultTable.innerHTML = header;
  timeElem.innerHTML = timeStr;

  songDataToSort.forEach((val, idx) => {
    const songIndex = finalSortedIndexes[idx];
    const song = songDataToSort[songIndex];
    if (imageDisplay-- > 0) {
      resultTable.insertAdjacentHTML('beforeend', imgRes(song, rankNum));
    } else {
      resultTable.insertAdjacentHTML('beforeend', res(song, rankNum));
    }
    finalSongs.push({ rank: rankNum, name: song.name });

    if (idx < songDataToSort.length - 1) {
      if (tiedDataList[songIndex] === finalSortedIndexes[idx + 1]) {
        tiedRankNum++;            // Indicates how many songs are tied at the same rank.
      } else {
        rankNum += tiedRankNum;   // Add it to the actual ranking, then reset it.
        tiedRankNum = 1;          // The default value is 1, so it increments as normal if no ties.
      }
    }
  });
}

/** Undo previous choice. */
function undo() {
  if (timeTaken) { return; }

  choices = battleNo === battleNoPrev ? choices : choices.slice(0, -1);

  sortedIndexList = sortedIndexListPrev.slice(0);
  recordDataList  = recordDataListPrev.slice(0);
  parentIndexList = parentIndexListPrev.slice(0);
  tiedDataList    = tiedDataListPrev.slice(0);

  leftIndex       = leftIndexPrev;
  leftInnerIndex  = leftInnerIndexPrev;
  rightIndex      = rightIndexPrev;
  rightInnerIndex = rightInnerIndexPrev;
  battleNo        = battleNoPrev;
  sortedNo        = sortedNoPrev;
  pointer         = pointerPrev;

  display();
}

/** 
 * Save progress to local browser storage.
 * 
 * @param {'Autosave'|'Progress'|'Last Result'} saveType
*/
function saveProgress(saveType) {
  const saveData = generateSavedata();

  localStorage.setItem(`${sorterURL}_saveData`, saveData);
  localStorage.setItem(`${sorterURL}_saveType`, saveType);

  if (saveType !== 'Autosave') {
    const saveURL = `${location.protocol}//${sorterURL}?${saveData}`;
    const inProgressText = 'You may click Load Progress after this to resume, or use this URL.';
    const finishedText = 'You may use this URL to share this result, or click Load Last Result to view it again.';

    window.prompt(saveType === 'Last Result' ? finishedText : inProgressText, saveURL);
  }
}

/**
 * Load progress from local browser storage.
*/
function loadProgress() {
  const saveData = localStorage.getItem(`${sorterURL}_saveData`);

  if (saveData) decodeQuery(saveData);
}

/** 
 * Clear progress from local browser storage.
*/
function clearProgress() {
  storedSaveType = '';

  localStorage.removeItem(`${sorterURL}_saveData`);
  localStorage.removeItem(`${sorterURL}_saveType`);

  document.querySelectorAll('.starting.start.button').forEach(el => el.style['grid-row'] = 'span 6');
  document.querySelectorAll('.starting.load.button').forEach(el => el.style.display = 'none');
}

function generateImage() {
  const timeFinished = timestamp + timeTaken;
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const filename = 'sort-' + (new Date(timeFinished - tzoffset)).toISOString().slice(0, -5).replace('T', '(') + ').png';

  html2canvas(document.querySelector('.results')).then(canvas => {
    const dataURL = canvas.toDataURL();
    const imgButton = document.querySelector('.finished.getimg.button');
    const resetButton = document.createElement('a');

    imgButton.removeEventListener('click', generateImage);
    imgButton.innerHTML = '';
    imgButton.insertAdjacentHTML('beforeend', `<a href="${dataURL}" download="${filename}">Download Image</a><br><br>`);

    resetButton.insertAdjacentText('beforeend', 'Reset');
    resetButton.addEventListener('click', (event) => {
      imgButton.addEventListener('click', generateImage);
      imgButton.innerHTML = 'Generate Image';
      event.stopPropagation();
    });
    imgButton.insertAdjacentElement('beforeend', resetButton);
  });
}

function generateTextList() {
  const data = finalSongs.reduce((str, song) => {
    str += `${song.rank}. ${song.name}<br>`;
    return str;
  }, '');
  const oWindow = window.open("", "", "height=640,width=480");
  oWindow.document.write(data);
}

function generateSavedata() {
  const saveData = `${timeError?'|':''}${timestamp}|${timeTaken}|${choices}|${optStr}${suboptStr}`;
  return LZString.compressToEncodedURIComponent(saveData);
}

/** Retrieve latest song data and options from dataset. */
function setLatestDataset() {
  /** Set some defaults. */
  timestamp = 0;
  timeTaken = 0;
  choices   = '';

  const latestDateIndex = Object.keys(dataSet)
    .map(date => new Date(date))
    .reduce((latestDateIndex, currentDate, currentIndex, array) => {
      return currentDate > array[latestDateIndex] ? currentIndex : latestDateIndex;
    }, 0);
  currentVersion = Object.keys(dataSet)[latestDateIndex];

  songData = dataSet[currentVersion].songData;
  options = dataSet[currentVersion].options;

  populateOptions();
}

/** Populate option list. */
function populateOptions() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip, checked = true, disabled = false) => {
    return `<div><label title="${tooltip?tooltip:name}"><input id="cb-${id}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${name}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip, checked = true) => {
    return `<div class="large option"><label title="${tooltip?tooltip:name}"><input id="cbgroup-${id}" type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
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

    timestamp = Number(decoded.splice(0, 1)[0]);
    timeTaken = Number(decoded.splice(0, 1)[0]);
    choices   = decoded.splice(0, 1)[0];

    const optDecoded    = decoded.splice(0, 1)[0];
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
    songData = dataSet[currentVersion].songData;

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

/** 
 * Preloads images in the filtered song data and converts to base64 representation.
*/
function preloadImages() {
  const totalLength = songDataToSort.length;
  let imagesLoaded = 0;

  const loadImage = async (src) => {
    const blob = await fetch(src).then(res => res.blob());
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = ev => {
        progressBar(`Loading Image ${++imagesLoaded}`, Math.floor(imagesLoaded * 100 / totalLength));
        res(ev.target.result);
      };
      reader.onerror = rej;
      reader.readAsDataURL(blob);
    });
  };

  return Promise.all(songDataToSort.map(async (song, idx) => {
    songDataToSort[idx].img = await loadImage(imageRoot + song.img);
  }));
}

/**
 * Returns a readable time string from milliseconds.
 * 
 * @param {number} milliseconds
 */
function msToReadableTime (milliseconds) {
  let t = Math.floor(milliseconds/1000);
  const years = Math.floor(t / 31536000);
  t = t - (years * 31536000);
  const months = Math.floor(t / 2592000);
  t = t - (months * 2592000);
  const days = Math.floor(t / 86400);
  t = t - (days * 86400);
  const hours = Math.floor(t / 3600);
  t = t - (hours * 3600);
  const minutes = Math.floor(t / 60);
  t = t - (minutes * 60);
  const content = [];
	if (years) content.push(years + " year" + (years > 1 ? "s" : ""));
	if (months) content.push(months + " month" + (months > 1 ? "s" : ""));
	if (days) content.push(days + " day" + (days > 1 ? "s" : ""));
	if (hours) content.push(hours + " hour"  + (hours > 1 ? "s" : ""));
	if (minutes) content.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
	if (t) content.push(t + " second" + (t > 1 ? "s" : ""));
  return content.slice(0,3).join(', ');
}

/**
 * Reduces text to a certain rendered width.
 *
 * @param {string} text Text to reduce.
 * @param {string} font Font applied to text. Example "12px Arial".
 * @param {number} width Width of desired width in px.
 */
function reduceTextWidth(text, font, width) {
  const canvas = reduceTextWidth.canvas || (reduceTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  if (context.measureText(text).width < width * 0.8) {
    return text;
  } else {
    let reducedText = text;
    while (context.measureText(reducedText).width + context.measureText('..').width > width * 0.8) {
      reducedText = reducedText.slice(0, -1);
    }
    return reducedText + '..';
  }
}

window.onload = init;
