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
      { name: "Dark Horse", tooltip: "George Harrison", key: "DH" },
      { name: "Rock 'n' Roll", tooltip: "John Lennon", key: "RnR" },
      { name: "Venus and Mars", tooltip: "Paul McCartney", key: "VaM" },
      { name: "Extra Texture (Read All About It)", tooltip: "George Harrison", key: "ETRAAI" },
      { name: "Wings at the Speed of Sound", tooltip: "Paul McCartney", key: "WatSoS" },
      { name: "Ringo's Rotogravure", tooltip: "Ringo Starr", key: "RR1" },
      { name: "Thirty Three and 1/3", tooltip: "George Harrison", key: "TT13" },
      { name: "Ringo the 4th", tooltip: "Ringo Starr", key: "Rt4" },
      { name: "London Town", tooltip: "Paul McCartney", key: "LT" },
      { name: "Bad Boy", tooltip: "Ringo Starr", key: "BB" },
      { name: "George Harrison", tooltip: "George Harrison", key: "GH" },
      { name: "Back to the Egg", tooltip: "Paul McCartney", key: "BttE" },
      { name: "McCartney II", tooltip: "Paul McCartney", key: "MII" },
      { name: "Double Fantasy", tooltip: "John Lennon", key: "DF" },
      { name: "Somewhere in England", tooltip: "George Harrison", key: "SiE" },
      { name: "Stop and Smell the Roses", tooltip: "Ringo Starr", key: "SaStR" },
      { name: "Tug of War", tooltip: "Paul McCartney", key: "ToW" },
      { name: "Gone Troppo", tooltip: "George Harrison", key: "GT" },
      { name: "Old Wave", tooltip: "Ringo Starr", key: "OW" },
      { name: "Pipes of Peace", tooltip: "Paul McCartney", key: "PoP" },
      { name: "Milk and Honey", tooltip: "John Lennon", key: "MaH" },
      { name: "Give My Regards to Broad Street", tooltip: "Paul McCartney", key: "GMRtBS" },
      { name: "Press to Play", tooltip: "Paul McCartney", key: "PtP" },
      { name: "Cloud Nine", tooltip: "George Harrison", key: "CN" },
      { name: "Choba B CCCP", tooltip: "Paul McCartney", key: "CBCCCP" },
      { name: "Flowers in the Dirt", tooltip: "Paul McCartney", key: "FitD" },
      { name: "Time Takes Time", tooltip: "Ringo Starr", key: "TTT" },
      { name: "Off the Ground", tooltip: "Paul McCartney", key: "OtG" },
      { name: "Flaming Pie", tooltip: "Paul McCartney", key: "FP" },
      { name: "Vertical Man", tooltip: "Ringo Starr", key: "VM" },
      { name: "Run Devil Run", tooltip: "Paul McCartney", key: "RDR" },
      { name: "I Wanna Be Santa Claus", tooltip: "Ringo Starr", key: "IWBSC" },
      { name: "Driving Rain", tooltip: "Paul McCartney", key: "DR" },
      { name: "Brainwashed", tooltip: "George Harrison", key: "BW" },
      { name: "Ringo Rama", tooltip: "Ringo Starr", key: "RR2" },
      { name: "Choose Love", tooltip: "Ringo Starr", key: "CL" },
      { name: "Chaos and Creation in the Backyard", tooltip: "Paul McCartney", key: "CaCitB" },
      { name: "Memory Almost Full", tooltip: "Paul McCartney", key: "MAF" },
      { name: "Liverpool 8", tooltip: "Ringo Starr", key: "L8" },
      { name: "Y Not", tooltip: "Ringo Starr", key: "YN" },
      { name: "Ringo 2012", tooltip: "Ringo Starr", key: "R2012" },
      { name: "Kisses on the Bottom", tooltip: "Paul McCartney", key: "KotB" },
      { name: "New", tooltip: "Paul McCartney", key: "NEW" },
      { name: "Postcards from Paradise", tooltip: "Ringo Starr", key: "PfP" },
      { name: "Give More Love", tooltip: "Ringo Starr", key: "GML" },
      { name: "Egypt Station", tooltip: "Paul McCartney", key: "ES" },
      { name: "What's My Name", tooltip: "Ringo Starr", key: "WMN" },
      { name: "McCartney III", tooltip: "Paul McCartney", key: "MIII" },
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
