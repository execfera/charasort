dataSetVersion = "2023-08-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "game",
    tooltip: "Check this to restrict to certain games",
    checked: false,
    sub: [
      { name: "Phoenix Wright: Ace Attorney", key: "aa1" },
      { name: "Ace Attorney: Justice for All", key: "aa2" },
      { name: "Ace Attorney: Trials & Tribulations", key: "aa3" },
      { name: "Apollo Justice: Ace Attorney", key: "aa4" },
      { name: "Ace Attorney: Dual Destines", key: "aa5" },
      { name: "Ace Attorney: Spirit of Justice", key: "aa6" },
      { name: "Ace Attorney Investigations: Miles Edgeworth", key: "aai1" },
      { name: "Gyakuten Kenji 2", ttoltip: "Unofficial title: \"Ace Attorney Investigations: Prosecutor's Path\"", key: "aai2" },
      { name: "Professor Layton vs. Phoenix Wright: Ace Attorney", checked: false, key: "vs" },
      { name: "The Great Ace Attorney: Adventures", key: "dgs1" },
      { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" }
    ]
  },
  {
    name: "Filter by Role",
    key: "role",
    tooltip: "Check this to restrict to characters of a certain role",
    checked: false,
    sub: [ { name: "Defense attorneys", key: "atto" }, 
           { name: "Prosecutors", key: "pros" }, 
           { name: "Assistants", key: "assi" }, 
           { name: "Culprits", tooltip: "BEWARE OF SPOILERS", key: "cul" }, 
           { name: "Detectives", key: "det" }, 
           { name: "Victims",tooltip: "BEWARE OF SPOILERS", key: "vic" }, 
           { name: "Defendants", key: "def" }
    ]
  },
  {
    name: "Remove animals",
    key: "ani",
    tooltip: "Check this if you don't want animals to be listed",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Phoenix Wright",
    img: "src/assets/chars/phoenix.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6", "vs"],
      role: ["atto", "def"]
    }
  },
  {
    name: "Larry Butz",
    img: "src/assets/chars/larry.jpg",
    opts: {
      game: [ "aa1", "aa3", "aai1", "aai2", "aa6"],
      role: ["def"]
    }
  },
  {
    name: "Mia Fey",
    img: "src/assets/chars/mia.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3"],
      role: ["atto", "vic", "assi"]
    }
  },
  {
    name: "The Judge",
    img: "src/assets/chars/judge.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aai1", "aa4", "aa5", "aa6"],
      role: []
    }
  },
  {
    name: "Winston Payne",
    img: "src/assets/chars/winston.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4"],
      role: ["pros"]
    }
  },
  {
    name: "Frank Sahwit",
    img: "src/assets/chars/frank.jpg",
    opts: {
      game: [ "aa1", "aai2"],
      role: ["cul",  ]
    }
  },
  {
    name: "Cindy Stone",
    img: "src/assets/chars/cindy.jpg",
    opts: {
      game: [ "aa1"],
      role: ["vic"]
    }
  },
  {
    name: "Bellboy",
    img: "src/assets/chars/bellboy.jpg",
    opts: {
      game: [ "aa1", "aai1"],
      role: [ ]
    }
  },
  {
    name: "Charley",
    img: "src/assets/chars/charley.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6"],
    }
  },
  {
    name: "Miles Edgeworth",
    img: "src/assets/chars/miles.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aai1", "aai2", "aa5", "aa6", "vs"],
      role: ["pros", "def"]
    }
  },
  {
    name: "Maya Fey",
    img: "src/assets/chars/maya.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "vs", "aa6"],
      role: ["assi", "def",  ]
    }
  },
  {
    name: "Misty Fey (Elise Deauxnim)",
    img: "",
    opts: {
      game: [ "aa3"],
      role: ["vic"]
    }
  },
  {
    name: "April May",
    img: "src/assets/chars/april.jpg",
    opts: {
      game: [ "aa1"],
      role: [ ]
    }
  },
  {
    name: "Redd White",
    img: "src/assets/chars/red.jpg",
    opts: {
      game: [ "aa1"],
      role: [ "cul" ]
    }
  },
  {
    name: "Sal Manella",
    img: "src/assets/chars/sal.jpg",
    opts: {
      game: [ "aa1"],
      role: [ ]
    }
  },
  {
    name: "Wendy Oldbag",
    img: "src/assets/chars/oldbag.jpg",
    opts: {
      game: [ "aa1", "aa2", "aai1", "aai2"],
      role: [ ]
    }
  },
  {
    name: "Will Powers",
    img: "src/assets/chars/willp.jpg",
    opts: {
      game: [ "aa1", "aa2", "aai2"],
      role: [ "def"]
    }
  },
  {
    name: "Cody Hackins",
    img: "src/assets/chars/cody.jpg",
    opts: {
      game: [ "aa1"],
      role: [ ]
    }
  },
  {
    name: "Jack Hammer",
    img: "src/assets/chars/jackham.jpg",
    opts: {
      game: [ "aa1"],
      role: ["vic"]
    }
  },
  {
    name: "Penny Nichols",
    img: "src/assets/chars/penny.jpg",
    opts: {
      game: [ "aa1", "aai2"],
      role: [ ]
    }
  },
  {
    name: "Dee Vasquez",
    img: "src/assets/chars/deevas.jpg",
    opts: {
      game: [ "aa1"],
      role: [ "cul"]
    }
  },
  {
    name: "Lotta Hart",
    img: "src/assets/chars/lotta.jpg",
    opts: {
      game: [ "aa1", "aa2", "aai2"],
      role: [ ]
    }
  },
  {
    name: "Robert Hammond",
    img: "src/assets/chars/hammond.jpg",
    opts: {
      game: [ "aa1"],
      role: ["atto", "vic"]
    }
  },
  {
    name: "Marvin Grossberg",
    img: "src/assets/chars/grossb.jpg",
    opts: {
      game: [ "aa1", "aa3"],
      role: ["atto"]
    }
  },
  {
    name: "Polly (the parrot)",
    img: "src/assets/chars/polly.jpg",
    opts: {
      game: [ "aa1"],
      ani: true
    }
  },
  {
    name: "Yanni Yogi",
    img: "src/assets/chars/yanni.jpg",
    opts: {
      game: [ "aa1"],
      role: [ "cul"]
    }
  },
  {
    name: "Gregory Edgeworth",
    img: "src/assets/chars/gregory.jpg",
    opts: {
      game: [ "aa1", "aai2"],
      role: ["atto", "vic"]
    }
  },
  {
    name: "Dick Gumshoe",
    img: "src/assets/chars/gumsh.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4", "aai1", "aai2"],
      role: ["det"]
    }
  },
  {
    name: "Manfred von Karma",
    img: "src/assets/chars/manfred.jpg",
    opts: {
      game: [ "aa1", "aai1", "aai2"],
      role: ["pros", "cul"]
    }
  },
  {
    name: "Ema Skye",
    img: "src/assets/chars/ema.jpg",
    opts: {
      game: [ "aa1", "aa4", "aai1", "aai2", "aa6"],
      role: ["assi", "det"]
    }
  },
  {
    name: "Mike Meekins",
    img: "src/assets/chars/mike.jpg",
    opts: {
      game: [ "aa1", "aai1", "aa4"],
      role: [ ]
    }
  },
  {
    name: "Damon Gant",
    img: "src/assets/chars/gant.jpg",
    opts: {
      game: [ "aa1"],
      role: ["det", "cul"]
    }
  },
  {
    name: "Bruce Goodman",
    img: "src/assets/chars/goodman.jpg",
    opts: {
      game: [ "aa1"],
      role: ["det", "vic"]
    }
  },
  {
    name: "Jake Marshall",
    img: "src/assets/chars/marshall.jpg",
    opts: {
      game: [ "aa1"],
      role: [ "det"]
    }
  },
  {
    name: "Neil Marshall",
    img: "src/assets/chars/neil.jpg",
    opts: {
      game: [ "aa1"],
      role: ["pros", "vic"]
    }
  },
  {
    name: "Lana Skye",
    img: "src/assets/chars/lana.jpg",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6"],
      role: ["pros", "def",  ]
    }
  },
  {
    name: "Angel Starr",
    img: "src/assets/chars/angel.jpg",
    opts: {
      game: [ "aa1"],
      role: ["det"]
    }
  },
  {
    name: "Joe Darke",
    img: "src/assets/chars/joever.jpg",
    opts: {
      game: [ "aa1"],
      role: ["cul"]
    }
  },
  {
    name: "Pearl Fey",
    img: "src/assets/chars/pearl.jpg",
    opts: {
      game: [ "aa2", "aa3", "aa5","aa6"],
      role: ["assi"]
    }
  },
  {
    name: "Franziska von Karma",
    img: "src/assets/chars/franziska.jpg",
    opts: {
      game: [ "aa2", "aa3","aai1", "aai2"],
      role: ["pros"]
    }
  },
  {
    name: "Maggey Byrde",
    img: "src/assets/chars/maggey.jpg",
    opts: {
      game: [ "aa2", "aa3", "aai1"],
      role: ["def"]
    }
  },
  {
    name: "Dustin Prince",
    img: "src/assets/chars/prince.jpg",
    opts: {
      game: [ "aa2"],
      role: ["vic"]
    }
  },
  {
    name: "Richard Wellington",
    img: "src/assets/chars/richard.jpg",
    opts: {
      game: [ "aa2"],
      role: ["cul"]
    }
  },
  {
    name: "Director Hotti",
    img: "src/assets/chars/hotti.jpg",
    opts: {
      game: [ "aa2", "aa4"],
      role: ["cul"]
    }
  },
  {
    name: "Morgan Fey",
    img: "src/assets/chars/morgan.jpg",
    opts: {
      game: [ "aa2", "aa3"],
      role: ["cul"]
    }
  },
  {
    name: "Turner Grey",
    img: "src/assets/chars/grey.jpg",
    opts: {
      game: [ "aa2"],
      role: ["vic"]
    }
  },
  {
    name: "Mimi Miney",
    img: "src/assets/chars/mimi.jpg",
    opts: {
      game: [ "aa2"],
      role: [ "cul"]
    }
  },
   {
    name: "Ini Miney",
    img: "src/assets/chars/ini.jpg",
    opts: {
      game: [ "aa2"],
      role: [ ]
    }
  },
   {
    name: "Ami Fey",
    img: "src/assets/chars/ami.jpg",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Acro (a.k.a Ken Dingling)",
    img: "src/assets/chars/acro.jpg",
    opts: {
      game: [ "aa2"],
      role: ["wil", "cul"]
    }
  },
  {
    name: "Bat (a.k.a Sean Dingling)",
    img: "src/assets/chars/bat.jpg",
    opts: {
      game: [ "aa2"],
      role: ["vic"]
    }
  },
  {
    name: "Regina Berry",
    img: "src/assets/chars/regina.jpg",
    opts: {
      game: [ "aa2", "aai2"],
      role: [ ]
    }
  },
  {
    name: "Russel Berry",
    img: "src/assets/chars/russel.jpg",
    opts: {
      game: [ "aa2"],
      role: ["vic"]
    }
  },
  {
    name: "Max Galactica",
    img: "src/assets/chars/max.jpg",
    opts: {
      game: [ "aa2"],
      role: ["def"]
    }
  },
  {
    name: "Lawrence 'Moe' Curls",
    img: "src/assets/chars/moe.jpg",
    opts: {
      game: [ "aa2"],
      role: [ ]
    }
  },
  {
    name: "Money",
    img: "src/assets/chars/money.jpg",
    opts: {
      game: [ "aa2", "aai2"],
      ani: true
    }
  },
  {
    name: "Regent",
    img: "src/assets/chars/regent.jpg",
    opts: {
      game: [ "aa2"],
      ani: true
    }
  },
  {
    name: "Benjamin Woodman",
    img: "src/assets/chars/benwoods.jpg",
    opts: {
      game: [ "aa2"],
      role: [ ]
    }
  },
  {
    name: "Trilo",
    img: "src/assets/chars/trilo.jpg",
    opts: {
      game: [ "aa2"],
      role: [ ]
    }
  },
  {
    name: "Léon",
    img: "src/assets/chars/leon.jpg",
    opts: {
      game: [ "aa2"],
      ani: true
    }
  },
  {
    name: "Adrian Andrews",
    img: "src/assets/chars/AA.jpg",
    opts: {
      game: [ "aa2", "aa3"],
      role: [ ]
    }
  },
  {
    name: "Shelly de Killer",
    img: "src/assets/chars/dekiller.jpg",
    opts: {
      game: [ "aa2", "aai2"],
      role: ["cul",  ]
    }
  },
  {
    name: "Juan Corrida",
    img: "src/assets/chars/juan.jpg",
    opts: {
      game: [ "aa2"],
      role: ["vic"]
    }
  },
  {
    name: "Matt Engarde",
    img: "src/assets/chars/matt.jpg",
    opts: {
      game: [ "aa2"],
      role: ["cul", "def"]
    }
  },
  {
    name: "Celeste Inpax",
    img: "src/assets/chars/celeste.jpg",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Missile",
    img: "src/assets/chars/missile.jpg",
    opts: {
      game: [ "aa1"],
      ani: true
    }
  },
  {
    name: "Diego \"Godot\" Armando",
    img: "src/assets/chars/godot.jpg",
    opts: {
      game: [ "aa3"],
      role: ["pros", "vic", "cul"]
    }
  },
  {
    name: "Dahlia Hawthorne",
    img: "src/assets/chars/dahlia.jpg",
    opts: {
      game: [ "aa3"],
      role: [  "cul", "vic"]
    }
  },
  {
    name: "Judge's brother",
    img: "src/assets/chars/canjudge.jpg",
    opts: {
      game: [ "aa3"],
    }
  },
  {
    name: "Doug Swallow",
    img: "src/assets/chars/doug.jpg",
    opts: {
      game: [ "aa3"],
      role: ["vic"]
    }
  },
  {
    name: "Ron DeLite",
    img: "src/assets/chars/ron.jpg",
    opts: {
      game: [ "aa3"],
      role: [  "def"]
    }
  },
  {
    name: "Kane Bullard",
    img: "src/assets/chars/kane.jpg",
    opts: {
      game: [ "aa3"],
      role: ["wivict"]
    }
  },
  {
    name: "Desirée DeLite",
    img: "src/assets/chars/desire.jpg",
    opts: {
      game: [ "aa3"],
      role: [ ]
    }
  },
  {
    name: "Glen Elg",
    img: "src/assets/chars/glenelg.jpg",
    opts: {
      game: [ "aa3"],
      role: ["vic"]
    }
  },
  {
    name: "Viola Cadaverini",
    img: "src/assets/chars/viola.jpg",
    opts: {
      game: [ "aa3"],
      role: [ ]
    }
  },
  {
    name: "Bruto Cadaverini",
    img: "src/assets/chars/bruto.jpg",
    opts: {
      game: [ "aa3"],
      role: []
    }
  },
  {
    name: "Lisa Basil",
    img: "src/assets/chars/lisabasil.jpg",
    opts: {
      game: [ "aa3"],
      role: [ ]
    }
  },
  {
    name: "Jean Armstrong",
    img: "src/assets/chars/jean.jpg",
    opts: {
      game: [ "aa3"],
      role: [ ]
    }
  },
  {
    name: "Victor Kudo",
    img: "src/assets/chars/victor.jpg",
    opts: {
      game: [ "aa3"],
      role: [ ]
    }
  },
  {
    name: "Furio Tigre",
    img: "src/assets/chars/tigr.jpg",
    opts: {
      game: [ "aa3"],
      role: [  "cul"]
    }
  },
  {
    name: "Terry Fawles",
    img: "src/assets/chars/terry.jpg",
    opts: {
      game: [ "aa3"],
      role: [  "def"]
    }
  },
  {
    name: "Valerie Hawthorne",
    img: "src/assets/chars/valerie.jpg",
    opts: {
      game: [ "aa3"],
      role: ["vic"]
    }
  },
  {
    name: "Iris",
    img: "src/assets/chars/iris.jpg",
    opts: {
      game: [ "aa3"],
      role: ["def"]
    }
  },
  {
    name: "Bikini",
    img: "src/assets/chars/bikini.jpg",
    opts: {
      game: [ "aa3"],
      role: [ ]
    }
  },
  {
    name: "Apollo Justice",
    img: "src/assets/chars/apollo.jpg",
    opts: {
      game: [ "aa4", "aa5", "aa6"],
      role: [  "atto", "assi"]
    }
  },
  {
    name: "Trucy Wright",
    img: "src/assets/chars/trucy.jpg",
    opts: {
      game: [ "aa4", "aa5", "aa6"],
      role: [  "assi", "def"]
    }
  },
  {
    name: "Klavier Gavin",
    img: "src/assets/chars/klavier.jpg",
    opts: {
      game: [ "aa4", "aa5"],
      role: [  "pros"]
    }
  },
  {
    name: "Kristoph Gavin",
    img: "src/assets/chars/kristoph.jpg",
    opts: {
      game: [ "aa4"],
      role: [  "cul", "atto"]
    }
  },
  {
    name: "Zak 'Shadi Smith' Gramarye",
    img: "src/assets/chars/zak.jpg",
    opts: {
      game: [ "aa4"],
      role: ["vic", "def"]
    }
  },
  {
    name: "Olga Orly",
    img: "src/assets/chars/olga.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Guy Eldoon",
    img: "src/assets/chars/guyel.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Plum Kitaki",
    img: "src/assets/chars/plum.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Winfred 'Big Wins' Kitaki",
    img: "src/assets/chars/win.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Wocky Kitaki",
    img: "src/assets/chars/wocky.jpg",
    opts: {
      game: [ "aa4"],
      role: [  "def"]
    }
  },
  {
    name: "Pal Meraktis",
    img: "src/assets/chars/palmer.jpg",
    opts: {
      game: [ "aa4"],
      role: ["vic"]
    }
  },
  {
    name: "Wesley Stickler",
    img: "src/assets/chars/stickler.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Alita Tiala",
    img: "src/assets/chars/alita.jpg",
    opts: {
      game: [ "aa4"],
      role: [  "cul"]
    }
  },
  {
    name: "Valant Gramarye",
    img: "src/assets/chars/valant.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Thalassa 'Lamiroir' Gramarye",
    img: "src/assets/chars/thalassa.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Daryan Crescend",
    img: "src/assets/chars/darian.jpg",
    opts: {
      game: [ "aa4"],
      role: [  "cul", "det"]
    }
  },
  {
    name: "Romein LeTouse",
    img: "src/assets/chars/romein.jpg",
    opts: {
      game: [ "aa4"],
      role: ["vic"]
    }
  },
  {
    name: "Machi Tobaye",
    img: "src/assets/chars/machi.jpg",
    opts: {
      game: [ "aa4"],
      role: [  "def"]
    }
  },
  {
    name: "Spark Brushel",
    img: "src/assets/chars/spark.jpg",
    opts: {
      game: [ "aa4"],
      role: [ ]
    }
  },
  {
    name: "Drew Misham",
    img: "src/assets/chars/drew.jpg",
    opts: {
      game: [ "aa4"],
      role: ["vic"]
    }
  },
  {
    name: "Vera Misham",
    img: "src/assets/chars/vera.jpg",
    opts: {
      game: [ "aa4"],
      role: [  "def"]
    }
  },
  {
    name: "Magnifi Gramarye",
    img: "src/assets/chars/magnifi.jpg",
    opts: {
      game: [ "aa4"],
      role: ["vic"]
    }
  },
  {
    name: "Athena Cykes",
    img: "src/assets/chars/athena.jpg",
    opts: {
      game: [ "aa5", "aa6"],
      role: [  "atto", "def", "assi"]
    }
  },
  {
    name: "Simon Blackquill",
    img: "src/assets/chars/blackqu.jpg",
    opts: {
      game: [ "aa5", "aa6"],
      role: [  "def", "pros"]
    }
  },
  {
    name: "Bobby Fulbright (Phantom)",
    img: "src/assets/chars/bobby.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "det", "cul"]
    }
  },
  {
    name: "Gaspen Payne",
    img: "src/assets/chars/gaspen.jpg",
    opts: {
      game: [ "aa5", "aap"],
      role: ["pros"]
    }
  },
  {
    name: "Juniper Woods",
    img: "src/assets/chars/junie.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "def"]
    }
  },
  {
    name: "Ted Tonate",
    img: "src/assets/chars/ted.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "cul"]
    }
  },
  {
    name: "Candice Arme",
    img: "src/assets/chars/candice.jpg",
    opts: {
      game: [ "aa4"],
      role: ["vic", "det"]
    }
  },
  {
    name: "Rex Kyubi",
    img: "src/assets/chars/rex.jpg",
    opts: {
      game: [ "aa5"],
      role: ["vic"]
    }
  },
  {
    name: "Jinxie Tenma",
    img: "src/assets/chars/junxie.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Damian Tenma",
    img: "src/assets/chars/damian.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "def"]
    }
  },
  {
    name: "Phienas Filch",
    img: "src/assets/chars/phineas.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Florent L'Belle",
    img: "src/assets/chars/lebelle.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "cul"]
    }
  },
  {
    name: "Hugh O'Conner",
    img: "src/assets/chars/hugh.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Robin Newman",
    img: "src/assets/chars/newman.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Aristotle Means",
    img: "src/assets/chars/aristo.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "atto", "cul"]
    }
  },
  {
    name: "Constance Courte",
    img: "src/assets/chars/const.jpg",
    opts: {
      game: [ "aa5"],
      role: ["vic"]
    }
  },
  {
    name: "Myriam Scuttlebutt",
    img: "src/assets/chars/myriam.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Clay Terran",
    img: "src/assets/chars/clay.jpg",
    opts: {
      game: [ "aa5"],
      role: ["vic"]
    }
  },
  {
    name: "Solomon Starbuck",
    img: "src/assets/chars/solomon.jpg",
    opts: {
      game: [ "aa5"],
      role: [  "def"]
    }
  },
  {
    name: "Yuri Cosmos",
    img: "src/assets/chars/yuri.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Aura Blackquill",
    img: "src/assets/chars/aura.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Metis Cykes",
    img: "src/assets/chars/metis.jpg",
    opts: {
      game: [ "aa5"],
      role: ["vic"]
    }
  },
  {
    name: "Sasha Buckler",
    img: "src/assets/chars/sasha.jpg",
    opts: {
      game: [ "aa5"],
      role: ["def"]
    }
  },
  {
    name: "Orla Shipley",
    img: "src/assets/chars/orla.jpg",
    opts: {
      game: [ "aa5"],
      role: ["def", "ani"]
    }
  },
  {
    name: "Jack Shipley",
    img: "src/assets/chars/jackshi.jpg",
    opts: {
      game: [ "aa5"],
      role: ["vic"]
    }
  },
  {
    name: "Marlon Rimes",
    img: "src/assets/chars/marlon.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Ora Shipley",
    img: "src/assets/chars/ora.jpg",
    opts: {
      game: [ "aa5"],
      role: [ "ani" ]
    }
  },
  {
    name: "Herman Crab",
    img: "src/assets/chars/herman.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Norma DePlume",
    img: "src/assets/chars/norma.jpg",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Azura Summers",
    img: "src/assets/chars/azura.jpg",
    opts: {
      game: [ "aa5"],
    }
  },
  {
    name: "Ponco",
    img: "",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Clonco",
    img: "",
    opts: {
      game: [ "aa5"],
      role: [ ]
    }
  },
  {
    name: "Sniper",
    img: "",
    opts: {
      game: [ "aa5"],
      role: [ "ani" ]
    }
  },
  {
    name: "Nahyuta Sahdmadhi",
    img: "src/assets/chars/nahyuta.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "pros"]
    }
  },
  {
    name: "Rayfa Padma Khura'in",
    img: "src/assets/chars/rayfa.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Ahlbi Ur'gaid",
    img: "src/assets/chars/albi.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "def"]
    }
  },
  {
    name: "Khura'inese Judge",
    img: "src/assets/chars/khuj.jpg",
    opts: {
      game: [ "aa6"],
      role: []
    }
  },
  {
    name: "Amara Sigatar Khura'in",
    img: "src/assets/chars/amara.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "vic"]
    }
  },
  {
    name: "Shah'do",
    img: "src/assets/chars/shahdo.jpg",
    opts: {
      game: [ "aa6"],
      ani: true
    }
  },
  {
    name: "Inga Karkhuul Khura'in",
    img: "src/assets/chars/inga.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic", "cul"]
    }
  },
  {
    name: "Dhurke Sahdmadhi",
    img: "src/assets/chars/dhurke.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "vic", "atto"]
    }
  },
  {
    name: "Datz Are'bal",
    img: "src/assets/chars/datz.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Ga'ran Sigatar Khura'in",
    img: "src/assets/chars/garan.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "pros", "cul"]
    }
  },
  {
    name: "Pees'lubn Andistan'dhin",
    img: "src/assets/chars/peacelove.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "cul"]
    }
  },
  {
    name: "Paht Rohl",
    img: "src/assets/chars/paht rol.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Bonny de Famme",
    img: "src/assets/chars/bonnny.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Betty de Famme",
    img: "src/assets/chars/betty.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Roger Retinz",
    img: "src/assets/chars/retinz.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "cul"]
    }
  },
  {
    name: "Manov Mistree",
    img: "src/assets/chars/manov mistree.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Tahrust Inmee",
    img: "src/assets/chars/tahrust.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "vic"]
    }
  },
  {
    name: "Behleeb Inmee",
    img: "src/assets/chars/behleeb.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Puhray Zeh'lot",
    img: "src/assets/chars/puhray.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Taifu Toneido",
    img: "src/assets/chars/taifu.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Bucky Whet",
    img: "src/assets/chars/bucky.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "def"]
    }
  },
  {
    name: "Geiru Toneido",
    img: "src/assets/chars/geiru.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "cul"]
    }
  },
  {
    name: "Uendo Toneido",
    img: "src/assets/chars/uend.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Paul Atishon",
    img: "src/assets/chars/paul.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "cul"]
    }
  },
  {
    name: "Archie Buff",
    img: "src/assets/chars/archieb.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Armie Buff",
    img: "src/assets/chars/imgonline-com-ua-Resize-htFUKajJ2t.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Jove Justice",
    img: "src/assets/chars/jove.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Ellen Wyatt",
    img: "src/assets/chars/ellen.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "def"]
    }
  },
  {
    name: "Sorin Sprocket",
    img: "src/assets/chars/sorin.jpg",
    opts: {
      game: [ "aa6"],
      role: [ ]
    }
  },
  {
    name: "Pierce Nichody",
    img: "src/assets/chars/pierce.jpg",
    opts: {
      game: [ "aa6"],
      role: [  "cul"]
    }
  },
  {
    name: "Dumas Gloomsbury",
    img: "src/assets/chars/dumas.jpg",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Selena Sprocket",
    img: "src/assets/chars/selena.jpg",
    opts: {
      game: [ "aa6"],
      role: []
    }
  },
  {
    name: "Kay Faraday",
    img: "src/assets/chars/kay.jpg",
    opts: {
      game: [ "aai1", "aai2"],
      role: ["assi",  ]
    }
  },
  {
    name: "Shi-Long Lang",
    img: "src/assets/chars/lang.jpg",
    opts: {
      game: [ "aai1", "aai2"],
      role: [  "det"]
    }
  },
  {
    name: "Calisto Yew (a.k.a Shih-na)",
    img: "src/assets/chars/calisto.jpg",
    opts: {
      game: ["aai1"],
      role: [  "atto", "cul"],
    }
  },
  {
    name: "Tyrell Badd",
    img: "src/assets/chars/badd.jpg",
    opts: {
      game: ["aai1", "aai2"],
      role: [  "det"],
    }
  },
  {
    name: "Buddy Faith",
    img: "src/assets/chars/buddy.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic", "det"],
    }
  },
  {
    name: "Jacques Portsman",
    img: "src/assets/chars/jaques.jpg",
    opts: {
      game: ["aai1"],
      role: [  "cul", "pros"],
    }
  },
  {
    name: "Zinc Lablanc",
    img: "src/assets/chars/zinc.jpg",
    opts: {
      game: ["aai1"],
      role: [ ],
    }
  },
  {
    name: "Ackbey Hicks",
    img: "src/assets/chars/ackbey.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Cammy Meele",
    img: "src/assets/chars/cammy.jpg",
    opts: {
      game: ["aai1"],
      role: [  "cul"],
    }
  },
  {
    name: "Rhoda Teneiro",
    img: "src/assets/chars/rhoda.jpg",
    opts: {
      game: ["aai1"],
      role: [ ],
    }
  },
  {
    name: "Ernest Amano",
    img: "src/assets/chars/amanosr.jpg",
    opts: {
      game: ["aai1"],
      role: [ ],
    }
  },
  {
    name: "Lance Amano",
    img: "src/assets/chars/lance.jpg",
    opts: {
      game: ["aai1"],
      role: [  "cul"],
    }
  },
  {
    name: "Colin Devorae",
    img: "src/assets/chars/colin.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Lauren Paups",
    img: "src/assets/chars/lauren.jpg",
    opts: {
      game: ["aai1"],
      role: [ ],
    }
  },
  {
    name: "Byrne Faraday",
    img: "src/assets/chars/byrne.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic", "pros"],
    }
  },
  {
    name: "Dein Mann",
    img: "src/assets/chars/deid mann.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Mack Rell",
    img: "src/assets/chars/mackrell.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic", "cul"],
    }
  },
  {
    name: "Cece Yew",
    img: "src/assets/chars/cece.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Quercus Alba",
    img: "src/assets/chars/querqus.jpg",
    opts: {
      game: ["aai1"],
      role: [  "cul"],
    }
  },
  {
    name: "Manny Coachen",
    img: "src/assets/chars/manny.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic", "cul"],
    }
  },
  {
    name: "Ka-Shi Nou",
    img: "src/assets/chars/kashi.jpg",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Colias Palaeno",
    img: "src/assets/chars/colyas.jpg",
    opts: {
      game: ["aai1"],
      role: [ ],
    }
  },
  {
    name: "Raymond Shields",
    img: "src/assets/chars/ray.jpg",
    opts: {
      game: ["aai2"],
      role: ["assi", "atto"],
    }
  },
  {
    name: "Justine Courtney",
    img: "src/assets/chars/justine.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Sebastian Debeste",
    img: "src/assets/chars/sebastian.jpg",
    opts: {
      game: ["aai2"],
      role: [  "pros"],
    }
  },
  {
    name: "Di-Jun Huang",
    img: "src/assets/chars/dijun.jpg",
    opts: {
      game: ["aai2"],
      role: [  "vic"],
    }
  },
  {
    name: "Nicole Swift",
    img: "src/assets/chars/nicole.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Horace Knightley",
    img: "src/assets/chars/HORACE.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul", "vic"],
    }
  },
  {
    name: "Ethan Rooke",
    img: "src/assets/chars/rooke.jpg",
    opts: {
      game: ["aai2"],
      role: ["vic"],
    }
  },
  {
    name: "Patricia Roland",
    img: "src/assets/chars/patricia.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul"],
    }
  },
  {
    name: "Simon Keyes",
    img: "src/assets/chars/simon.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul"],
    }
  },
  {
    name: "Jay Elbird",
    img: "src/assets/chars/jay.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Rocky",
    img: "src/assets/chars/rocky.jpg",
    opts: {
      game: ["aai2"],
      ani: true
    }
  },
  {
    name: "Sirhan Dogen",
    img: "src/assets/chars/dogen.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul"],
    }
  },
  {
    name: "Jeffrey Master",
    img: "src/assets/chars/master.jpg",
    opts: {
      game: ["aai2"],
      role: ["def"],
    }
  },
  {
    name: "Katherine Hall",
    img: "src/assets/chars/kate.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul"],
    }
  },
  {
    name: "Delicia Scones",
    img: "src/assets/chars/delicia.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Dane Gustavia",
    img: "src/assets/chars/dane.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul"],
    }
  },
  {
    name: "Isaac Dover (a.k.a. Pierre Hoquet)",
    img: "src/assets/chars/isaac.jpg",
    opts: {
      game: ["aai2"],
      role: ["vic"],
    }
  },
  {
    name: "Karin Jenson",
    img: "src/assets/chars/karin.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Bonnie Young",
    img: "src/assets/chars/bonny.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Anubis",
    img: "src/assets/chars/anubis.jpg",
    opts: {
      game: ["aai2"],
      ani: true
    }
  },
  {
    name: "Blaise Debeste",
    img: "src/assets/chars/blaise.jpg",
    opts: {
      game: ["aai2"],
      role: [  "cul", "pros"],
    }
  },
  {
    name: "Jill Crane",
    img: "src/assets/chars/jill.jpg",
    opts: {
      game: ["aai2"],
      role: ["vic", "atto"],
    }
  },
  {
    name: "John Marsh",
    img: "src/assets/chars/john marsh.jpg",
    opts: {
      game: ["aai2"],
      role: [ ],
    }
  },
  {
    name: "Jack Cameron",
    img: "src/assets/chars/cameron.jpg",
    opts: {
      game: ["aai2"],
      role: ["vic"],
    }
  },
  {
    name: "Ryunosuke Naruhodo",
    img: "src/assets/chars/ryu.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["atto", "def"],
    }
  },
  {
    name: "Susato Mikotoba",
    img: "src/assets/chars/susa.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["assi"],
    }
  },
  {
    name: "Kazuma Asogi",
    img: "src/assets/chars/kazuma.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["atto", "vic", "pros"],
    }
  },
  {
    name: "Herlock Sholmes",
    img: "src/assets/chars/hurley.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["det", "assi"],
    }
  },
  {
    name: "Iris Wilson",
    img: "src/assets/chars/irisw.jpg",
    opts: {
      game: ["dgs1", "dgs 2"],
      role: ["assi"],
    }
  },
  {
    name: "Barok van Zieks",
    img: "src/assets/chars/barok.jpg",
    opts: {
      game: ["dgs1"],
      role: ["pros", "def",  ],
    }
  },
  {
    name: "Yujin Mikotoba",
    img: "src/assets/chars/miko.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [ ],
    }
  },
  {
    name: "John Wilson",
    img: "src/assets/chars/watson.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["vic"],
    }
  },
  {
    name: "Seishiro Jigoku",
    img: "src/assets/chars/jigoku.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [  "cul"],
    }
  },
  {
    name: "Taketsuchi Auchi",
    img: "src/assets/chars/auchi.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["pros"]
    }
  },
  {
    name: "Satoru Hosonaga",
    img: "src/assets/chars/satoru.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [  "det"]
    }
  },
  {
    name: "Iyesa Nosa",
    img: "src/assets/chars/iyesa.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ]
    }
  },
  {
    name: "Aido Nosa",
    img: "src/assets/chars/aido nosa.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Kyurio Korekuta",
    img: "src/assets/chars/kyurio.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Asa Shinn (a.k.a Jezaille Brett)",
    img: "src/assets/chars/asashin.jpg",
    opts: {
      game: ["dgs1"],
      role: [  "vic", "cul"],
    }
  },
  {
    name: "Nikolina Pavlova",
    img: "src/assets/chars/pavlova.jpg",
    opts: {
      game: ["dgs1"],
      role: [  "cul"],
    }
  },
  {
    name: "Darka",
    img: "src/assets/chars/darka.jpg",
    opts: {
      game: ["dgs1"],
      ani: true
    }
  },
  {
    name: "Pirozhko",
    img: "src/assets/chars/pirozhko.jpg",
    opts: {
      game: ["dgs1"],
      ani: true
    }
  },
  {
    name: "Bif Strogenov",
    img: "src/assets/chars/bif.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Mael Stronghart",
    img: "src/assets/chars/hart.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["cul"],
    }
  },
  {
    name: "Magnus McGilded",
    img: "src/assets/chars/nagnus.jpg",
    opts: {
      game: ["dgs1"],
      role: [  "vic", "cul", "def"],
    }
  },
  {
    name: "Mason Milverton ('Thrise-Fired Mason')",
    img: "src/assets/chars/mason.jpg",
    opts: {
      game: ["dgs1"],
      role: ["vic"],
    }
  },
  {
    name: "Beppo/Sandwich",
    img: "src/assets/chars/beppo.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [ ],
    }
  },
  {
    name: "Lay D. Furst",
    img: "src/assets/chars/lady.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Gina Lestrade",
    img: "src/assets/chars/gina.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [  "det", "def"],
    }
  },
  {
    name: "Soseki Natsume",
    img: "src/assets/chars/soseki.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [  "def"],
    }
  },
  {
    name: "Olive Green",
    img: "src/assets/chars/olive.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [  "vic", "cul"],
    }
  },
  {
    name: "John Garrideb",
    img: "src/assets/chars/garri.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [ ],
    }
  },
  {
    name: "Joan Garrideb",
    img: "src/assets/chars/joan.jpg",
    opts: {
      game: ["dgs1"],
      role: [  "cul"],
    }
  },
  {
    name: "Roly Beate",
    img: "src/assets/chars/beate.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Patricia Beate",
    img: "src/assets/chars/patbeate.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Tobias Gregson",
    img: "src/assets/chars/gregson.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["det", "vic"],
    }
  },
  {
    name: "Wagahai",
    img: "src/assets/chars/wagahai.jpg",
    opts: {
      game: ["dgs1", "dgs2"],
      ani: true
    }
  },
  {
    name: "Pop Windibank",
    img: "src/assets/chars/pop.jpg",
    opts: {
      game: ["dgs1"],
      role: ["vic"],
    }
  },
  {
    name: "Ashley Graydon",
    img: "src/assets/chars/ahsley.jpg",
    opts: {
      game: ["dgs1"],
      role: [  "cul"],
    }
  },
  {
    name: "Judge of the Old Bailey",
    img: "src/assets/chars/santajudge.jpg",
    opts: {
      game: ["dgs1"],
      role: [],
    }
  },
  {
    name: "Nash Skulkin",
    img: "src/assets/chars/mash.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Ringo Skulkin",
    img: "src/assets/chars/ringo.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Vilen Borshevik",
    img: "src/assets/chars/vilen.jpg",
    opts: {
      game: ["dgs1"],
      role: [ ],
    }
  },
  {
    name: "Genshin Asogi",
    img: "src/assets/chars/genshin.jpg",
    opts: {
      game: ["dgs2"],
      role: ["vic", "cul", "det"],
    }
  },
  {
    name: "Klint van Zieks",
    img: "src/assets/chars/klint.jpg",
    opts: {
      game: ["dgs2"],
      role: ["cul", "vic", "pros"],
    }
  },
  {
    name: "Chief Inspector Toby",
    img: "src/assets/chars/toby.jpg",
    opts: {
      game: ["dgs2"],
      ani: true
    }
  },
  {
    name: "Rei Membami",
    img: "src/assets/chars/haori.jpg",
    opts: {
      game: ["dgs1"],
      role: [  "def"],
    }
  },
  {
    name: "Raiten Menimemo",
    img: "src/assets/chars/meni.jpg",
    opts: {
      game: ["dgs2"],
      role: [  "cul"],
    }
  },
  {
    name: "William Shamspeare",
    img: "src/assets/chars/sham.jpg",
    opts: {
      game: ["dgs2"],
      role: [  "vic", "cul"],
    }
  },
  {
    name: "Adron B. Metermann",
    img: "src/assets/chars/meter.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Quinby Altamont",
    img: "src/assets/chars/queen.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Duncan Ross",
    img: "src/assets/chars/dunkan.jpg",
    opts: {
      game: ["dgs2"],
      role: ["vic"],
    }
  },
  {
    name: "Selden",
    img: "src/assets/chars/selden.jpg",
    opts: {
      game: ["dgs2"],
      role: ["cul"],
    }
  },
  {
    name: "Albert Harebrayne",
    img: "src/assets/chars/albert.jpg",
    opts: {
      game: ["dgs2"],
      role: [  "def"],
    }
  },
  {
    name: "Esmeralda Tusspells",
    img: "src/assets/chars/tuss.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Wilhelm Gottsreich Sigismond 'Gotts' Ormstein",
    img: "src/assets/chars/gotts.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Odie Asman",
    img: "src/assets/chars/odie.jpg",
    opts: {
      game: ["dgs2"],
      role: ["vic"],
    }
  },
  {
    name: "Balthasar Lune",
    img: "src/assets/chars/lune.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Enoch Drebber",
    img: "src/assets/chars/dreb.jpg",
    opts: {
      game: ["dgs2"],
      role: [  "cul"],
    }
  },
  {
    name: "Courtney Sithe",
    img: "src/assets/chars/courtney.jpg",
    opts: {
      game: ["dgs2"],
      role: [  "cul"],
    }
  },
  {
    name: "Maria Gorey",
    img: "src/assets/chars/maria.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Evie Vigil",
    img: "src/assets/chars/evie.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Daley Vigil",
    img: "src/assets/chars/daley.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Barry Caidin",
    img: "src/assets/chars/barry.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Venus",
    img: "src/assets/chars/venus.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Fabien de Rosseau",
    img: "src/assets/chars/rosseau.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Peppino de Rossi",
    img: "src/assets/chars/rossi.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Tchikin Strogenov",
    img: "src/assets/chars/tchikin.jpg",
    opts: {
      game: ["dgs2"],
      role: [ ],
    }
  },
  {
    name: "Balmung",
    img: "src/assets/chars/balmung.jpg",
    opts: {
      game: ["dgs2"],
      ani: true
    }
  },
  {
    name: "Lady Baskerville",
    img: "src/assets/chars/ladyb.jpg",
    opts: {
      game: ["dgs2"],
      role: []
    }
  },
  {
    name: "Hershel Layton",
    img: "src/assets/chars/layton.jpg",
    opts: {
      game: ["vs"],
      role: ["vic", "assi"],
    }
  },
  {
    name: "Luke Triton",
    img: "src/assets/chars/luke.jpg",
    opts: {
      game: ["vs"],
      role: ["assi"],
    }
  },
  {
    name: "Arthur 'The Storyteller' Cantabella",
    img: "src/assets/chars/arthus.jpg",
    opts: {
      game: ["vs"],
      role: [  "vic", "cul"],
    }
  },
  {
    name: "Espella Cantabella",
    img: "src/assets/chars/espella.jpg",
    opts: {
      game: ["vs"],
      role: ["assi", "def"],
    }
  },
  {
    name: "Zacharias Barnham",
    img: "src/assets/chars/barnham.jpg",
    opts: {
      game: ["vs"],
      role: ["pros"],
    }
  },
  {
    name: "Eve 'Darklaw' Belduke",
    img: "src/assets/chars/evebel.jpg",
    opts: {
      game: ["vs"],
      role: ["pros", "cul"],
    }
  },
  {
    name: "Labyrinthian Judge",
    img: "src/assets/chars/labjudge.jpg",
    opts: {
      game: ["vs"],
      role: [],
    }
  },
  {
    name: "Eve",
    img: "src/assets/chars/eve.jpg",
    opts: {
      game: ["vs"],
      ani: true
    }
  },
  {
    name: "Prosecutor Flynch",
    img: "src/assets/chars/flynch.jpg",
    opts: {
      game: ["vs"],
      role: ["pros"],
    }
  },
  {
    name: "Johny Smiles",
    img: "src/assets/chars/smiles.jpg",
    opts: {
      game: ["vs"],
      role: [ ]
    }
  },
  {
    name: "Olivia Aldente",
    img: "src/assets/chars/olivia.jpg",
    opts: {
      game: ["vs"],
      role: ["vic"]
    }
  },
  {
    name: "Allan",
    img: "src/assets/chars/allan.jpg",
    opts: {
      game: ["vs"],
      role: []
    }
  }
];
