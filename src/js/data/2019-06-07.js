dataSetVersion = "2019-06-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

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
      { name: "Wily Beast and Weakest Creature (Trial)", tooltip: "17 - Kikeijuu", key: "WBaWC" }
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
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Hakurei Reimu",
    tag: "hakurei_reimu",
    img: "c5DqpgX.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC" ],
      stage: ["st4"]
    }
  },
  {
    name: "Kirisame Marisa",
    tag: "kirisame_marisa",
    img: "tJnkSzK.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC" ],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Rumia",
    tag: "rumia",
    img: "0YT7QlS.png",
    opts: {
      series: ["book", "EoSD", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Daiyousei",
    tag: "daiyousei",
    img: "NWlZud3.png",
    opts: {
      series: ["book", "EoSD"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Cirno",
    tag: "cirno",
    img: "qdveFSy.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "soku", "GFW", "HM", "DDC", "ISC", "HSiFS" ],
      stage: ["st2"]
    }
  },
  {
    name: "Hong Meiling",
    tag: "hong_meiling",
    img: "ptGp0x4.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "soku"],
      stage: ["st3"]
    }
  },
  {
    name: "Koakuma",
    tag: "koakuma",
    img: "vBKdDm4.png",
    opts: {
      series: ["book", "EoSD"],
      stage: ["st4"]
    }
  },
  {
    name: "Patchouli Knowledge",
    tag: "patchouli_knowledge",
    img: "A7ZnuHo.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Izayoi Sakuya",
    tag: "izayoi_sakuya",
    img: "sgZPf11.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "HM", "DDC", "ISC" ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Remilia Scarlet",
    tag: "remilia_scarlet",
    img: "8UX7hKE.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Flandre Scarlet",
    tag: "flandre_scarlet",
    img: "OhaDcnc.png",
    opts: {
      series: ["book", "EoSD", "StB", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Letty Whiterock",
    tag: "letty_whiterock",
    img: "MgzqjFK.png",
    opts: {
      series: ["book", "PCB", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Chen",
    tag: "chen",
    img: "ohmetZh.png",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Alice Margatroid",
    tag: "alice_margatroid",
    img: "aDIf0pN.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Lily White",
    tag: "lily_white",
    img: "2Pr8b2N.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "HSiFS"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Lunasa Prismriver",
    tag: "lunasa_prismriver",
    img: "htOMdDQ.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Merlin Prismriver",
    tag: "merlin_prismriver",
    img: "PrRPujP.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Lyrica Prismriver",
    tag: "lyrica_prismriver",
    img: "ze79bFC.png",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Konpaku Youmu",
    tag: "konpaku_youmu",
    img: "WMjyRLJ.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "TD", "HM", "ISC", "WBaWC" ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Saigyouji Yuyuko",
    tag: "saigyouji_yuyuko",
    img: "VT9mTGb.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "TD", "HM", "ISC", "VD" ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Yakumo Ran",
    tag: "yakumo_ran",
    img: "rshnJPV.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Yakumo Yukari",
    tag: "yakumo_yukari",
    img: "qsceD4I.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "AoCF", "VD" ],
      stage: ["ex"]
    }
  },
  {
    name: "Ibuki Suika",
    tag: "ibuki_suika",
    img: "pLdMjQ3.png",
    opts: {
      series: ["book", "IaMP", "StB", "SWR", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Wriggle Nightbug",
    tag: "wriggle_nightbug",
    img: "8DLUAPf.png",
    opts: {
      series: ["book", "IN", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Mystia Lorelei",
    tag: "mystia_lorelei",
    img: "6KyhLqE.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Kamishirasawa Keine",
    tag: "kamishirasawa_keine",
    img: "99w0Chm.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Inaba Tewi",
    tag: "inaba_tewi",
    img: "yqNfNje.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Reisen Udongein Inaba",
    tag: "reisen_udongein_inaba",
    img: "PrYzRcC.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "soku", "HM", "LoLK", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Yagokoro Eirin",
    tag: "yagokoro_eirin",
    img: "ceo4DhK.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houraisan Kaguya",
    tag: "houraisan_kaguya",
    img: "2YDuTk3.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Fujiwara no Mokou",
    tag: "fujiwara_no_mokou",
    img: "3zo4VKV.png",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Shameimaru Aya",
    tag: "shameimaru_aya",
    img: "8TLXMST.png",
    opts: {
      series: [ "book", "PoFV", "StB", "SWR", "MoF", "soku", "HM", "ISC", "HSiFS" ],
      stage: ["st4"]
    }
  },
  {
    name: "Medicine Melancholy",
    tag: "medicine_melancholy",
    img: "IImsp7K.png",
    opts: {
      series: ["book", "PoFV", "StB", "HM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kazami Yuuka",
    tag: "kazami_yuuka",
    img: "MZXJQq5.png",
    opts: {
      series: ["book", "PoFV", "StB", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Onozuka Komachi",
    tag: "onozuka_komachi",
    img: "aX4WIH8.png",
    opts: {
      series: ["book", "PoFV", "StB", "SWR", "soku", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Shiki Eiki, Yamaxanadu",
    tag: "shiki_eiki",
    img: "nPBvatH.png",
    opts: {
      series: ["book", "PoFV", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Aki Shizuha",
    tag: "aki_shizuha",
    img: "3pDRgvR.png",
    opts: {
      series: ["MoF", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Aki Minoriko",
    tag: "aki_minoriko",
    img: "bV0DaN7.png",
    opts: {
      series: ["MoF", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Kagiyama Hina",
    tag: "kagiyama_hina",
    img: "J11NjNj.png",
    opts: {
      series: ["MoF", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Kawashiro Nitori",
    tag: "kawashiro_nitori",
    img: "4Ufced2.png",
    opts: {
      series: ["MoF", "DS", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st3"]
    }
  },
  {
    name: "Inubashiri Momiji",
    tag: "inubashiri_momiji",
    img: "qGMjnYk.png",
    opts: {
      series: ["MoF", "DS", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Kochiya Sanae",
    tag: "kochiya_sanae",
    img: "ATTRSWU.png",
    opts: {
      series: ["MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "ISC", "LoLK"],
      stage: ["st5", "ex"]
    }
  },
  {
    name: "Yasaka Kanako",
    tag: "yasaka_kanako",
    img: "nQ78Lz7.png",
    opts: {
      series: ["MoF", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Moriya Suwako",
    tag: "moriya_suwako",
    img: "yJaD5ZV.png",
    opts: {
      series: ["MoF", "SA", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nagae Iku",
    tag: "nagae_iku",
    img: "xgAlECj.png",
    opts: {
      series: ["SWR", "soku", "DS", "HM", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Hinanawi Tenshi",
    tag: "hinanawi_tenshi",
    img: "tZLYivt.png",
    opts: {
      series: ["SWR", "soku", "DS", "HM", "ISC", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Kisume",
    tag: "kisume",
    img: "VgJgaEf.png",
    opts: {
      series: ["SA", "DS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurodani Yamame",
    tag: "kurodani_yamame",
    img: "sqgJ2St.png",
    opts: {
      series: ["SA", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Mizuhashi Parsee",
    tag: "mizuhashi_parsee",
    img: "lkoAJod.png",
    opts: {
      series: ["SA", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Hoshiguma Yuugi",
    tag: "hoshiguma_yuugi",
    img: "tDO653L.png",
    opts: {
      series: ["SA", "DS", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Komeiji Satori",
    tag: "komeiji_satori",
    img: "dup7Nt6.png",
    opts: {
      series: ["SA", "DS", "HM", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    tag: "kaenbyou_rin",
    img: "uQjbw1W.png",
    opts: {
      series: ["SA", "DS", "HM"],
      stage: ["st4", "st5", "st6"]
    }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    tag: "kaenbyou_rin",
    img: "DfdaXPW.png",
    opts: {
      series: ["SA", "soku", "DS", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Komeiji Koishi",
    tag: "komeiji_koishi",
    img: "wVCcens.png",
    opts: {
      series: ["SA", "DS", "HM", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nazrin",
    tag: "nazrin",
    img: "EpHQbiY.png",
    opts: {
      series: ["UFO", "DS", "HM"],
      stage: ["st1", "st5"]
    }
  },
  {
    name: "Tatara Kogasa",
    tag: "tatara_kogasa",
    img: "kJbv4dc.png",
    opts: {
      series: ["UFO", "TD", "DS", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Kumoi Ichirin",
    tag: "kumoi_ichirin",
    img: "Fyn5yVx.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"]
    }
  },
  {
    name: "Murasa Minamitsu",
    tag: "murasa_minamitsu",
    img: "39KYpvW.png",
    opts: {
      series: ["UFO", "DS", "HM"],
      stage: ["st4"]
    }
  },
  {
    name: "Toramaru Shou",
    tag: "toramaru_shou",
    img: "5yihisu.png",
    opts: {
      series: ["UFO", "DS", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Hijiri Byakuren",
    tag: "hijiri_byakuren",
    img: "2ppPxny.png",
    opts: {
      series: ["UFO", "DS", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houjuu Nue",
    tag: "houjuu_nue",
    img: "zL4S8Mj.png",
    opts: {
      series: ["UFO", "DS", "TD", "HM", "VD"],
      stage: ["st4", "st6", "ex"]
    }
  },
  {
    name: "Himekaidou Hatate",
    tag: "himekaidou_hatate",
    img: "LgvoTaJ.png",
    opts: {
      series: ["DS", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "Sunny Milk",
    tag: "sunny_milk",
    img: "VbqXiB6.png",
    opts: {
      series: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Luna Child",
    tag: "luna_child",
    img: "OBqgP48.png",
    opts: {
      series: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Star Sapphire",
    tag: "star_sapphire",
    img: "sNw61ap.png",
    opts: {
      series: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Kasodani Kyouko",
    tag: "kasodani_kyouko",
    img: "sLiqEBA.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Miyako Yoshika",
    tag: "miyako_yoshika",
    img: "6jq6eh6.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st3", "st4"]
    }
  },
  {
    name: "Kaku Seiga",
    tag: "kaku_seiga",
    img: "090hLPL.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Soga no Tojiko",
    tag: "soga_no_tojiko",
    img: "y0UXwFO.png",
    opts: {
      series: ["TD", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Mononobe no Futo",
    tag: "mononobe_no_futo",
    img: "WTZ97LE.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Toyosatomimi no Miko",
    tag: "toyosatomimi_no_miko",
    img: "3Xiqd22.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Futatsuiwa Mamizou",
    tag: "futatsuiwa_mamizou",
    img: "gMpWdmA.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Hata no Kokoro",
    tag: "hata_no_kokoro",
    img: "fxCGmUk.png",
    opts: {
      series: ["book", "HM", "ULiL", "AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Wakasagihime",
    tag: "wakasagihime",
    img: "brWCLVx.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st1"]
    }
  },
  {
    name: "Sekibanki",
    tag: "sekibanki",
    img: "VAMLiJD.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Imaizumi Kagerou",
    tag: "imaizumi_kagerou",
    img: "qwwL0bB.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st3"]
    }
  },
  {
    name: "Tsukumo Benben",
    tag: "tsukumo_benben",
    img: "vWNeMaH.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Tsukumo Yatsuhashi",
    tag: "tsukumo_yatsuhashi",
    img: "EJFQHQN.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Kijin Seija",
    tag: "kijin_seija",
    img: "16RUacj.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Sukuna Shinmyoumaru",
    tag: "sukuna_shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: {
      series: ["DDC", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Horikawa Raiko",
    tag: "horikawa_raiko",
    img: "SLLEccR.png",
    opts: {
      series: ["DDC", "ISC", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Usami Sumireko",
    tag: "usami_sumireko",
    img: "mc7ICW6.png",
    opts: {
      series: ["ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Seiran",
    tag: "seiran_(touhou)",
    img: "0ra00WG.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Ringo",
    tag: "ringo_(touhou)",
    img: "xQOsFlZ.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Doremy Sweet",
    tag: "doremy_sweet",
    img: "rGS7dyn.png",
    opts: {
      series: ["LoLK", "AoCF", "VD"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Kishin Sagume",
    tag: "kishin_sagume",
    img: "HLT338X.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Clownpiece",
    tag: "clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    tag: "junko_(touhou)",
    img: "NsfLZjY.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    tag: "hecatia_lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    tag: "eternity_larva",
    img: "ql5KxJH.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    tag: "sakata_nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    tag: "komano_aun",
    img: "wWUStkF.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    tag: "yatadera_narumi",
    img: "wrPVhAo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    tag: "nishida_satono",
    img: "8w9gAy2.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    tag: "teireida_mai",
    img: "DesAqAC.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    tag: "matara_okina",
    img: "icWvMyo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    tag: "yorigami_shion",
    img: "LenxXR4.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    tag: "yorigami_jo'on",
    img: "V9OznT1.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    tag: "ebisu_eika",
    img: "Ke3316E.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    tag: "ushizaki_urumi",
    img: "ru2vIIW.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    tag: "niwatari_kutaka",
    img: "QTQt0ZL.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st3"]
    }
  },
  {
    name: "Hieda no Akyuu",
    tag: "hieda_no_akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    tag: "tokiko_(touhou)",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: []
    } 
  },
  {
    name: "Reisen (Manga)",
    tag: "reisen",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    tag: "watatsuki_no_toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    tag: "watatsuki_no_yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    tag: "maribel_hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    tag: "usami_renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    tag: "ibaraki_kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    tag: "motoori_kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    tag: "hakurei_reimu_(pc-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    tag: "shingyoku",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    tag: "mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    tag: "elis_(touhou)",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    tag: "kikuri_(touhou)",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    tag: "sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    tag: "konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    tag: "rika_(touhou)",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    tag: "meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    tag: "kirisame_marisa_(pc-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen",
    tag: "ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    tag: "kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    tag: "kana_anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    tag: "asakura_rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    tag: "kitashirakawa_chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    tag: "okazaki_yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    tag: "ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    tag: "orange_(touhou)",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    tag: "kurumi_(touhou)",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    tag: "elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    tag: "kazami_yuuka_(pc-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    tag: "mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    tag: "gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    tag: "sara_(touhou)",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    tag: "luize",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    tag: "alice_margatroid_(pc-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    tag: "yuki_(touhou)",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai",
    tag: "mai_(touhou)", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    tag: "yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    tag: "shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    tag: "mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    tag: "unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    tag: "genjii",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    tag: "shingyoku_(male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    tag: "yuugenmagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    tag: "evil_eye_sigma",
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
      notgirl: true 
    }
  },
  {
    name: "Morichika Rinnosuke",
    tag: "morichika_rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    tag: "fortune_teller_(touhou)",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Hisoutensoku",
    tag: "hisou_tensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
