dataSetVersion = "2023-09-22";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].changelog = [
  "Added 100th Black Market",
  "Unfinished Dream of All Living Ghost",
];

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Books and CDs", key: "book" },
      { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" },
      { name: "Violet Detector", tooltip: "16.5 - Hifuu Nightmare Diary", key: "VD" },
      { name: "Wily Beast and Weakest Creature", tooltip: "17 - Kikeijuu", key: "WBaWC" },
      { name: "Touhou Gouyoku Ibun", tooltip: "17.5 - Gouyoku Ibun", key: "17.5" },
      { name: "Unconnected Marketeers", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "100th Black Market", tooltip: "18.5 - Bulletphilia-tachi no Yami-Ichiba", key: "100BM" },
      { name: "Unfinished Dream of All Living Ghost", tooltip: "19 - Unfinished Dream of All Living Ghost", key: "UDoALG" },
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Hakurei Reimu",
    img: "c5DqpgX.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC", "UM", "17.5", "100BM", "UDoALG" ],
      stage: ["st4"]
    }
  },
  {
    name: "Kirisame Marisa",
    img: "tJnkSzK.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC", "UM", "17.5", "100BM", "UDoALG" ],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    opts: {
      series: ["book", "EoSD", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Daiyousei",
    img: "NWlZud3.png",
    opts: {
      series: ["book", "EoSD"],
      stage: ["st2", "ex"],
      nameless: true
    },
  },
  {
    name: "Cirno",
    img: "qdveFSy.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "soku", "GFW", "HM", "DDC", "ISC", "HSiFS", "100BM" ],
      stage: ["st2"]
    }
  },
  {
    name: "Hong Meiling",
    img: "ptGp0x4.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "soku"],
      stage: ["st3"]
    }
  },
  {
    name: "Koakuma",
    img: "vBKdDm4.png",
    opts: {
      series: ["book", "EoSD"],
      stage: ["st4"],
      nameless: true
    }
  },
  {
    name: "Patchouli Knowledge",
    img: "A7ZnuHo.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Izayoi Sakuya",
    img: "sgZPf11.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "HM", "DDC", "ISC", "UM", "100BM" ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Remilia Scarlet",
    img: "8UX7hKE.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Flandre Scarlet",
    img: "OhaDcnc.png",
    opts: {
      series: ["book", "EoSD", "StB", "VD", "17.5"],
      stage: ["ex"]
    }
  },
  {
    name: "Letty Whiterock",
    img: "MgzqjFK.png",
    opts: {
      series: ["book", "PCB", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Chen",
    img: "ohmetZh.png",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Alice Margatroid",
    img: "aDIf0pN.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Lily White",
    img: "2Pr8b2N.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "HSiFS"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Lunasa Prismriver",
    img: "htOMdDQ.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Merlin Prismriver",
    img: "PrRPujP.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Lyrica Prismriver",
    img: "ze79bFC.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Konpaku Youmu",
    img: "WMjyRLJ.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "TD", "HM", "ISC", "WBaWC", "100BM" ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Saigyouji Yuyuko",
    img: "VT9mTGb.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "TD", "HM", "ISC", "VD" ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Yakumo Ran",
    img: "rshnJPV.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "VD", "UDoALG"],
      stage: ["ex"]
    }
  },
  {
    name: "Yakumo Yukari",
    img: "qsceD4I.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "AoCF", "VD" ],
      stage: ["ex"]
    }
  },
  {
    name: "Ibuki Suika",
    img: "pLdMjQ3.png",
    opts: {
      series: ["book", "IaMP", "StB", "SWR", "soku", "DS", "HM", "ISC", "VD", "100BM", "UDoALG"],
      stage: ["st6"]
    }
  },
  {
    name: "Wriggle Nightbug",
    img: "8DLUAPf.png",
    opts: {
      series: ["book", "IN", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Mystia Lorelei",
    img: "6KyhLqE.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Kamishirasawa Keine",
    img: "99w0Chm.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Inaba Tewi",
    img: "yqNfNje.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Reisen Udongein Inaba",
    img: "PrYzRcC.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "soku", "HM", "LoLK", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Yagokoro Eirin",
    img: "ceo4DhK.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houraisan Kaguya",
    img: "2YDuTk3.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Fujiwara no Mokou",
    img: "3zo4VKV.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Shameimaru Aya",
    img: "8TLXMST.png",
    opts: {
      series: [ "book", "PoFV", "StB", "SWR", "MoF", "soku", "HM", "ISC", "HSiFS" ],
      stage: ["st4"]
    }
  },
  {
    name: "Medicine Melancholy",
    img: "IImsp7K.png",
    opts: {
      series: ["book", "PoFV", "StB", "HM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kazami Yuuka",
    img: "MZXJQq5.png",
    opts: {
      series: ["book", "PoFV", "StB", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Onozuka Komachi",
    img: "aX4WIH8.png",
    opts: {
      series: ["book", "PoFV", "StB", "SWR", "soku", "HM", "100BM"],
      stage: ["st5"]
    }
  },
  {
    name: "Shiki Eiki, Yamaxanadu",
    img: "nPBvatH.png",
    opts: {
      series: ["book", "PoFV", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Aki Shizuha",
    img: "3pDRgvR.png",
    opts: {
      series: ["MoF", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Aki Minoriko",
    img: "bV0DaN7.png",
    opts: {
      series: ["MoF", "DS", "HM", "100BM"],
      stage: ["st1"]
    }
  },
  {
    name: "Kagiyama Hina",
    img: "J11NjNj.png",
    opts: {
      series: ["MoF", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Kawashiro Nitori",
    img: "4Ufced2.png",
    opts: {
      series: ["MoF", "DS", "HM", "ISC", "ULiL", "AoCF", "100BM"],
      stage: ["st3"]
    }
  },
  {
    name: "Inubashiri Momiji",
    img: "qGMjnYk.png",
    opts: {
      series: ["MoF", "DS", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Kochiya Sanae",
    img: "ATTRSWU.png",
    opts: {
      series: ["MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "ISC", "LoLK", "UM", "100BM", "UDoALG"],
      stage: ["st5", "ex"]
    }
  },
  {
    name: "Yasaka Kanako",
    img: "nQ78Lz7.png",
    opts: {
      series: ["MoF", "soku", "DS", "HM", "ISC", "VD", "17.5"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Moriya Suwako",
    img: "yJaD5ZV.png",
    opts: {
      series: ["MoF", "SA", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nagae Iku",
    img: "xgAlECj.png",
    opts: {
      series: ["SWR", "soku", "DS", "HM", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: {
      series: ["SWR", "soku", "DS", "HM", "ISC", "AoCF", "VD", "100BM"],
      stage: ["st6"]
    }
  },
  {
    name: "Kisume",
    img: "VgJgaEf.png",
    opts: {
      series: ["SA", "DS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: {
      series: ["SA", "DS", "HM", "17.5"],
      stage: ["st1"]
    }
  },
  {
    name: "Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: {
      series: ["SA", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: {
      series: ["SA", "DS", "HM", "17.5"],
      stage: ["st3"]
    }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: {
      series: ["SA", "DS", "HM", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: {
      series: ["SA", "DS", "HM", "UDoALG"],
      stage: ["st4", "st5", "st6"]
    }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: {
      series: ["SA", "soku", "DS", "HM", "VD", "17.5"],
      stage: ["st6"]
    }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: {
      series: ["SA", "DS", "HM", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nazrin",
    img: "EpHQbiY.png",
    opts: {
      series: ["UFO", "DS", "HM", "UDoALG"],
      stage: ["st1", "st5"]
    }
  },
  {
    name: "Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: {
      series: ["UFO", "TD", "DS", "HM", "17.5"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"]
    }
  },
  {
    name: "Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: {
      series: ["UFO", "DS", "HM", "17.5"],
      stage: ["st4"]
    }
  },
  {
    name: "Toramaru Shou",
    img: "5yihisu.png",
    opts: {
      series: ["UFO", "DS", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: {
      series: ["UFO", "DS", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: {
      series: ["UFO", "DS", "TD", "HM", "VD"],
      stage: ["st4", "st6", "ex"]
    }
  },
  {
    name: "Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: {
      series: ["DS", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "Sunny Milk",
    img: "VbqXiB6.png",
    opts: {
      series: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Luna Child",
    img: "OBqgP48.png",
    opts: {
      series: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Star Sapphire",
    img: "sNw61ap.png",
    opts: {
      series: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st3", "st4"]
    }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: {
      series: ["TD", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD", "100BM", "UDoALG"],
      stage: ["ex"]
    }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: {
      series: ["book", "HM", "ULiL", "AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: {
      series: ["DDC", "ISC", "100BM"],
      stage: ["st1"]
    }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: {
      series: ["DDC", "ISC", "100BM"],
      stage: ["st2"]
    }
  },
  {
    name: "Imaizumi Kagerou",
    img: "qwwL0bB.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st3"]
    }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: {
      series: ["DDC", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: {
      series: ["DDC", "ISC", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: {
      series: ["ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: {
      series: ["LoLK", "VD", "UDoALG"],
      stage: ["st1"]
    }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: {
      series: ["LoLK", "AoCF", "VD"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      series: ["LoLK", "VD", "100BM"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    img: "ql5KxJH.png",
    opts: {
      series: ["HSiFS", "VD", "100BM"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      series: ["HSiFS", "VD", "100BM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    img: "wWUStkF.png",
    opts: {
      series: ["HSiFS", "VD", "UDoALG"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    img: "wrPVhAo.png",
    opts: {
      series: ["HSiFS", "VD", "100BM"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    img: "8w9gAy2.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    img: "DesAqAC.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    img: "icWvMyo.png",
    opts: {
      series: ["HSiFS", "VD", "17.5"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      series: ["AoCF", "17.5"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    img: "V9OznT1.png",
    opts: {
      series: ["AoCF", "17.5"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      series: ["WBaWC", "100BM"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    img: "ru2vIIW.png",
    opts: {
      series: ["WBaWC", "100BM"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    img: "QTQt0ZL.png",
    opts: {
      series: ["WBaWC", "17.5", "100BM"],
      stage: ["st3"]
    }
  },
  {
    name: "Kicchou Yachie",
    img: "CzcIMxF.png",
    opts: {
      series: ["WBaWC", "UDoALG"],
      stage: ["st4"]
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      series: ["WBaWC", "100BM", "UDoALG"],
      stage: ["ex"]
    }
  },
  {
    name: "Goutokuji Mike",
    img: "FltSdtv.png",
    opts: {
      series: ["UM", "100BM"],
      stage: ["st1"]
    }
  },
  {
    name: "Yamashiro Takane",
    img: "Aaq99GQ.png",
    opts: {
      series: ["UM", "100BM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komakusa Sannyo",
    img: "DKupiv1.png",
    opts: {
      series: ["UM"],
      stage: ["st3"]
    }
  },
  {
    name: "Tamatsukuri Misumaru",
    img: "0V9jLUm.png",
    opts: {
      series: ["UM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kudamaki Tsukasa",
    img: "hiKwpr7.png",
    opts: {
      series: ["UM", "UDoALG", "100BM"],
      stage: ["st5", "st6", "ex"]
    }
  },
  {
    name: "Iizunamaru Megumu",
    img: "4fhGB1j.png",
    opts: {
      series: ["UM", "100BM"],
      stage: ["st5"]
    }
  },
  {
    name: "Tenkyuu Chimata",
    img: "7ebXBQi.png",
    opts: {
      series: ["UM", "100BM"],
      stage: ["st6"]
    }
  },
  {
    name: "Himemushi Momoyo",
    img: "UG0f5r4.png",
    opts: {
      series: ["UM", "100BM"],
      stage: ["ex"]
    }
  },
  {
    name: "Toutetsu Yuuma",
    img: "WEbfrcr.png",
    opts: {
      series: ["17.5", "UDoALG"],
      stage: ["st6"]
    }
  },
  {
    name: "Son Biten",
    img: "111176253_p0.png",
    opts: {
      series: ["UDoALG"],
      stage: ["st5"]
    }
  },
  {
    name: "Mitsugashira Enoko",
    img: "111420339_p0.png",
    opts: {
      series: ["UDoALG"],
      stage: ["st5"]
    }
  },
  {
    name: "Tenkajin Chiyari",
    img: "111576609_p0.png",
    opts: {
      series: ["UDoALG"],
      stage: ["st5"]
    }
  },
  {
    name: "Yomotsu Hisami",
    img: "111798695_p0.png",
    opts: {
      series: ["UDoALG"],
      stage: ["st5"]
    }
  },
  {
    name: "Nippaku Zanmu",
    img: "111935114_p0.png",
    opts: {
      series: ["UDoALG"],
      stage: ["st6"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "a5V63gx.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      series: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      series: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
