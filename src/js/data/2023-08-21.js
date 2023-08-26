dataSetVersion = "2023-08-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
        { name: "Gyakuten Kenji 2", tooltip: "Unofficial title: \"Ace Attorney Investigations 2: Prosecutor's Path\"", key: "aai2" },
        { name: "The Great Ace Attorney: Adventures", key: "dgs1" },
        { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" }
      ]
    },
    {
      name: "Filter by Role",
      key: "role",
      tooltip: "Check this to restrict to characters to a certain role",
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
      img: "xiuVbKb.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6", "vs"],
        role: ["atto", "def"]
      }
    },
    {
      name: "Larry Butz",
      img: "8c7SN71.jpg",
      opts: {
        game: [ "aa1", "aa3", "aai1", "aai2", "aa6"],
        role: ["def"]
      }
    },
    {
      name: "Mia Fey",
      img: "yXS6RJC.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3"],
        role: ["atto", "vic", "assi"]
      }
    },
    {
      name: "The Judge",
      img: "qNfxZKk.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aai1", "aa4", "aa5", "aa6"],
        role: []
      }
    },
    {
      name: "Winston Payne",
      img: "QaxZy4a.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aa4"],
        role: ["pros"]
      }
    },
    {
      name: "Frank Sahwit",
      img: "xFt5Spf.jpg",
      opts: {
        game: [ "aa1", "aai2"],
        role: ["cul"]
      }
    },
    {
      name: "Cindy Stone",
      img: "Uz0GCSn.jpg",
      opts: {
        game: [ "aa1"],
        role: ["vic"]
      }
    },
    {
      name: "Bellboy",
      img: "RSHtj75.jpg",
      opts: {
        game: [ "aa1", "aai1"],
        role: [ ]
      }
    },
    {
      name: "Charley",
      img: "UY6je1q.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6"],
        role: [ ]
      }
    },
    {
      name: "Miles Edgeworth",
      img: "xmaJpi8.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aai1", "aai2", "aa5", "aa6", "vs"],
        role: ["pros", "def"]
      }
    },
    {
      name: "Maya Fey",
      img: "gjQ4iEx.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "vs", "aa6"],
        role: ["assi", "def",  ]
      }
    },
    {
      name: "Misty Fey (Elise Deauxnim)",
      img: "orVIKGJ.jpg",
      opts: {
        game: [ "aa3"],
        role: ["vic"]
      }
    },
    {
      name: "April May",
      img: "ofLMwJi.jpg",
      opts: {
        game: [ "aa1"],
        role: [ ]
      }
    },
    {
      name: "Redd White",
      img: "KTiWyyP.jpg",
      opts: {
        game: [ "aa1"],
        role: [ "cul" ]
      }
    },
    {
      name: "Sal Manella",
      img: "22brOaO.jpg",
      opts: {
        game: [ "aa1"],
        role: [ ]
      }
    },
    {
      name: "Wendy Oldbag",
      img: "3DorKuK.jpg",
      opts: {
        game: [ "aa1", "aa2", "aai1", "aai2"],
        role: [ ]
      }
    },
    {
      name: "Will Powers",
      img: "n4oT4r2.jpg",
      opts: {
        game: [ "aa1", "aa2", "aai2"],
        role: [ "def"]
      }
    },
    {
      name: "Cody Hackins",
      img: "mD1NiC5.jpg",
      opts: {
        game: [ "aa1"],
        role: [ ]
      }
    },
    {
      name: "Jack Hammer",
      img: "jeBtdsk.jpg",
      opts: {
        game: [ "aa1"],
        role: ["vic"]
      }
    },
    {
      name: "Penny Nichols",
      img: "JnNAmdC.jpg",
      opts: {
        game: [ "aa1", "aai2"],
        role: [ ]
      }
    },
    {
      name: "Dee Vasquez",
      img: "mipinZD.jpg",
      opts: {
        game: [ "aa1"],
        role: [ "cul"]
      }
    },
    {
      name: "Lotta Hart",
      img: "45Zg1i4.jpg",
      opts: {
        game: [ "aa1", "aa2", "aai2"],
        role: [ ]
      }
    },
    {
      name: "Robert Hammond",
      img: "RQP3w36.jpg",
      opts: {
        game: [ "aa1"],
        role: ["atto", "vic"]
      }
    },
    {
      name: "Marvin Grossberg",
      img: "DvORuF5.jpg",
      opts: {
        game: [ "aa1", "aa3"],
        role: ["atto"]
      }
    },
    {
      name: "Polly",
      img: "FQlxtKY.jpg",
      opts: {
        game: [ "aa1"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Yanni Yogi",
      img: "hDxQk73.jpg",
      opts: {
        game: [ "aa1"],
        role: [ "cul"]
      }
    },
    {
      name: "Gregory Edgeworth",
      img: "nxKVwBR.jpg",
      opts: {
        game: [ "aa1", "aai2"],
        role: ["atto", "vic"]
      }
    },
    {
      name: "Dick Gumshoe",
      img: "Qa6swxq.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aa4", "aai1", "aai2"],
        role: ["det"]
      }
    },
    {
      name: "Manfred von Karma",
      img: "FHmfK3p.jpg",
      opts: {
        game: [ "aa1", "aai1", "aai2"],
        role: ["pros", "cul"]
      }
    },
    {
      name: "Ema Skye",
      img: "w9cnXj4.jpg",
      opts: {
        game: [ "aa1", "aa4", "aai1", "aai2", "aa6"],
        role: ["assi", "det"]
      }
    },
    {
      name: "Mike Meekins",
      img: "xoLRuel.jpg",
      opts: {
        game: [ "aa1", "aai1", "aa4"],
        role: [ ]
      }
    },
    {
      name: "Damon Gant",
      img: "Y0oY732.jpg",
      opts: {
        game: [ "aa1"],
        role: ["det", "cul"]
      }
    },
    {
      name: "Bruce Goodman",
      img: "l8xBJj4.jpg",
      opts: {
        game: [ "aa1"],
        role: ["det", "vic"]
      }
    },
    {
      name: "Jake Marshall",
      img: "opf1cUB.jpg",
      opts: {
        game: [ "aa1"],
        role: [ "det"]
      }
    },
    {
      name: "Neil Marshall",
      img: "IfNtZls.jpg",
      opts: {
        game: [ "aa1"],
        role: ["pros", "vic"]
      }
    },
    {
      name: "Lana Skye",
      img: "xZRNqeh.jpg",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6"],
        role: ["pros", "def"]
      }
    },
    {
      name: "Angel Starr",
      img: "XgmP4yu.jpg",
      opts: {
        game: [ "aa1"],
        role: ["det"]
      }
    },
    {
      name: "Joe Darke",
      img: "eFLNBiT.jpg",
      opts: {
        game: [ "aa1"],
        role: ["cul"]
      }
    },
    {
      name: "Pearl Fey",
      img: "umIcEWs.jpg",
      opts: {
        game: [ "aa2", "aa3", "aa5","aa6"],
        role: ["assi"]
      }
    },
    {
      name: "Franziska von Karma",
      img: "ufW1Qq2.jpg",
      opts: {
        game: [ "aa2", "aa3","aai1", "aai2"],
        role: ["pros"]
      }
    },
    {
      name: "Maggey Byrde",
      img: "hvcftQM.jpg",
      opts: {
        game: [ "aa2", "aa3", "aai1"],
        role: ["def"]
      }
    },
    {
      name: "Dustin Prince",
      img: "MWusQHS.jpg",
      opts: {
        game: [ "aa2"],
        role: ["vic"]
      }
    },
    {
      name: "Richard Wellington",
      img: "lT9AAVm.jpg",
      opts: {
        game: [ "aa2"],
        role: ["cul"]
      }
    },
    {
      name: "Director Hotti",
      img: "L6LrGNj.jpg",
      opts: {
        game: [ "aa2", "aa4"],
        role: ["cul"]
      }
    },
    {
      name: "Morgan Fey",
      img: "VLELijd.jpg",
      opts: {
        game: [ "aa2", "aa3"],
        role: ["cul"]
      }
    },
    {
      name: "Turner Grey",
      img: "PrmeQz7.jpg",
      opts: {
        game: [ "aa2"],
        role: ["vic"]
      }
    },
    {
      name: "Mimi Miney",
      img: "ErehkRn.jpg",
      opts: {
        game: [ "aa2"],
        role: [ "cul"]
      }
    },
     {
      name: "Ini Miney",
      img: "ESirh3T.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ]
      }
    },
     {
      name: "Ami Fey",
      img: "F7cZcPp.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ]
      }
    },
    {
      name: "Acro (a.k.a Ken Dingling)",
      img: "ne6oVHa.jpg",
      opts: {
        game: [ "aa2"],
        role: ["wil", "cul"]
      }
    },
    {
      name: "Bat (a.k.a Sean Dingling)",
      img: "1aFpV6i.jpg",
      opts: {
        game: [ "aa2"],
        role: ["vic"]
      }
    },
    {
      name: "Regina Berry",
      img: "v2QNVqQ.jpg",
      opts: {
        game: [ "aa2", "aai2"],
        role: [ ]
      }
    },
    {
      name: "Russel Berry",
      img: "XJL6o2f.jpg",
      opts: {
        game: [ "aa2"],
        role: ["vic"]
      }
    },
    {
      name: "Max Galactica",
      img: "t8F4vo1.jpg",
      opts: {
        game: [ "aa2"],
        role: ["def"]
      }
    },
    {
      name: "Lawrence \"Moe\" Curls",
      img: "KbcrCCv.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ]
      }
    },
    {
      name: "Money",
      img: "wVVaUHO.jpg",
      opts: {
        game: [ "aa2", "aai2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Regent",
      img: "ciZ8kIW.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Benjamin Woodman",
      img: "D1b7B8K.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ]
      }
    },
    {
      name: "Trilo",
      img: "UE5RePh.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ]
      }
    },
    {
      name: "Léon",
      img: "jPGUCxi.jpg",
      opts: {
        game: [ "aa2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Adrian Andrews",
      img: "rYXYL1j.jpg",
      opts: {
        game: [ "aa2", "aa3"],
        role: [ ]
      }
    },
    {
      name: "Shelly de Killer",
      img: "0O6vBbo.jpg",
      opts: {
        game: [ "aa2", "aai2"],
        role: ["cul"]
      }
    },
    {
      name: "Juan Corrida",
      img: "AqS5Q0Q.jpg",
      opts: {
        game: [ "aa2"],
        role: ["vic"]
      }
    },
    {
      name: "Matt Engarde",
      img: "ZfFCzWN.jpg",
      opts: {
        game: [ "aa2"],
        role: ["cul", "def"]
      }
    },
    {
      name: "Celeste Inpax",
      img: "rrhr8iY.jpg",
      opts: {
        game: [ "aa2"],
        role: []
      }
    },
    {
      name: "Missile",
      img: "dF8tDqU.jpg",
      opts: {
        game: [ "aa1"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Diego \"Godot\" Armando",
      img: "qiQztTi.jpg",
      opts: {
        game: [ "aa3"],
        role: ["pros", "vic", "cul"]
      }
    },
    {
      name: "Dahlia Hawthorne",
      img: "dJuBVOq.jpg",
      opts: {
        game: [ "aa3"],
        role: [ "cul", "vic"]
      }
    },
    {
      name: "Judge's brother",
      img: "tJIVi7e.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Doug Swallow",
      img: "8orKBLM.jpg",
      opts: {
        game: [ "aa3"],
        role: ["vic"]
      }
    },
    {
      name: "Ron DeLite",
      img: "3M4Bqug.jpg",
      opts: {
        game: [ "aa3"],
        role: [ "def"]
      }
    },
    {
      name: "Kane Bullard",
      img: "IThPo6N.jpg",
      opts: {
        game: [ "aa3"],
        role: ["vic"]
      }
    },
    {
      name: "Luke Atmey",
      img: "45vHm0e.jpg",
      opts: {
        game: ["aa3"],
        role: ["cul"]
      }
    },
    {
      name: "Desirée DeLite",
      img: "smivD6I.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Glen Elg",
      img: "kFvu9S5.jpg",
      opts: {
        game: [ "aa3"],
        role: ["vic"]
      }
    },
    {
      name: "Viola Cadaverini",
      img: "swluE7J.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Bruto Cadaverini",
      img: "M3kNr3N.jpg",
      opts: {
        game: [ "aa3"],
        role: []
      }
    },
    {
      name: "Lisa Basil",
      img: "B4BbtAh.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Jean Armstrong",
      img: "WmyHqTd.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Victor Kudo",
      img: "460y1VE.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Furio Tigre",
      img: "Kh4kMtP.jpg",
      opts: {
        game: [ "aa3"],
        role: ["cul"]
      }
    },
    {
      name: "Terry Fawles",
      img: "gIydDgx.jpg",
      opts: {
        game: [ "aa3"],
        role: [ "def"]
      }
    },
    {
      name: "Valerie Hawthorne",
      img: "qTsPFIs.jpg",
      opts: {
        game: [ "aa3"],
        role: ["vic"]
      }
    },
    {
      name: "Iris",
      img: "f8jNFEi.jpg",
      opts: {
        game: [ "aa3"],
        role: ["def"]
      }
    },
    {
      name: "Bikini",
      img: "BhDlKl0.jpg",
      opts: {
        game: [ "aa3"],
        role: [ ]
      }
    },
    {
      name: "Apollo Justice",
      img: "614DDPy.jpg",
      opts: {
        game: [ "aa4", "aa5", "aa6"],
        role: [ "atto", "assi"]
      }
    },
    {
      name: "Trucy Wright",
      img: "bLOtewn.jpg",
      opts: {
        game: [ "aa4", "aa5", "aa6"],
        role: [ "assi", "def"]
      }
    },
    {
      name: "Klavier Gavin",
      img: "p9hVQ05.jpg",
      opts: {
        game: [ "aa4", "aa5"],
        role: [ "pros"]
      }
    },
    {
      name: "Kristoph Gavin",
      img: "1X7bZmP.jpg",
      opts: {
        game: [ "aa4"],
        role: [ "cul", "atto"]
      }
    },
    {
      name: "Zak \"Shadi Smith\" Gramarye",
      img: "PkH6bT0.jpg",
      opts: {
        game: [ "aa4"],
        role: ["vic", "def"]
      }
    },
    {
      name: "Olga Orly",
      img: "UZzVuQw.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Guy Eldoon",
      img: "1ROo8SI.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Plum Kitaki",
      img: "XTuAash.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Winfred \"Big Wins\" Kitaki",
      img: "pcdfLcU.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Wocky Kitaki",
      img: "sWDuEzT.jpg",
      opts: {
        game: [ "aa4"],
        role: [ "def"]
      }
    },
    {
      name: "Pal Meraktis",
      img: "12FJc54.jpg",
      opts: {
        game: [ "aa4"],
        role: ["vic"]
      }
    },
    {
      name: "Wesley Stickler",
      img: "sfQ3Ajq.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Alita Tiala",
      img: "5FgHgkz.jpg",
      opts: {
        game: [ "aa4"],
        role: [ "cul"]
      }
    },
    {
      name: "Valant Gramarye",
      img: "g0tAjbG.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Thalassa \"Lamiroir\" Gramarye",
      img: "sxzeEH1.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Daryan Crescend",
      img: "8Q5HHwq.jpg",
      opts: {
        game: [ "aa4"],
        role: [ "cul", "det"]
      }
    },
    {
      name: "Romein LeTouse",
      img: "BoBfagP.jpg",
      opts: {
        game: [ "aa4"],
        role: ["vic"]
      }
    },
    {
      name: "Machi Tobaye",
      img: "Fs0atra.jpg",
      opts: {
        game: [ "aa4"],
        role: [ "def"]
      }
    },
    {
      name: "Spark Brushel",
      img: "wdKIn03.jpg",
      opts: {
        game: [ "aa4"],
        role: [ ]
      }
    },
    {
      name: "Drew Misham",
      img: "HPOo5VE.jpg",
      opts: {
        game: [ "aa4"],
        role: ["vic"]
      }
    },
    {
      name: "Vera Misham",
      img: "DHuyzKb.jpg",
      opts: {
        game: [ "aa4"],
        role: [ "def"]
      }
    },
    {
      name: "Magnifi Gramarye",
      img: "AUPOlwp.jpg",
      opts: {
        game: [ "aa4"],
        role: ["vic"]
      }
    },
    {
      name: "Athena Cykes",
      img: "XObdKbm.jpg",
      opts: {
        game: [ "aa5", "aa6"],
        role: [ "atto", "def", "assi"]
      }
    },
    {
      name: "Simon Blackquill",
      img: "QgBDpze.jpg",
      opts: {
        game: [ "aa5", "aa6"],
        role: [ "def", "pros"]
      }
    },
    {
      name: "Bobby Fulbright (The Phantom)",
      img: "A9A7LQc.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "det", "cul"]
      }
    },
    {
      name: "Gaspen Payne",
      img: "x808HZ3.jpg",
      opts: {
        game: [ "aa5", "aa6"],
        role: ["pros"]
      }
    },
    {
      name: "Juniper Woods",
      img: "KLloVcU.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "def"]
      }
    },
    {
      name: "Ted Tonate",
      img: "xD4daFu.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "cul"]
      }
    },
    {
      name: "Candice Arme",
      img: "zog7zUA.jpg",
      opts: {
        game: [ "aa4"],
        role: ["vic", "det"]
      }
    },
    {
      name: "Rex Kyubi",
      img: "aOtAJpy.jpg",
      opts: {
        game: [ "aa5"],
        role: ["vic"]
      }
    },
    {
      name: "Jinxie Tenma",
      img: "Umc1Lni.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Damian Tenma",
      img: "MMRJV1b.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "def"]
      }
    },
    {
      name: "Phineas Filch",
      img: "sd7dCCB8.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Florent L'Belle",
      img: "vv0mzF4.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "cul"]
      }
    },
    {
      name: "Hugh O'Conner",
      img: "aY45tTQ.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Robin Newman",
      img: "qdRrpQ4.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Aristotle Means",
      img: "Em3pkpx.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "atto", "cul"]
      }
    },
    {
      name: "Constance Courte",
      img: "YEu42t3.jpg",
      opts: {
        game: [ "aa5"],
        role: ["vic"]
      }
    },
    {
      name: "Taka",
      img: "43h5Vf1.jpg",
      opts: {
        game: ["aa5", "aa6"],
        role: [],
        animal: true,
      }
    },
    {
      name: "Myriam Scuttlebutt",
      img: "YqvtUgi.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Clay Terran",
      img: "Uzs4s8E.jpg",
      opts: {
        game: [ "aa5"],
        role: ["vic"]
      }
    },
    {
      name: "Solomon Starbuck",
      img: "jaqLnXD.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "def"]
      }
    },
    {
      name: "Yuri Cosmos",
      img: "lsWdQZB.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Aura Blackquill",
      img: "xYHusZr.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Metis Cykes",
      img: "49JnDzE.jpg",
      opts: {
        game: [ "aa5"],
        role: ["vic"]
      }
    },
    {
      name: "Sasha Buckler",
      img: "yMrNWAr.jpg",
      opts: {
        game: [ "aa5"],
        role: ["def"]
      }
    },
    {
      name: "Orla Shipley",
      img: "Ae7i8GQ.jpg",
      opts: {
        game: [ "aa5"],
        role: ["def", "ani"]
      }
    },
    {
      name: "Jack Shipley",
      img: "fJfKR64.jpg",
      opts: {
        game: [ "aa5"],
        role: ["vic"]
      }
    },
    {
      name: "Marlon Rimes",
      img: "khpwiW3.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Ora Shipley",
      img: "2T0goST.jpg",
      opts: {
        game: [ "aa5"],
        role: [ "ani" ]
      }
    },
    {
      name: "Herman Crab",
      img: "aTPTLtc.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Norma DePlume",
      img: "1VdqGU6.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Azura Summers",
      img: "j2F0cCu.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Ponco",
      img: "ue0iedN.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Clonco",
      img: "9L2UkGh.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ]
      }
    },
    {
      name: "Sniper",
      img: "yhB8whY.jpg",
      opts: {
        game: [ "aa5"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Nahyuta Sahdmadhi",
      img: "ofZ5zDi.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "pros"]
      }
    },
    {
      name: "Rayfa Padma Khura'in",
      img: "aJksUw0.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Ahlbi Ur'gaid",
      img: "SeITMpL.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "def"]
      }
    },
    {
      name: "Khura'inese Judge",
      img: "OYmYjky.jpg",
      opts: {
        game: [ "aa6"],
        role: []
      }
    },
    {
      name: "Amara Sigatar Khura'in",
      img: "wfa5XoO.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "vic"]
      }
    },
    {
      name: "Shah'do",
      img: "I1oB0Uv.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Inga Karkhuul Khura'in",
      img: "eGsaSwR.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic", "cul"]
      }
    },
    {
      name: "Dhurke Sahdmadhi",
      img: "JGq04VX.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "vic", "atto"]
      }
    },
    {
      name: "Datz Are'bal",
      img: "YEiMiES.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Ga'ran Sigatar Khura'in",
      img: "3VtnKHY.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "pros", "cul"]
      }
    },
    {
      name: "Pees'lubn Andistan'dhin",
      img: "c3terxh.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "cul"]
      }
    },
    {
      name: "Paht Rohl",
      img: "pVYM0X7.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Bonny de Famme",
      img: "qqMVPBb.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Betty de Famme",
      img: "j35BQlb.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Roger Retinz",
      img: "fPPd4ZO.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "cul"]
      }
    },
    {
      name: "Manov Mistree",
      img: "ppbReKl.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Tahrust Inmee",
      img: "ghzCQXV.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "vic"]
      }
    },
    {
      name: "Behleeb Inmee",
      img: "7Nq49Q1.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Puhray Zeh'lot",
      img: "LrbEjn1.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Taifu Toneido",
      img: "04Q378m.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Bucky Whet",
      img: "zpztLDu.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "def"]
      }
    },
    {
      name: "Geiru Toneido",
      img: "L1J9WF4.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "cul"]
      }
    },
    {
      name: "Uendo Toneido",
      img: "sPD9QVK.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Paul Atishon",
      img: "0lcCFKv.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "cul"]
      }
    },
    {
      name: "Archie Buff",
      img: "4ltv1qw.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Armie Buff",
      img: "nWgzTvx.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Jove Justice",
      img: "YU8L3eS.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Ellen Wyatt",
      img: "UHNeNSz.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "def"]
      }
    },
    {
      name: "Sorin Sprocket",
      img: "DCGtYWI.jpg",
      opts: {
        game: [ "aa6"],
        role: [ ]
      }
    },
    {
      name: "Pierce Nichody",
      img: "s8XB8ko.jpg",
      opts: {
        game: [ "aa6"],
        role: [ "cul"]
      }
    },
    {
      name: "Dumas Gloomsbury",
      img: "77NB5cd.jpg",
      opts: {
        game: [ "aa6"],
        role: ["vic"]
      }
    },
    {
      name: "Selena Sprocket",
      img: "3eWjH0o.jpg",
      opts: {
        game: [ "aa6"],
        role: []
      }
    },
    {
      name: "Kay Faraday",
      img: "ctZiatk.jpg",
      opts: {
        game: [ "aai1", "aai2"],
        role: ["assi"]
      }
    },
    {
      name: "Shi-Long Lang",
      img: "cUSv1f4.jpg",
      opts: {
        game: [ "aai1", "aai2"],
        role: [ "det"]
      }
    },
    {
      name: "Calisto Yew (a.k.a Shih-na)",
      img: "WMvpEI3.jpg",
      opts: {
        game: ["aai1"],
        role: [ "atto", "cul"]
      }
    },
    {
      name: "Tyrell Badd",
      img: "uk3pNpz.jpg",
      opts: {
        game: ["aai1", "aai2"],
        role: [ "det"]
      }
    },
    {
      name: "Buddy Faith",
      img: "nvKnqtV.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic", "det"]
      }
    },
    {
      name: "Jacques Portsman",
      img: "Yscyyva.jpg",
      opts: {
        game: ["aai1"],
        role: [ "cul", "pros"]
      }
    },
    {
      name: "Zinc Lablanc",
      img: "i2ZER2R.jpg",
      opts: {
        game: ["aai1"],
        role: [ ]
      }
    },
    {
      name: "Ackbey Hicks",
      img: "PD2l5wb.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic"]
      }
    },
    {
      name: "Cammy Meele",
      img: "ROLmI9T.jpg",
      opts: {
        game: ["aai1"],
        role: [ "cul"]
      }
    },
    {
      name: "Rhoda Teneiro",
      img: "a7RNPNF.jpg",
      opts: {
        game: ["aai1"],
        role: [ ]
      }
    },
    {
      name: "Ernest Amano",
      img: "JVBpLOI.jpg",
      opts: {
        game: ["aai1"],
        role: [ ]
      }
    },
    {
      name: "Lance Amano",
      img: "5Tm2lRn.jpg",
      opts: {
        game: ["aai1"],
        role: [ "cul"]
      }
    },
    {
      name: "Colin Devorae",
      img: "TCJjQfG.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic"]
      }
    },
    {
      name: "Lauren Paups",
      img: "g6ItMnz.jpg",
      opts: {
        game: ["aai1"],
        role: [ ]
      }
    },
    {
      name: "Byrne Faraday",
      img: "wBVk9rA.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic", "pros"]
      }
    },
    {
      name: "Dein Mann",
      img: "vYSBZUW.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic"]
      }
    },
    {
      name: "Mack Rell",
      img: "JwYI3jE.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic", "cul"]
      }
    },
    {
      name: "Cece Yew",
      img: "gthFAhU.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic"]
      }
    },
    {
      name: "Quercus Alba",
      img: "xVpTSO0.jpg",
      opts: {
        game: ["aai1"],
        role: [ "cul"]
      }
    },
    {
      name: "Manny Coachen",
      img: "i5bRANz.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic", "cul"]
      }
    },
    {
      name: "Ka-Shi Nou",
      img: "Uy14068.jpg",
      opts: {
        game: ["aai1"],
        role: ["vic"]
      }
    },
    {
      name: "Colias Palaeno",
      img: "JTyZawL.jpg",
      opts: {
        game: ["aai1"],
        role: [ ]
      }
    },
    {
      name: "Raymond Shields",
      img: "dYWPeCM.jpg",
      opts: {
        game: ["aai2"],
        role: ["assi", "atto"]
      }
    },
    {
      name: "Justine Courtney",
      img: "QVqUo6a.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Sebastian Debeste",
      img: "eO4iDlc.jpg",
      opts: {
        game: ["aai2"],
        role: [ "pros"]
      }
    },
    {
      name: "Di-Jun Huang",
      img: "V2fyLBT.jpg",
      opts: {
        game: ["aai2"],
        role: [ "vic"]
      }
    },
    {
      name: "Nicole Swift",
      img: "NhT0T3j.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Horace Knightley",
      img: "G8c78T2.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul", "vic"]
      }
    },
    {
      name: "Ethan Rooke",
      img: "h6IcKAi.jpg",
      opts: {
        game: ["aai2"],
        role: ["vic"]
      }
    },
    {
      name: "Patricia Roland",
      img: "K1dSR1n.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul"]
      }
    },
    {
      name: "Simon Keyes",
      img: "pWRjDNe.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul"]
      }
    },
    {
      name: "Jay Elbird",
      img: "CClrqMp.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Rocky",
      img: "SrGRD0M.jpg",
      opts: {
        game: ["aai2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Sirhan Dogen",
      img: "TTa2SVP.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul"]
      }
    },
    {
      name: "Jeffrey Master",
      img: "UZ2x8ga.jpg",
      opts: {
        game: ["aai2"],
        role: ["def"]
      }
    },
    {
      name: "Katherine Hall",
      img: "aa4anaV.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul"]
      }
    },
    {
      name: "Delicia Scones",
      img: "xHbY1Ts.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Dane Gustavia",
      img: "cJof5Rm.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul"]
      }
    },
    {
      name: "Isaac Dover (a.k.a. Pierre Hoquet)",
      img: "F88iG6z.jpg",
      opts: {
        game: ["aai2"],
        role: ["vic"]
      }
    },
    {
      name: "Karin Jenson",
      img: "MAaetK5.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Bonnie Young",
      img: "bazH9iP.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Anubis",
      img: "lh1ksEk.jpg",
      opts: {
        game: ["aai2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Blaise Debeste",
      img: "3ls2XtA.jpg",
      opts: {
        game: ["aai2"],
        role: [ "cul", "pros"]
      }
    },
    {
      name: "Jill Crane",
      img: "IIxI8Gz.jpg",
      opts: {
        game: ["aai2"],
        role: ["vic", "atto"]
      }
    },
    {
      name: "John Marsh",
      img: "rk2tSMx.jpg",
      opts: {
        game: ["aai2"],
        role: [ ]
      }
    },
    {
      name: "Jack Cameron",
      img: "XYD2qR4.jpg",
      opts: {
        game: ["aai2"],
        role: ["vic"]
      }
    },
    {
      name: "Ryunosuke Naruhodo",
      img: "tgNM28R.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["atto", "def"]
      }
    },
    {
      name: "Susato Mikotoba",
      img: "aTMOIa6.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["assi"]
      }
    },
    {
      name: "Kazuma Asogi",
      img: "7f7a5AM.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["atto", "vic", "pros"]
      }
    },
    {
      name: "Herlock Sholmes",
      img: "2bUMLBm.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["det", "assi"]
      }
    },
    {
      name: "Iris Wilson",
      img: "4trOsDS.jpg",
      opts: {
        game: ["dgs1", "dgs 2"],
        role: ["assi"]
      }
    },
    {
      name: "Barok van Zieks",
      img: "kRfpUFj.jpg",
      opts: {
        game: ["dgs1"],
        role: ["pros", "def"]
      }
    },
    {
      name: "Yujin Mikotoba",
      img: "KzSC68s.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ ]
      }
    },
    {
      name: "John Wilson",
      img: "0mTs5y1.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["vic"]
      }
    },
    {
      name: "Seishiro Jigoku",
      img: "frudI5w.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ "cul"]
      }
    },
    {
      name: "Taketsuchi Auchi",
      img: "MSxpdZv.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["pros"]
      }
    },
    {
      name: "Satoru Hosonaga",
      img: "n9EgMZh.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ "det"]
      }
    },
    {
      name: "Iyesa Nosa",
      img: "feTawzp.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Aido Nosa",
      img: "SmYXvO9.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Kyurio Korekuta",
      img: "nWMcXh1.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Asa Shinn (a.k.a Jezaille Brett)",
      img: "0tIKcca.jpg",
      opts: {
        game: ["dgs1"],
        role: [ "vic", "cul"]
      }
    },
    {
      name: "Nikolina Pavlova",
      img: "P1B0Ubi.jpg",
      opts: {
        game: ["dgs1"],
        role: [ "cul"]
      }
    },
    {
      name: "Darka",
      img: "S7BhfEV.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Pirozhko",
      img: "CkZ8EkY.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Bif Strogenov",
      img: "x3NSmHg.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Mael Stronghart",
      img: "zsw4HX4.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["cul"]
      }
    },
    {
      name: "Magnus McGilded",
      img: "FZlz3xz.jpg",
      opts: {
        game: ["dgs1"],
        role: [ "vic", "cul", "def"]
      }
    },
    {
      name: "Mason Milverton (\"Thrise-Fired Mason\")",
      img: "qApnvLC.jpg",
      opts: {
        game: ["dgs1"],
        role: ["vic"]
      }
    },
    {
      name: "Beppo/Sandwich",
      img: "OIxZEpm.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ ]
      }
    },
    {
      name: "Lay D. Furst",
      img: "NDPJsth.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Gina Lestrade",
      img: "ieSe0KR.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ "det", "def"]
      }
    },
    {
      name: "Soseki Natsume",
      img: "DeS11Kn.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ "def"]
      }
    },
    {
      name: "Olive Green",
      img: "AeowGYR.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ "vic", "cul"]
      }
    },
    {
      name: "John Garrideb",
      img: "BcGI6qG.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ ]
      }
    },
    {
      name: "Joan Garrideb",
      img: "nS6sTW9.jpg",
      opts: {
        game: ["dgs1"],
        role: [ "cul"]
      }
    },
    {
      name: "Roly Beate",
      img: "RKONAOC.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Patricia Beate",
      img: "bidrWOJ.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Tobias Gregson",
      img: "cVyQVNI.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: ["det", "vic"]
      }
    },
    {
      name: "Wagahai",
      img: "RncYWSr.jpg",
      opts: {
        game: ["dgs1", "dgs2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Pop Windibank",
      img: "Uvdeab2.jpg",
      opts: {
        game: ["dgs1"],
        role: ["vic"]
      }
    },
    {
      name: "Ashley Graydon",
      img: "deDGFWC.jpg",
      opts: {
        game: ["dgs1"],
        role: [ "cul"]
      }
    },
    {
      name: "Judge of the Old Bailey",
      img: "E97XvWZ.jpg",
      opts: {
        game: ["dgs1"],
        role: []
      }
    },
    {
      name: "Nash Skulkin",
      img: "9y0gNUs.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Ringo Skulkin",
      img: "iSp2kQR.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Vilen Borshevik",
      img: "2IKvxcG.jpg",
      opts: {
        game: ["dgs1"],
        role: [ ]
      }
    },
    {
      name: "Genshin Asogi",
      img: "3BpfywJ.jpg",
      opts: {
        game: ["dgs2"],
        role: ["vic", "cul", "det"]
      }
    },
    {
      name: "Klint van Zieks",
      img: "9wRh67I.jpg",
      opts: {
        game: ["dgs2"],
        role: ["cul", "vic", "pros"]
      }
    },
    {
      name: "Chief Inspector Toby",
      img: "SHDGDrn.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Rei Membami",
      img: "sxt71Ga.jpg",
      opts: {
        game: ["dgs1"],
        role: [ "def"]
      }
    },
    {
      name: "Raiten Menimemo",
      img: "VQB1lQQ.jpg",
      opts: {
        game: ["dgs2"],
        role: [ "cul"]
      }
    },
    {
      name: "William Shamspeare",
      img: "Yz1PbPT.jpg",
      opts: {
        game: ["dgs2"],
        role: [ "vic", "cul"]
      }
    },
    {
      name: "Adron B. Metermann",
      img: "Xef18dF.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Quinby Altamont",
      img: "bT2wB3I.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Duncan Ross",
      img: "WPkvMTB.jpg",
      opts: {
        game: ["dgs2"],
        role: ["vic"]
      }
    },
    {
      name: "Selden",
      img: "YcSlZQv.jpg",
      opts: {
        game: ["dgs2"],
        role: ["cul"]
      }
    },
    {
      name: "Albert Harebrayne",
      img: "wmQqZs8.jpg",
      opts: {
        game: ["dgs2"],
        role: [ "def"]
      }
    },
    {
      name: "Esmeralda Tusspells",
      img: "rU7cHad.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Wilhelm Gottsreich Sigismond 'Gotts' Ormstein",
      img: "sLleCyf.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Odie Asman",
      img: "zhq3tsEs.jpg",
      opts: {
        game: ["dgs2"],
        role: ["vic"]
      }
    },
    {
      name: "Balthasar Lune",
      img: "7mn3p1G.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Enoch Drebber",
      img: "vEp962O.jpg",
      opts: {
        game: ["dgs2"],
        role: [ "cul"]
      }
    },
    {
      name: "Courtney Sithe",
      img: "cQFMFOV.jpg",
      opts: {
        game: ["dgs2"],
        role: [ "cul"]
      }
    },
    {
      name: "Maria Gorey",
      img: "jcNtPC5.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ],
      }
    },
    {
      name: "Evie Vigil",
      img: "sndLwIl.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Daley Vigil",
      img: "xpWNUvY.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Barry Caidin",
      img: "3x8DW2L.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Venus",
      img: "vRJSY7A.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Fabien de Rosseau",
      img: "EKM1YK0.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Peppino de Rossi",
      img: "siQSowI.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Tchikin Strogenov",
      img: "Ns9C4iQ.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ]
      }
    },
    {
      name: "Balmung",
      img: "0esanMn.jpg",
      opts: {
        game: ["dgs2"],
        role: [ ],
        ani: true
      }
    },
    {
      name: "Lady Baskerville",
      img: "G7pp12v.jpg",
      opts: {
        game: ["dgs2"],
        role: []
      }
    },
    {
      name: "Queen Victoria",
      img: "jkiQMOx.jpg",
      opts: {
        game: ["dgs2"],
        role: []
      }
    }
  ]