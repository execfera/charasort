dataSetVersion = "2022-05-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Beatles solo albums sorter",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Wonderwall Music", tooltip: "George Harrison", key: "WM" },
      { name: "Two Virgins", tooltip: "John Lennon", key: "TV" },
      { name: "Life with the Lions", tooltip: "John Lennon", key: "LwtL" },
      { name: "Electronic Sound", tooltip: "George Harrison", key: "ES" },
      { name: "Wedding Album", tooltip: "John Lennon", key: "WA" },
      { name: "Sentimental Journey", tooltip: "Ringo Starr", key: "SJ" },
      { name: "McCartney", tooltip: "Paul McCartney", key: "MI" },
      { name: "Beaucoups of Blues", tooltip: "Ringo Starr", key: "BoB" },
      { name: "All Things Must Pass", tooltip: "George Harrison", key: "ATMP" },
      { name: "Plastic Ono Band", tooltip: "John Lennon", key: "POB" },
      { name: "Ram", tooltip: "Paul McCartney", key: "RAM" },
      { name: "Imagine", tooltip: "John Lennon", key: "Im" },
      { name: "Wild Life", tooltip: "Paul McCartney", key: "WL" },
      { name: "Some Time in New York City", tooltip: "John Lennon", key: "STiNYC" },
      { name: "Red Rose Speedway", tooltip: "Paul McCartney", key: "RRS" },
      { name: "Living in the Material World", tooltip: "George Harrison", key: "LitMW" },
      { name: "Mind Games", tooltip: "John Lennon", key: "MG" },
      { name: "Ringo", tooltip: "Ringo Starr", key: "R73" },
      { name: "Band on the Run", tooltip: "Paul McCartney", key: "BotR" },
      { name: "Walls and Bridges", tooltip: "John Lennon", key: "WaB" },
      { name: "Goodnight Vienna", tooltip: "Ringo Starr", key: "GV" },
      { name: "Dark Horse", tooltip: "22 - Harrison", key: "DH" },
      { name: "Rock 'n' Roll", tooltip: "23 - Lennon", key: "RnR" },
      { name: "Venus and Mars", tooltip: "24 - McCartney", key: "VaM" },
      { name: "Extra Texture (Read All About It)", tooltip: "25 - Harrison", key: "ETRAAI" },
      { name: "Wings at the Speed of Sound", tooltip: "26 - McCartney", key: "WatSoS" },
      { name: "Ringo's Rotogravure", tooltip: "27 - Starr", key: "RR1" },
      { name: "Thirty Three and 1/3", tooltip: "28 - Harrison", key: "TT13" },
      { name: "Ringo the 4th", tooltip: "29 - Starr", key: "Rt4" },
      { name: "London Town", tooltip: "30 - McCartney", key: "LT" },
      { name: "Bad Boy", tooltip: "31 - Starr", key: "BB" },
      { name: "George Harrison", tooltip: "32 - Harrison", key: "GH" },
      { name: "Back to the Egg", tooltip: "33 - McCartney", key: "BttE" },
      { name: "McCartney II", tooltip: "34 - McCartney", key: "MII" },
      { name: "Double Fantasy", tooltip: "35 - Lennon", key: "DF" },
      { name: "Somewhere in England", tooltip: "36 - Harrison", key: "SiE" },
      { name: "Stop and Smell the Roses", tooltip: "37 - Starr", key: "SaStR" },
      { name: "Tug of War", tooltip: "38 - McCartney", key: "ToW" },
      { name: "Gone Troppo", tooltip: "39 - Harrison", key: "GT" },
      { name: "Old Wave", tooltip: "40 - Starr", key: "OW" },
      { name: "Pipes of Peace", tooltip: "41 - McCartney", key: "PoP" },
      { name: "Milk and Honey", tooltip: "42 - Lennon", key: "MaH" },
      { name: "Give My Regards to Broad Street", tooltip: "43 - McCartney", key: "GMRtBS" },
      { name: "Press to Play", tooltip: "44 - McCartney", key: "PtP" },
      { name: "Cloud Nine", tooltip: "45 - Harrison", key: "CN" },
      { name: "Choba B CCCP", tooltip: "46 - McCartney", key: "CBCCCP" },
      { name: "Flowers in the Dirt", tooltip: "47 - McCartney", key: "FitD" },
      { name: "Time Takes Time", tooltip: "48 - Starr", key: "TTT" },
      { name: "Off the Ground", tooltip: "49 - McCartney", key: "OtG" },
      { name: "Flaming Pie", tooltip: "50 - McCartney", key: "FP" },
      { name: "Vertical Man", tooltip: "51 - Starr", key: "VM" },
      { name: "Run Devil Run", tooltip: "52 - McCartney", key: "RDR" },
      { name: "I Wanna Be Santa Claus", tooltip: "53 - Starr", key: "IWBSC" },
      { name: "Driving Rain", tooltip: "54 - McCartney", key: "DR" },
      { name: "Brainwashed", tooltip: "55 - Harrison", key: "BW" },
      { name: "Ringo Rama", tooltip: "56 - Starr", key: "RR2" },
      { name: "Choose Love", tooltip: "57 - Starr", key: "CL" },
      { name: "Chaos and Creation in the Backyard", tooltip: "58 - McCartney", key: "CaCitB" },
      { name: "Memory Almost Full", tooltip: "59 - McCartney", key: "MAF" },
      { name: "Liverpool 8", tooltip: "60 - Starr", key: "L8" },
      { name: "Y Not", tooltip: "61 - Starr", key: "YN" },
      { name: "Ringo 2012", tooltip: "62 - Starr", key: "R2012" },
      { name: "Kisses on the Bottom", tooltip: "63 - McCartney", key: "KotB" },
      { name: "New", tooltip: "64 - McCartney", key: "NEW" },
      { name: "Postcards from Paradise", tooltip: "65 - Starr", key: "PfP" },
      { name: "Give More Love", tooltip: "66 - Starr", key: "GML" },
      { name: "Egypt Station", tooltip: "67 - McCartney", key: "ES" },
      { name: "What's My Name", tooltip: "68 - Starr", key: "WMN" },
      { name: "McCartney III", tooltip: "69 - McCartney", key: "MIII" },
    ]
  }];

dataSet[dataSetVersion].characterData = [
  {
    name: "Imagine",
    img: "https://upload.wikimedia.org/wikipedia/en/6/69/ImagineCover.jpg",
    opts: {
      series: [ "Im"]
    }
  },
  {
    name: "Too Many People",
    img: "https://upload.wikimedia.org/wikipedia/en/b/bd/RamMcCartneyalbumcover.jpg",
    opts: {
      series: [ "RAM"]
    }
  },
  {
    name: "My Sweet Lord",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a1/All_Things_Must_Pass_1970_cover.jpg",
    opts: {
      series: [ "ATMP"]
    }
  },
  {
    name: "Love Don't Last Long",
    img: "https://upload.wikimedia.org/wikipedia/en/1/12/BeaucoupsBCover.jpg",
    opts: {
      series: [ "BoB"]
    },
  },
  {
    name: "Beautiful Night",
    img: "https://upload.wikimedia.org/wikipedia/en/9/95/Flaming_Pie.jpg",
    opts: {
      series: [ "FP"]
    }
  },
  {
    name: "Beautiful Day",
    img: "https://upload.wikimedia.org/wikipedia/en/9/95/Flaming_Pie.jpg",
    opts: {
      series: [ "FP"]
    }
  }
];
