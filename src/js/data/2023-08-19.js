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
      { name: "Gyakuten Kenji 2", key: "aai2" },
      { name: "Professor Layton vs. Phoenix Wright: Ace Attorney", checked: false, key: "vs" },
      { name: "The Great Ace Attorney: Adventures", key: "dgs1" },
      { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" },
      
      
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
           { name: "Witnesses", key: "wit" }, 
           { name: "Culprits", tooltip: "BEWARE OF SPOILERS", key: "cul" }, 
           { name: "Detectives", key: "det" }, 
           { name: "Victims",tooltip: "BEWARE OF SPOILERS", key: "vic" }, 
           { name: "Defendants", key: "def" }
    ]
  }
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
      role: ["def", "wit"]
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
      role: [wit]
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
      role: ["cul", "wit"]
    }
  },
  {
    name: "Cindy Stone",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["vic"]
    }
  },
  {
    name: "Bellboy",
    img: "",
    opts: {
      game: [ "aa1", "aai1"],
      role: ["wit"]
    }
  },
  {
    name: "Charley",
    img: "",
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
      role: ["assi", "def", "wit"]
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
      role: ["wit"]
    }
  },
  {
    name: "Redd White",
    img: "src/assets/chars/red.jpg",
    opts: {
      game: [ "aa1"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Sal Manella",
    img: "src/assets/chars/sal.jpg",
    opts: {
      game: [ "aa1"],
      role: ["wit"]
    }
  },
  {
    name: "Wendy Oldbag",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aai1", "aai2"],
      role: ["wit"]
    }
  },
  {
    name: "Will Powers",
    img: "src/assets/chars/willp.jpg",
    opts: {
      game: [ "aa1", "aa2", "aai2"],
      role: ["wit", "def"]
    }
  },
  {
    name: "Cody Hackins",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit"]
    }
  },
  {
    name: "Jack Hammer",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["vic"]
    }
  },
  {
    name: "Penny Nichols",
    img: "",
    opts: {
      game: [ "aa1", "aai2"],
      role: ["wit"]
    }
  },
  {
    name: "Dee Vasquez",
    img: "src/assets/chars/deevas.jpg",
    opts: {
      game: [ "aa1"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Lotta Hart",
    img: "src/assets/chars/lotta.jpg",
    opts: {
      game: [ "aa1", "aa2", "aai2"],
      role: ["wit"]
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
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit"]
    }
  },
  {
    name: "Yanni Yogi",
    img: "src/assets/chars/yanni.jpg",
    opts: {
      game: [ "aa1"],
      role: ["wit", "cul"]
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
      role: ["wit"]
    }
  },
  {
    name: "Damon Gant",
    img: "src/assets/chars/gant.jpg",
    opts: {
      game: [ "aa1"],
      role: ["det", "cul", "wit"]
    }
  },
  {
    name: "Bruce Goodman",
    img: "",
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
      role: ["wit", "det"]
    }
  },
  {
    name: "Neil Marshall",
    img: "",
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
      role: ["pros", "def", "wit"]
    }
  },
  {
    name: "Angel Starr",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["det", "wit"]
    }
  },
  {
    name: "Joe Darke",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa2", "aa3", "aai1"],
      role: ["def"]
    }
  },
  {
    name: "Dustin Prince",
    img: "",
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
      role: ["cul", "wit"]
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
      role: ["cul", "wit"]
    }
  },
  {
    name: "Turner Grey",
    img: "",
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
      role: ["wit", "cul"]
    }
  },
   {
    name: "Ini Miney",
    img: "",
    opts: {
      game: [ "aa2"],
      role: ["vic"]
    }
  },
   {
    name: "Ami Fey",
    img: "",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Acro",
    img: "src\assets\chars\acro.jpg",
    opts: {
      game: [ "aa2"],
      role: ["wil", "cul"]
    }
  },
  {
    name: "Bat",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Russel Berry",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Money",
    img: "",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Regent",
    img: "",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Benjamin Woodman",
    img: "src/assets/chars/benwoods.jpg",
    opts: {
      game: [ "aa2"],
      role: ["wit"]
    }
  },
  {
    name: "Trilo",
    img: "",
    opts: {
      game: [ "aa2"],
      role: ["wit"]
    }
  },
  {
    name: "Léon",
    img: "",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Adrian Andrews",
    img: "src\assets\chars\AA.jpg",
    opts: {
      game: [ "aa2", "aa3"],
      role: ["wit"]
    }
  },
  {
    name: "Shelly de Killer",
    img: "src/assets/chars/dekiller.jpg",
    opts: {
      game: [ "aa2", "aai2"],
      role: ["cul", "wit"]
    }
  },
  {
    name: "Juan Corrida",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Missile",
    img: "",
    opts: {
      game: [ "aa2"],
    }
  },
  {
    name: "Diego 'Godot' Armando",
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
      role: ["wit", "cul", "vic"]
    }
  },
  {
    name: "Judge's brother",
    img: "",
    opts: {
      game: [ "aa3"],
    }
  },
  {
    name: "Doug Swallow",
    img: "",
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
      role: ["wit", "def"]
    }
  },
  {
    name: "Kane Bullard",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Glen Elg",
    img: "",
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
      role: ["wit"]
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
    img: "",
    opts: {
      game: [ "aa3"],
      role: ["wit"]
    }
  },
  {
    name: "Jean Armstrong",
    img: "src/assets/chars/jean.jpg",
    opts: {
      game: [ "aa3"],
      role: ["wit"]
    }
  },
  {
    name: "Victor Kudo",
    img: "src/assets/chars/victor.jpg",
    opts: {
      game: [ "aa3"],
      role: ["wit"]
    }
  },
  {
    name: "Furio Tigre",
    img: "src/assets/chars/tigr.jpg",
    opts: {
      game: [ "aa3"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Terry Fawles",
    img: "src/assets/chars/terry.jpg",
    opts: {
      game: [ "aa3"],
      role: ["wit", "def"]
    }
  },
  {
    name: "Valerie Hawthorne",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Apollo Justice",
    img: "src/assets/chars/apollo.jpg",
    opts: {
      game: [ "aa4", "aa5", "aa6"],
      role: ["wit", "atto", "assi"]
    }
  },
  {
    name: "Trucy Wright",
    img: "src/assets/chars/trucy.jpg",
    opts: {
      game: [ "aa4", "aa5", "aa6"],
      role: ["wit", "assi", "def"]
    }
  },
  {
    name: "Klavier Gavin",
    img: "src/assets/chars/klavier.jpg",
    opts: {
      game: [ "aa4", "aa5"],
      role: ["wit", "pros"]
    }
  },
  {
    name: "Kristoph Gavin",
    img: "src/assets/chars/kristoph.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit", "cul", "atto"]
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
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Guy Eldoon",
    img: "src/assets/chars/guyel.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Plum Kitaki",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Winfred 'Big Wins' Kitaki",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Wocky Kitaki",
    img: "src/assets/chars/wocky.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit", "def"]
    }
  },
  {
    name: "Pal Meraktis",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["vic"]
    }
  },
  {
    name: "Wesley Stickler",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Alita Tiala",
    img: "src\assets\chars\alita.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Valant Gramarye",
    img: "src/assets/chars/valant.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Thalassa 'Lamiroir' Gramarye",
    img: "src/assets/chars/thalassa.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Daryan Crescend",
    img: "src/assets/chars/darian.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit", "cul", "det"]
    }
  },
  {
    name: "Romein LeTouse",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["vic"]
    }
  },
  {
    name: "Machi Tobaye",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["wit", "def"]
    }
  },
  {
    name: "Spark Brushel",
    img: "src/assets/chars/spark.jpg",
    opts: {
      game: [ "aa4"],
      role: ["wit"]
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
      role: ["wit", "def"]
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
      role: ["wit", "atto", "def", "assi"]
    }
  },
  {
    name: "Simon Blackquill",
    img: "src/assets/chars/blackqu.jpg",
    opts: {
      game: [ "aa5", "aa6"],
      role: ["wit", "def", "pros"]
    }
  },
  {
    name: "Bobby Fulbright (Phantom)",
    img: "src/assets/chars/bobby.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit", "det", "cul"]
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
      role: ["wit", "def"]
    }
  },
  {
    name: "Ted Tonate",
    img: "src/assets/chars/ted.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Candice Arme",
    img: "",
    opts: {
      game: [ "aa4"],
      role: ["vic", "det"]
    }
  },
  {
    name: "Rex Kyubi",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Damian Tenma",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit", "def"]
    }
  },
  {
    name: "Phienas Filch",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Florent L'Belle",
    img: "src/assets/chars/lebelle.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Hugh O'Conner",
    img: "src/assets/chars/hugh.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Robin Newman",
    img: "src/assets/chars/newman.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Aristotle Means",
    img: "src/assets/chars/aristo.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit", "atto", "cul"]
    }
  },
  {
    name: "Constance Courte",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["vic"]
    }
  },
  {
    name: "Myriam Scuttlebutt",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
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
      role: ["wit", "def"]
    }
  },
  {
    name: "Yuri Cosmos",
    img: "src/assets/chars/yuri.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Aura Blackquill",
    img: "src/assets/chars/aura.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Metis Cykes",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["def", "wit"]
    }
  },
  {
    name: "Jack Shipley",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Ora Shipley",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Herman Crab",
    img: "src/assets/chars/herman.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Norma DePlume",
    img: "src/assets/chars/norma.jpg",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Azura Summers",
    img: "",
    opts: {
      game: [ "aa5"],
    }
  },
  {
    name: "Ponco",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Clonco",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Sniper",
    img: "",
    opts: {
      game: [ "aa5"],
      role: ["wit"]
    }
  },
  {
    name: "Nahyuta Sahdmadhi",
    img: "src/assets/chars/nahyuta.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "pros"]
    }
  },
  {
    name: "Rayfa Padma Khura'in",
    img: "src/assets/chars/rayfa.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit"]
    }
  },
  {
    name: "Ahlbi Ur'gaid",
    img: "src\assets\chars\albi.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "def"]
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
      role: ["wit", "vic"]
    }
  },
  {
    name: "Shah'do",
    img: "",
    opts: {
      game: [ "aa6"],
      role: []
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
      role: ["wit", "vic", "atto"]
    }
  },
  {
    name: "Datz Are'bal",
    img: "src/assets/chars/datz.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit"]
    }
  },
  {
    name: "Ga'ran Sigatar Khura'in",
    img: "src/assets/chars/garan.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "pros", "cul"]
    }
  },
  {
    name: "Pees'lubn Andistan'dhin",
    img: "src/assets/chars/peacelove.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Paht Rohl",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Betty de Famme",
    img: "src/assets/chars/betty.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit"]
    }
  },
  {
    name: "Roger Retinz",
    img: "src/assets/chars/retinz.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Manov Mistree",
    img: "",
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
      role: ["wit", "vic"]
    }
  },
  {
    name: "Behleeb Inmee",
    img: "src/assets/chars/behleeb.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit"]
    }
  },
  {
    name: "Puhray Zeh'lot",
    img: "",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Taifu Toneido",
    img: "",
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
      role: ["wit", "def"]
    }
  },
  {
    name: "Geiru Toneido",
    img: "src/assets/chars/geiru.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Uendo Toneido",
    img: "src/assets/chars/uend.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit"]
    }
  },
  {
    name: "Paul Atishon",
    img: "src/assets/chars/paul.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Archie Buff",
    img: "",
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
      role: ["wit"]
    }
  },
  {
    name: "Jove Justice",
    img: "",
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
      role: ["wit", "def"]
    }
  },
  {
    name: "Sorin Sprocket",
    img: "src/assets/chars/sorin.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit"]
    }
  },
  {
    name: "Pierce Nichody",
    img: "src/assets/chars/pierce.jpg",
    opts: {
      game: [ "aa6"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Dumas Gloomsbury",
    img: "",
    opts: {
      game: [ "aa6"],
      role: ["vic"]
    }
  },
  {
    name: "Selena Sprocket",
    img: "",
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
      role: ["assi", "wit"]
    }
  },
  {
    name: "Shi-Long Lang",
    img: "src/assets/chars/lang.jpg",
    opts: {
      game: [ "aai1", "aai2"],
      role: ["wit", "det"]
    }
  },
  {
    name: "Calisto Yew (a.k.a Shih-na)",
    img: "src/assets/chars/calisto.jpg",
    opts: {
      game: ["aai1"],
      role: ["wit", "atto", "cul"],
    }
  },
  {
    name: "Tyrell Badd",
    img: "src/assets/chars/badd.jpg",
    opts: {
      game: ["aai1", "aai2"],
      role: ["wit", "det"],
    }
  },
  {
    name: "Buddy Faith",
    img: "",
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
      role: ["wit", "cul", "pros"],
    }
  },
  {
    name: "Zinc Lablanc",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit"],
    }
  },
  {
    name: "Ackbey Hicks",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Cammy Meele",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Rhoda Teneiro",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit"],
    }
  },
  {
    name: "Ernest Amano",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit"],
    }
  },
  {
    name: "Lance Amano",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Colin Devorae",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Lauren Paups",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit"],
    }
  },
  {
    name: "Byrne Faraday",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic", "pros"],
    }
  },
  {
    name: "Dein Mann",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Mack Rell",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic", "cul"],
    }
  },
  {
    name: "Cece Yew",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Quercus Alba",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Manny Coachen",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic", "cul"],
    }
  },
  {
    name: "Ka-Shi Nou",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["vic"],
    }
  },
  {
    name: "Colias Palaeno",
    img: "",
    opts: {
      game: ["aai1"],
      role: ["wit"],
    }
  },
  {
    name: "Raymond Shields",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["assi", "atto"],
    }
  },
  {
    name: "Justine Courtney",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Sebastian Debeste",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "pros"],
    }
  },
  {
    name: "Di-Jun Huang",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "vic"],
    }
  },
  {
    name: "Nicole Swift",
    img: "src\assets\chars\nicole.jpg",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Horace Knightley",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul", "vic"],
    }
  },
  {
    name: "Ethan Rooke",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["vic"],
    }
  },
  {
    name: "Patricia Roland",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Simon Keyes",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Jay Elbird",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Sirhan Dogen",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Jeffrey Master",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["def"],
    }
  },
  {
    name: "Katherine Hall",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Delicia Scones",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Dane Gustavia",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Isaac Dover",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["vic"],
    }
  },
  {
    name: "Karin Jenson",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Bonnie Young",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Anubis",
    img: "",
    opts: {
      game: ["aai2"],
    }
  },
  {
    name: "Blaise Debeste",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit", "cul", "pros"],
    }
  },
  {
    name: "Jil Crane",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["vic", "atto"],
    }
  },
  {
    name: "John Marsh",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["wit"],
    }
  },
  {
    name: "Jack Cameron",
    img: "",
    opts: {
      game: ["aai2"],
      role: ["vic"],
    }
  },
  {
    name: "Ryunosuke Naruhodo",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["atto", "def"],
    }
  },
  {
    name: "Susato Mikotoba",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["assi"],
    }
  },
  {
    name: "Kazuma Asogi",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["atto", "vic", "pros"],
    }
  },
  {
    name: "Herlock Sholmes",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["det", "assi"],
    }
  },
  {
    name: "Iris Wilson",
    img: "",
    opts: {
      game: ["dgs1", "dgs 2"],
      role: ["assi"],
    }
  },
  {
    name: "Barok van Zieks",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["pros", "def", "wit"],
    }
  },
  {
    name: "Yujin Mikotoba",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "John Wilson",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["vic"],
    }
  },
  {
    name: "Seishiro Jigoku",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Taketsuchi Auchi",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["pros"],
    }
  },
  {
    name: "Satoru Hosonaga",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit", "det"],
    }
  },
  {
    name: "Iyesa Nosa",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Aido Nosa",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Kyurio Korekuta",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Asa Shinn (Jezaille Brett)",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit", "vic", "cul"],
    }
  },
  {
    name: "Nikolina Pavlova",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Bif Strogenov",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Mael Stronghart",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["cul"],
    }
  },
  {
    name: "Magnus McGilded",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit", "vic", "cul", "def"],
    }
  },
  {
    name: "Mason Milverton ('Thrise-Fired Mason')",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["vic"],
    }
  },
  {
    name: "Beppo/Sandwich",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Lay D. Furst",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Gina Lestrade",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit", "det", "def"],
    }
  },
  {
    name: "Soseki Natsume",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit", "def"],
    }
  },
  {
    name: "Olive Green",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit", "vic", "cul"],
    }
  },
  {
    name: "John Garrideb",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Joan Garrideb",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Roly Beate",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Patricia Beate",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Tobias Gregson",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: ["det", "vic"],
    }
  },
  {
    name: "Wagahai",
    img: "",
    opts: {
      game: ["dgs1", "dgs2"],
      role: [],
    }
  },
  {
    name: "Pop Windibank",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["vic"],
    }
  },
  {
    name: "Ashley Graydon",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Britich Judge",
    img: "",
    opts: {
      game: ["dgs1"],
      role: [],
    }
  },
  {
    name: "Nash Skulkin",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Ringo Skulkin",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Vilen Borshevik",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit"],
    }
  },
  {
    name: "Genshin Asogi",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["vic", "cul", "det"],
    }
  },
  {
    name: "Klint van Zieks",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["cul", "vic", "pros"],
    }
  },
  {
    name: "Chief Inspector Toby",
    img: "",
    opts: {
      game: ["dgs2"],
      role: [],
    }
  },
  {
    name: "Rei Membami",
    img: "",
    opts: {
      game: ["dgs1"],
      role: ["wit", "def"],
    }
  },
  {
    name: "Raiten Menimemo",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "William Shamspeare",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit", "vic", "cul"],
    }
  },
  {
    name: "Adron B. Metermann",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Quinby Altamont",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Duncan Ross",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["vic"],
    }
  },
  {
    name: "Selden",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["cul"],
    }
  },
  {
    name: "Albert Harebrayne",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit", "def"],
    }
  },
  {
    name: "Esmeralda Tusspells",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Wilhelm Gottsreich Sigismond 'Gotts' Ormstein",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Odie Asman",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["vic"],
    }
  },
  {
    name: "Balthasar Lune",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Enoch Drebber",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Courtney Sithe",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit", "cul"],
    }
  },
  {
    name: "Maria Gorey",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Evie Vigil",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Daley Vigil",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Barry Caidin",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Venus",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Fabien de Rosseau",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Peppino de Rossi",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Tchikin Strogenov",
    img: "",
    opts: {
      game: ["dgs2"],
      role: ["wit"],
    }
  },
  {
    name: "Balmung",
    img: "",
    opts: {
      game: ["dgs2"],
      role: [],
    }
  },
  {
    name: "Hershel Layton",
    img: "",
    opts: {
      game: ["vs"],
      role: ["vic", "assi"],
    }
  },
  {
    name: "Luke Triton",
    img: "",
    opts: {
      game: ["vs"],
      role: ["assi"],
    }
  },
  {
    name: "Arthur 'The Storyteller' Cantabella",
    img: "",
    opts: {
      game: ["vs"],
      role: ["wit", "vic", "cul"],
    }
  },
  {
    name: "Espella Cantabella",
    img: "",
    opts: {
      game: ["vs"],
      role: ["assi", "def"],
    }
  },
  {
    name: "Zacharias Barnham",
    img: "",
    opts: {
      game: ["vs"],
      role: ["pros"],
    }
  },
  {
    name: "Eve 'Darklaw' Belduke",
    img: "",
    opts: {
      game: ["vs"],
      role: ["pros", "cul"],
    }
  },
  {
    name: "Labyrinthian Judge",
    img: "",
    opts: {
      game: ["vs"],
      role: [],
    }
  },
  {
    name: "Eve",
    img: "",
    opts: {
      game: ["vs"],
      role: [],
    }
  },
  {
    name: "Prosecutor Flynch",
    img: "",
    opts: {
      game: ["vs"],
      role: ["pros"],
    }
  },
  {
    name: "Johny Smiles",
    img: "",
    opts: {
      game: ["vs"],
      role: ["wit"],
    }
  },
  {
    name: "Olivia Aldente",
    img: "",
    opts: {
      game: ["vs"],
      role: ["wit", "vic"],
    }
  },
];
