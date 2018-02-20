const prngSeed = '2000-01-01'
const seedDate = { str: prngSeed, val: new Date(prngSeed) };
const dateMap = ['2018-01-01', '2017-01-01']
  .map(date => {
    return { str: date, val: new Date(date) };
  })
  .sort((a, b) => a.val - b.val);
let dateVersion = dateMap
  .reduce((prevDate, currDate) => {
    return currDate.val > prevDate.val && currDate.val > seedDate.val ? prevDate : currDate;
  }, seedDate).str;
dateVersion = new Date(dateVersion) < dateMap[0].val ? dateMap[0].str : dateVersion;

console.log(dateVersion);