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
      { name: "Apollo Justice: Ace Atorney", key: "aa4" },
      { name: "Ace Attorney: Dual Destines", key: "aa5" },
      { name: "Ace Attorney: Spirit of Justice", key: "aa6" },
      { name: "Ace Attorney Investigations: Miles Edgeworth", key: "aai" },
      { name: "Gyakuten Kenji 2", key: "aai2" },
      { name: "Professor Layton vs. Phoenix Wright: Ace Attorney", key: "vs" },
      { name: "The Great Ace Attorney: Adventures", key: "dgs1" },
      { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" },
    ]
  },
  {
    name: "Filter by Role (be sure you checked the games properly, may contain spoilers!)",
    key: "role",
    tooltip: "Check this to restrict to characters of a certain role",
    checked: false,
    sub: [ { name: "Attorneys", key: "atto" }, 
           { name: "Prosecutors", key: "pros" }, 
           { name: "Assistants", tooltip: "Characters who participate in investigation segments with a protagonist", key: "assi" }, 
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
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6", "vs"],
      role: ["atto", "def"]
    }
  },
  {
    name: "Larry Butz",
    img: "",
    opts: {
      game: [ "aa1", "aa3", "aai1", "aai2", "aa6"],
      role: ["def", "wit"]
    }
  },
  {
    name: "Mia Fey",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aa3"],
      role: ["atto", "vic", "assi"]
    }
  },
  {
    name: "The Judge",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aai1", "aa4", "aa5", "aa6"],
    }
  },
  {
    name: "Winston Payne",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4"],
      role: ["pros"]
    }
  },
  {
    name: "Frank Sahwit",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aai1", "aai2", "aa5", "aa6", "vs"],
      role: ["pros", "def"]
    }
  },
  {
    name: "Maya Fey",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit"]
    }
  },
  {
    name: "Redd White",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Sal Manella",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit"]
    }
  },
  {
    name: "Wendy Oldbag",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aai", "aai2"],
      role: ["wit"]
    }
  },
  {
    name: "Will Powers",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Lotta Hart",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aai2"],
      role: ["wit"]
    }
  },
  {
    name: "Robert Hammond",
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["atto", "vic"]
    }
  },
  {
    name: "Marvin Grossberg",
    img: "",
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
    img: "",
    opts: {
      game: [ "aa1"],
      role: ["wit", "cul"]
    }
  },
  {
    name: "Gregory Edgeworth",
    img: "",
    opts: {
      game: [ "aa1", "aai2"],
      role: ["atto", "vic"]
    }
  },
  {
    name: "Dick Gumshoe",
    img: "",
    opts: {
      game: [ "aa1", "aa2", "aa3", "aa4", "aai1", "aai2"],
      role: ["det"]
    }
  },
  {
    name: "Manfred von Karma",
    img: "",
    opts: {
      game: [ "aa1", "aai", "aai2"],
      role: ["pros", "cul"]
    }
  },
  {
    name: "Ema Skye",
    img: "",
    opts: {
      game: [ "aa1", "aa4", "aai1", "aai2", "aa6"],
      role: ["assi", "det"]
    }
  },
  {
    name: "Mike Meekins",
    img: "",
    opts: {
      game: [ "aa1", "aai", "aa4"],
      role: ["wit"]
    }
  },
  {
    name: "Damon Gant",
    img: "",
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
    img: "",
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
    img: "",
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
];
