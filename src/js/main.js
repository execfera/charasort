/** @type {CharacterData} */
let characterData = [];
/** @type {CharacterData} */
let characterDataToSort = [];

/** @type {Options} */
let options = [];

/** @type {(boolean|boolean[])[]} */
let optTaken = [];

let prngSeed = '';
let timeTaken = 0;
let leftIndex = 0;
let rightIndex = 0;
let choices = '';


/** Initialize script. */
function init() {
  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', pick('right'));
  
  document.querySelector('.sorting.tie.button').addEventListener('click', pick('tie'));
  document.querySelector('.sorting.undo.button').addEventListener('click', undo);
  document.querySelector('.sorting.save.button').addEventListener('click', saveProgress);

  setLatestDataset();

  /** Decode query string if available. */
  decodeQuery(window.location.search.slice(1));
}

/** Begin sorting. */
function start() {
  document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.disabled = true);

  prngSeed = prngSeed || new Date().toISOString().split('T')[0];
  Math.seedrandom(prngSeed);

  /** Copy data into sorting array to filter. */
  characterDataToSort = characterData.slice(0);

  /** Check selected options. */
  options.forEach(opt => {
    if ('sub' in opt) {
      if (!document.getElementById(`cbgroup-${opt.key}`).checked) optTaken.push(false);
      else {
        let i = 0, suboptArray = [];
        while (i < opt.sub.length) { suboptArray.push(document.getElementById(`cb-${opt.key}-${i++}`).checked); }
        optTaken.push(suboptArray);
      }
    } else { optTaken.push(document.getElementById(`cb-${opt.key}`).checked); }
  });

  /** Filter out deselected criteria. */
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
}

/**
 * Sort between two character choices or tie.
 * 
 * @param {'left'|'right'|'tie'} sortType
 */
function pick(sortType) {

}

/** Undo previous choice. */
function undo() {}

function display() {}

function result() {}

function saveProgress() {}

function loadProgress() {}

function loadResult() {}

function generateImage() {}

function generateTextList() {}

function generateLink() {
  // LZString.compressToEncodedURIComponent()
}

function setLatestDataset() {
  /** Use latest character data and options. */
  const latestDateIndex = Object.keys(dataSet)
  .map(date => new Date(date))
  .reduce((latestDateIndex, currentDate, currentIndex, array) => {
    return currentDate > array[latestDateIndex] ? currentIndex : latestDateIndex;
  }, 0);
  const latestDate = Object.keys(dataSet)[latestDateIndex];

  characterData = dataSet[latestDate].characterData;
  options = dataSet[latestDate].options;

  /** Set some defaults. */
  prngSeed = '';
  timeTaken = 0;
  choices = '';
  
  /** Insert data from new options. */
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
        let i = 0;
        while (i < opt.sub.length) {
          document.getElementById(`cb-${opt.key}-${i}`).disabled = !groupbox.checked;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${i}`).checked = true; }
          i++;
        }
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
function decodeQuery(queryString) {
  if (!queryString) return;

  let successfulLoad;

  try {
    /** 
     * Retrieve data from compressed string. 
     * @type {string[]}
     */
    const decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|');

    prngSeed = decoded[0];
    timeTaken = Number(decoded[1]);
    choices = decoded[3];

    const optDecoded = decoded[2];
    const suboptDecoded = decoded.slice(0);

    /** 
     * Get latest data set version from before the seed's date.
     * If seed date is before any of the datasets, get the earliest one.
     */
    const seedDate = { str: prngSeed, val: new Date(prngSeed) };
    const dateMap = Object.keys(dataSet)
      .map(date => {
        return { str: date, val: new Date(date) };
      })
    const dateVersion = dateMap
      .sort((a, b) => a.val - b.val)
      .reduce((prevDate, currDate) => {
        return currDate.val > prevDate.val && currDate.val > seedDate.val ? prevDate : currDate;
      }, seedDate);
    const targetVersion = dateVersion.val < dateMap[0].val ? dateMap[0].str : dateVersion.str;

    options = dataSet[targetVersion].options;
    characterData = dataSet[targetVersion].characterData;

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
  const promises = characterData.map(char => loadImage(imageRoot + char.img));
  return Promise.all(promises);
}

window.onload = init;
