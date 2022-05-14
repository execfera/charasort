/**
 * @typedef {{name: string, key: string, tooltip?: string, checked?: boolean, sub?: {name: string, tooltip?: string, checked?: string}[]}[]} Options
 * @typedef {{name: string, img: string, opts: Object<string, boolean|number[]}[]} SongData
*/

/**
 * Data set. Songs will be removed from the sorting array based on selected options, working down the array.
 * 
 * @type {Object.<string, {options: Options, characterData: CharData}>}
*/
const dataSet = {};

/** 
 * Data set version, in YYYY-MM-DD form.
 * 
 * @example '2022-05-14'
*/
let dataSetVersion = '';

/**
 * Image root, will be appended to the start of every image URL.
 */
const imageRoot = 'https://i.imgur.com/';
