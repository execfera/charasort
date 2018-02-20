dataSetVersion = '2017-05-01'; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: 'Filter by Series Entry',
    key: 'series',
    tooltip: 'Check this to restrict to certain series.',
    checked: false,
    sub: [
      { name: 'Books and CDs' },
      { name: 'The Highly Responsive to Prayers', tooltip: '01 - Reiiden' },
      { name: 'The Story of Eastern Wonderland', tooltip: '02 - Fuumaroku' },
      { name: 'Phantasmagoria of Dim.Dream', tooltip: '03 - Yumejikuu' },
      { name: 'Lotus Land Story', tooltip: '04 - Gensoukyou' },
      { name: 'Mystic Square', tooltip: '05 - Kaikidan' },
      { name: 'Embodiment of Scarlet Devil', tooltip: '06 - Koumakan' },
      { name: 'Perfect Cherry Blossom', tooltip: '07 - Youyoumu' },
      { name: 'Immaterial and Missing Power', tooltip: '07.5 - Suimusou' },
      { name: 'Imperishable Night', tooltip: '08 - Eiyashou' },
      { name: 'Phantasmagoria of Flower View', tooltip: '09 - Kaeidzuka' },
      { name: 'Shoot the Bullet', tooltip: '09.5 - Bunkachou' },
      { name: 'Mountain of Faith', tooltip: '10 - Fuujinroku' },
      { name: 'Scarlet Weather Rhapsody', tooltip: '10.5 - Hisouten' },
      { name: 'Subterranean Animism', tooltip: '11 - Chireiden' },
      { name: 'Undefined Fantastic Object', tooltip: '12 - Seirensen' },
      { name: 'Touhou Hisoutensoku', tooltip: '12.3 - Hisoutensoku' },
      { name: 'Double Spoiler', tooltip: '12.5 - Bunkachou' },
      { name: 'Great Fairy Wars', tooltip: '12.8 - Daisensou' },
      { name: 'Ten Desires', tooltip: '13 - Shinreibyou' },
      { name: 'Hopeless Masquerade', tooltip: '13.5 - Shinkirou' },
      { name: 'Double Dealing Character', tooltip: '14 - Kishinjou' },
      { name: 'Impossible Spell Card', tooltip: '14.3 - Amanojaku' },
      { name: 'Urban Legend in Limbo', tooltip: '14.5 - Shinpiroku' },
      { name: 'Legacy of Lunatic Kingdom', tooltip: '15 - Kanjuden' },
    ]
  },
  {
    name: 'Filter by Stage Enemy Appearances',
    key: 'stage',
    tooltip: 'Check this to restrict to characters that appear in certain stages as enemies.',
    checked: false,
    sub: [
      { name: 'Stage 1' },
      { name: 'Stage 2' },
      { name: 'Stage 3' },
      { name: 'Stage 4' },
      { name: 'Stage 5/Penultimate', tooltip: 'Stage 4 in 5-stage games, and Stage 8 in 9-stage games.'
      },
      { name: 'Stage 6/Final' },
      { name: 'Stage EX/Phantasm' }
    ]
  },
  {
    name: 'Remove PC-98 Duplicates',
    key: 'pc98',
    tooltip: 'Check this to remove PC-98 characters with a Windows counterpart.',
  },
  {
    name: 'Remove Non-Girls',
    key: 'notgirl',
    tooltip: 'Check this to remove all non-female characters.',
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: 'Hakurei Reimu',
    img: 'c5DqpgX.png',
    opts: {
      series: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24],
      stage: [3]
    }
  },
  {
    name: 'Kirisame Marisa',
    img: 'tJnkSzK.png',
    opts: {
      series: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      stage: [3, 6]
    }
  },
  {
    name: 'Rumia',
    img: '0YT7QlS.png',
    opts: {
      series: [0, 6, 11, 20],
      stage: [0]
    }
  },
  {
    name: 'Daiyousei',
    img: 'NWlZud3.png',
    opts: {
      series: [0, 6],
      stage: [1, 6]
    }
  },
  {
    name: 'Cirno',
    img: 'qdveFSy.png',
    opts: {
      series: [0, 6, 7, 10, 11, 16, 18, 20, 21, 22],
      stage: [1]
    }
  },
  {
    name: 'Hong Meiling',
    img: 'ptGp0x4.png',
    opts: {
      series: [0, 6, 8, 11, 16],
      stage: [2]
    }
  },
  {
    name: 'Koakuma',
    img: 'vBKdDm4.png',
    opts: {
      series: [0, 6],
      stage: [3]
    }
  },
  {
    name: 'Patchouli Knowledge',
    img: 'A7ZnuHo.png',
    opts: {
      series: [0, 6, 8, 11, 12, 16, 20],
      stage: [3, 6]
    }
  },
  {
    name: 'Izayoi Sakuya',
    img: 'sgZPf11.png',
    opts: {
      series: [0, 6, 7, 8, 9, 10, 11, 12, 16, 20, 21, 22],
      stage: [4, 5]
    }
  },
  {
    name: 'Remilia Scarlet',
    img: '8UX7hKE.png',
    opts: {
      series: [0, 6, 8, 9, 11, 12, 16, 20, 22],
      stage: [5]
    }
  },
  {
    name: 'Flandre Scarlet',
    img: 'OhaDcnc.png',
    opts: {
      series: [0, 6, 11],
      stage: [6]
    }
  },
  {
    name: 'Letty Whiterock',
    img: 'MgzqjFK.png',
    opts: {
      series: [0, 7, 11, 20],
      stage: [0]
    }
  },
  {
    name: 'Chen',
    img: 'ohmetZh.png',
    opts: {
      series: [0, 7, 8, 11, 12, 16, 20],
      stage: [1, 6]
    }
  },
  {
    name: 'Alice Margatroid',
    img: 'aDIf0pN.png',
    opts: {
      series: [0, 7, 8, 9, 11, 12, 16, 20],
      stage: [2]
    }
  },
  {
    name: 'Lily White',
    img: '2Pr8b2N.png',
    opts: {
      series: [0, 7, 10, 20],
      stage: [3, 6]
    }
  },
  {
    name: 'Lunasa Prismriver',
    img: 'htOMdDQ.png',
    opts: {
      series: [0, 7, 10, 20],
      stage: [3]
    }
  },
  {
    name: 'Merlin Prismriver',
    img: 'PrRPujP.png',
    opts: {
      series: [0, 7, 10, 20],
      stage: [3]
    }
  },
  {
    name: 'Lyrica Prismriver',
    img: 'ze79bFC.png',
    opts: {
      series: [0, 7, 10, 20],
      stage: [3]
    }
  },
  {
    name: 'Konpaku Youmu',
    img: 'WMjyRLJ.png',
    opts: {
      series: [0, 7, 8, 9, 10, 11, 12, 16, 19, 20, 22],
      stage: [4, 5]
    }
  },
  {
    name: 'Saigyouji Yuyuko',
    img: 'VT9mTGb.png',
    opts: {
      series: [0, 7, 8, 9, 11, 12, 16, 19, 20, 22],
      stage: [0, 5]
    }
  },
  {
    name: 'Yakumo Ran',
    img: 'rshnJPV.png',
    opts: {
      series: [0, 7, 8, 9, 11, 12, 16, 20],
      stage: [6]
    }
  },
  {
    name: 'Yakumo Yukari',
    img: 'qsceD4I.png',
    opts: {
      series: [0, 7, 8, 9, 11, 12, 16, 20, 22],
      stage: [6]
    }
  },
  {
    name: 'Ibuki Suika',
    img: 'pLdMjQ3.png',
    opts: {
      series: [0, 8, 11, 12, 16, 17, 20, 22],
      stage: [5]
    }
  },
  {
    name: 'Wriggle Nightbug',
    img: '8DLUAPf.png',
    opts: {
      series: [0, 9, 11, 20],
      stage: [0]
    }
  },
  {
    name: 'Mystia Lorelei',
    img: '6KyhLqE.png',
    opts: {
      series: [0, 9, 10, 11, 20],
      stage: [1]
    }
  },
  {
    name: 'Kamishirasawa Keine',
    img: '99w0Chm.png',
    opts: {
      series: [0, 9, 11, 20, 22],
      stage: [2, 6]
    }
  },
  {
    name: 'Inaba Tewi',
    img: 'yqNfNje.png',
    opts: {
      series: [0, 9, 10, 11, 20],
      stage: [4]
    }
  },
  {
    name: 'Reisen Udongein Inaba',
    img: 'PrYzRcC.png',
    opts: {
      series: [0, 9, 10, 11, 16, 20, 24],
      stage: [4]
    }
  },
  {
    name: 'Yagokoro Eirin',
    img: 'ceo4DhK.png',
    opts: {
      series: [0, 9, 11, 20],
      stage: [5]
    }
  },
  {
    name: 'Houraisan Kaguya',
    img: '2YDuTk3.png',
    opts: {
      series: [0, 9, 11, 20],
      stage: [5]
    }
  },
  {
    name: 'Fujiwara no Mokou',
    img: '3zo4VKV.png',
    opts: {
      series: [0, 9, 11, 20, 22, 23],
      stage: [6]
    }
  },
  {
    name: 'Shameimaru Aya',
    img: '8TLXMST.png',
    opts: {
      series: [0, 10, 11, 12, 13, 16, 20, 22],
      stage: [3]
    }
  },
  {
    name: 'Medicine Melancholy',
    img: 'IImsp7K.png',
    opts: {
      series: [0, 10, 11, 20],
      stage: [3]
    }
  },
  {
    name: 'Kazami Yuuka',
    img: 'MZXJQq5.png',
    opts: {
      series: [0, 10, 11, 20],
      stage: [4]
    }
  },
  {
    name: 'Onozuka Komachi',
    img: 'aX4WIH8.png',
    opts: {
      series: [0, 10, 11, 12, 16, 20],
      stage: [4]
    }
  },
  {
    name: 'Shiki Eiki, Yamaxanadu',
    img: 'nPBvatH.png',
    opts: {
      series: [0, 10, 11, 20],
      stage: [5]
    }
  },
  {
    name: 'Aki Shizuha',
    img: '3pDRgvR.png',
    opts: {
      series: [13, 17, 20],
      stage: [0]
    }
  },
  {
    name: 'Aki Minoriko',
    img: 'bV0DaN7.png',
    opts: {
      series: [13, 17, 20],
      stage: [0]
    }
  },
  {
    name: 'Kagiyama Hina',
    img: 'J11NjNj.png',
    opts: {
      series: [13, 17, 20],
      stage: [1]
    }
  },
  {
    name: 'Kawashiro Nitori',
    img: '4Ufced2.png',
    opts: {
      series: [13, 17, 20, 22, 23],
      stage: [2]
    }
  },
  {
    name: 'Inubashiri Momiji',
    img: 'qGMjnYk.png',
    opts: {
      series: [13, 17, 22],
      stage: [3]
    }
  },
  {
    name: 'Kochiya Sanae',
    img: 'ATTRSWU.png',
    opts: {
      series: [13, 14, 15, 16, 17, 19, 20, 22, 24],
      stage: [4, 6]
    }
  },
  {
    name: 'Yasaka Kanako',
    img: 'nQ78Lz7.png',
    opts: {
      series: [13, 16, 17, 20, 22],
      stage: [5, 6]
    }
  },
  {
    name: 'Moriya Suwako',
    img: 'yJaD5ZV.png',
    opts: {
      series: [13, 14, 16, 17, 20, 22],
      stage: [6]
    }
  },
  {
    name: 'Nagae Iku',
    img: 'xgAlECj.png',
    opts: {
      series: [12, 16, 17, 20],
      stage: [4]
    }
  },
  {
    name: 'Hinanawi Tenshi',
    img: 'tZLYivt.png',
    opts: {
      series: [12, 16, 17, 20, 22],
      stage: [5]
    }
  },
  {
    name: 'Kisume',
    img: 'VgJgaEf.png',
    opts: {
      series: [14, 17],
      stage: [0]
    }
  },
  {
    name: 'Kurodani Yamame',
    img: 'sqgJ2St.png',
    opts: {
      series: [14, 17, 20],
      stage: [0]
    }
  },
  {
    name: 'Mizuhashi Parsee',
    img: 'lkoAJod.png',
    opts: {
      series: [14, 17, 20],
      stage: [1]
    }
  },
  {
    name: 'Hoshiguma Yuugi',
    img: 'tDO653L.png',
    opts: {
      series: [14, 17, 20],
      stage: [2]
    }
  },
  {
    name: 'Komeiji Satori',
    img: 'dup7Nt6.png',
    opts: {
      series: [14, 17, 20],
      stage: [3]
    }
  },
  {
    name: 'Kaenbyou Rin (Orin)',
    img: 'uQjbw1W.png',
    opts: {
      series: [14, 17, 20],
      stage: [3, 4, 5]
    }
  },
  {
    name: 'Reiuji Utsuho (Okuu)',
    img: 'DfdaXPW.png',
    opts: {
      series: [14, 16, 17, 20],
      stage: [5]
    }
  },
  {
    name: 'Komeiji Koishi',
    img: 'wVCcens.png',
    opts: {
      series: [14, 17, 20, 23],
      stage: [6]
    }
  },
  {
    name: 'Nazrin',
    img: 'EpHQbiY.png',
    opts: {
      series: [15, 17, 20],
      stage: [0, 4]
    }
  },
  {
    name: 'Tatara Kogasa',
    img: 'kJbv4dc.png',
    opts: {
      series: [15, 17, 20],
      stage: [1, 6]
    }
  },
  {
    name: 'Kumoi Ichirin',
    img: 'Fyn5yVx.png',
    opts: {
      series: [15, 17, 20, 23],
      stage: [2]
    }
  },
  {
    name: 'Murasa Minamitsu',
    img: '39KYpvW.png',
    opts: {
      series: [15, 17, 20],
      stage: [3]
    }
  },
  {
    name: 'Toramaru Shou',
    img: '8bMDDAo.png',
    opts: {
      series: [15, 17, 20],
      stage: [4]
    }
  },
  {
    name: 'Hijiri Byakuren',
    img: '2ppPxny.png',
    opts: {
      series: [15, 17, 20, 22, 23],
      stage: [5]
    }
  },
  {
    name: 'Houjuu Nue',
    img: 'zL4S8Mj.png',
    opts: {
      series: [15, 17, 19, 20],
      stage: [3, 5, 6]
    }
  },
  {
    name: 'Himekaidou Hatate',
    img: 'LgvoTaJ.png',
    opts: {
      series: [17, 20, 22],
      stage: [6]
    }
  },
  {
    name: 'Sunny Milk',
    img: 'VbqXiB6.png',
    opts: {
      series: [0, 18, 20],
      stage: [0, 1, 2]
    }
  },
  {
    name: 'Luna Child',
    img: 'OBqgP48.png',
    opts: {
      series: [0, 18, 20],
      stage: [0, 1, 2]
    }
  },
  {
    name: 'Star Sapphire',
    img: 'sNw61ap.png',
    opts: {
      series: [0, 18, 20],
      stage: [0, 1, 2]
    }
  },
  {
    name: 'Kasodani Kyouko',
    img: 'sLiqEBA.png',
    opts: {
      series: [19, 20, 22],
      stage: [1]
    }
  },
  {
    name: 'Miyako Yoshika',
    img: '6jq6eh6.png',
    opts: {
      series: [19, 20, 22],
      stage: [2, 3]
    }
  },
  {
    name: 'Kaku Seiga',
    img: '090hLPL.png',
    opts: {
      series: [19, 20, 22],
      stage: [3]
    }
  },
  {
    name: 'Soga no Tojiko',
    img: 'y0UXwFO.png',
    opts: {
      series: [19, 20],
      stage: [4]
    }
  },
  {
    name: 'Mononobe no Futo',
    img: 'WTZ97LE.png',
    opts: {
      series: [19, 20, 22, 23],
      stage: [4]
    }
  },
  {
    name: 'Toyosatomimi no Miko',
    img: '3Xiqd22.png',
    opts: {
      series: [19, 20, 22, 23],
      stage: [5]
    }
  },
  {
    name: 'Futatsuiwa Mamizou',
    img: 'gMpWdmA.png',
    opts: {
      series: [19, 20, 22, 23],
      stage: [6]
    }
  },
  {
    name: 'Hata no Kokoro',
    img: 'fxCGmUk.png',
    opts: {
      series: [0, 20, 23],
      stage: [5]
    }
  },
  {
    name: 'Wakasagihime',
    img: 'brWCLVx.png',
    opts: {
      series: [21, 22],
      stage: [0]
    }
  },
  {
    name: 'Sekibanki',
    img: 'VAMLiJD.png',
    opts: {
      series: [21, 22],
      stage: [1]
    }
  },
  {
    name: 'Imaizumi Kagerou',
    img: 'b5UMjD8.png',
    opts: {
      series: [21, 22],
      stage: [2]
    }
  },
  {
    name: 'Tsukumo Benben',
    img: 'vWNeMaH.png',
    opts: {
      series: [21, 22],
      stage: [3, 6]
    }
  },
  {
    name: 'Tsukumo Yatsuhashi',
    img: 'EJFQHQN.png',
    opts: {
      series: [21, 22],
      stage: [3, 6]
    }
  },
  {
    name: 'Kijin Seija',
    img: '16RUacj.png',
    opts: {
      series: [21, 22],
      stage: [4, 5]
    }
  },
  {
    name: 'Sukuna Shinmyoumaru',
    img: 'Zl2tN7W.png',
    opts: {
      series: [21, 22, 23],
      stage: [5]
    }
  },
  {
    name: 'Horikawa Raiko',
    img: 'SLLEccR.png',
    opts: {
      series: [21, 22],
      stage: [6]
    }
  },
  {
    name: 'Usami Sumireko',
    img: 'mc7ICW6.png',
    opts: {
      series: [23],
      stage: [5]
    }
  },
  {
    name: 'Seiran',
    img: '0ra00WG.png',
    opts: {
      series: [24],
      stage: [0]
    }
  },
  {
    name: 'Ringo',
    img: 'xQOsFlZ.png',
    opts: {
      series: [24],
      stage: [1]
    }
  },
  {
    name: 'Doremy Sweet',
    img: 'rGS7dyn.png',
    opts: {
      series: [24],
      stage: [2, 6]
    }
  },
  {
    name: 'Kishin Sagume',
    img: 'HLT338X.png',
    opts: {
      series: [24],
      stage: [3]
    }
  },
  {
    name: 'Clownpiece',
    img: '9Jje7ZQ.jpg',
    opts: {
      series: [24],
      stage: [4]
    }
  },
  {
    name: 'Junko',
    img: 'NsfLZjY.jpg',
    opts: {
      series: [24],
      stage: [5, 6]
    }
  },
  {
    name: 'Hecatia Lapislazuli',
    img: 'EH3Ulol.png',
    opts: {
      series: [24],
      stage: [6]
    }
  },
  {
    name: 'Hieda no Akyuu',
    img: 'ogONuLZ.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Tokiko',
    img: 'Y4maOc8.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Reisen (Manga)',
    img: 'cWjCo2j.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Watatsuki no Toyohime',
    img: 'uEBxsEX.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Watatsuki no Yorihime',
    img: 'Txu2P7S.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Maribel Hearn',
    img: 'XUI9vPo.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Usami Renko',
    img: '1P5EXRt.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Ibaraki Kasen',
    img: 'dQHnPPe.png',
    opts: {
      series: [0, 23],
      stage: [4]
    }
  },
  {
    name: 'Motoori Kosuzu',
    img: 'jEsJJo8.png',
    opts: {
      series: [0],
      stage: []
    }
  },
  {
    name: 'Hakurei Reimu (PC-98)',
    img: 'IZsGAMS.png',
    opts: {
      series: [1, 2, 3, 4, 5],
      stage: [3],
      pc98: true
    }
  },
  {
    name: 'Shingyoku (Female)',
    img: 'KuPiR2k.png',
    opts: {
      series: [1],
      stage: [0]
    }
  },
  {
    name: 'Mima',
    img: 'odH03t2.png',
    opts: {
      series: [1, 2, 3, 5],
      stage: [2, 4, 5]
    }
  },
  {
    name: 'Elis',
    img: 'ytnL1xd.png',
    opts: {
      series: [1],
      stage: [4]
    }
  },
  {
    name: 'Kikuri',
    img: 'fX2Kqik.png',
    opts: {
      series: [1],
      stage: [4]
    }
  },
  {
    name: 'Sariel',
    img: 'Wyc7YFw.png',
    opts: {
      series: [1],
      stage: [5]
    }
  },
  {
    name: 'Konngara',
    img: 'dg9jLHv.png',
    opts: {
      series: [1],
      stage: [5]
    }
  },
  {
    name: 'Rika',
    img: '02Xb4pU.png',
    opts: {
      series: [2],
      stage: [0, 6]
    }
  },
  {
    name: 'Meira',
    img: 'p529JgT.png',
    opts: {
      series: [2],
      stage: [1]
    }
  },
  {
    name: 'Kirisame Marisa (PC-98)',
    img: 'wxE7cBm.png',
    opts: {
      series: [2, 3, 4, 5],
      stage: [3],
      pc98: true
    }
  },
  {
    name: 'Ellen',
    img: '3iNNL0c.png',
    opts: {
      series: [3],
      stage: []
    }
  },
  {
    name: 'Kotohime',
    img: 'kRSGtpq.png',
    opts: {
      series: [3],
      stage: []
    }
  },
  {
    name: 'Kana Anaberal',
    img: 'rBvKMk5.png',
    opts: {
      series: [3],
      stage: []
    }
  },
  {
    name: 'Asakura Rikako',
    img: 'VIf5gUK.png',
    opts: {
      series: [3],
      stage: []
    }
  },
  {
    name: 'Kitashirakawa Chiyuri',
    img: 'tZFBycy.png',
    opts: {
      series: [3],
      stage: [4]
    }
  },
  {
    name: 'Okazaki Yumemi',
    img: 'c9rnG3n.png',
    opts: {
      series: [3],
      stage: [5]
    }
  },
  {
    name: 'Ruukoto',
    img: 'dko67SJ.png',
    opts: {
      series: [3],
      stage: []
    }
  },
  {
    name: 'Orange',
    img: 'm8wXE5U.png',
    opts: {
      series: [4],
      stage: [0]
    }
  },
  {
    name: 'Kurumi',
    img: '0rvq1ph.png',
    opts: {
      series: [4],
      stage: [1]
    }
  },
  {
    name: 'Elly',
    img: 'iIPftHn.png',
    opts: {
      series: [4],
      stage: [2]
    }
  },
  {
    name: 'Yuuka (PC-98)',
    img: 'ivUSwxp.png',
    opts: {
      series: [4, 5],
      stage: [4, 5],
      pc98: true
    }
  },
  {
    name: 'Mugetsu',
    img: 'bYA9E16.png',
    opts: {
      series: [4],
      stage: [6]
    }
  },
  {
    name: 'Gengetsu',
    img: 'TIOTtV9.png',
    opts: {
      series: [4],
      stage: [6]
    }
  },
  {
    name: 'Sara',
    img: '2QUbCrU.png',
    opts: {
      series: [5],
      stage: [0]
    }
  },
  {
    name: 'Louise',
    img: 'nDM5aB6.png',
    opts: {
      series: [5],
      stage: [1, 3]
    }
  },
  {
    name: 'Alice (PC-98)',
    img: 'KaBuRTW.png',
    opts: {
      series: [5],
      stage: [2, 6],
      pc98: true
    }
  },
  {
    name: 'Yuki',
    img: 'FfcmDgp.png',
    opts: {
      series: [5],
      stage: [3]
    }
  },
  {
    name: 'Mai',
    img: 'r6w7TX1.png',
    opts: {
      series: [5],
      stage: [3]
    }
  },
  {
    name: 'Yumeko',
    img: 'PcPqkdO.png',
    opts: {
      series: [5],
      stage: [4]
    }
  },
  {
    name: 'Shinki',
    img: 'gPE95S7.png',
    opts: {
      series: [5],
      stage: [5]
    }
  },
  {
    name: 'Mimi-chan',
    img: 'zBl2zlv.png',
    opts: {
      series: [3],
      stage: [],
      notgirl: true
    }
  },
  {
    name: 'Unzan',
    img: 'r5eWREh.png',
    opts: {
      series: [15, 17, 20, 23],
      stage: [2],
      notgirl: true
    }
  },
  {
    name: 'Genji',
    img: 'LoUqOuH.png',
    opts: {
      series: [2, 3, 4, 5],
      stage: [],
      notgirl: true
    }
  },
  {
    name: 'Shingyoku (Male)',
    img: 'a5uwlgN.png',
    opts: {
      series: [1],
      stage: [0],
      notgirl: true
    }
  },
  {
    name: 'YuugenMagan',
    img: 'IOW8GdU.png',
    opts: {
      series: [1],
      stage: [2],
      notgirl: true
    }
  },
  {
    name: 'Evil Eye Sigma',
    img: 'rAFUMwE.png',
    opts: {
      series: [2],
      stage: [6],
      notgirl: true
    }
  },
  {
    name: 'Great Catfish',
    img: 'BgRi9Oh.png',
    opts: {
      series: [16],
      stage: [5],
      notgirl: true
    }
  },
  {
    name: 'Morichika Rinnosuke',
    img: 'ITUhsGj.png',
    opts: {
      series: [0, 20],
      stage: [],
      notgirl: true
    }
  },
  {
    name: 'Fortune Teller',
    img: 'BYot23O.png',
    opts: {
      series: [0],
      stage: [],
      notgirl: true
    }
  },
  {
    name: 'Hisoutensoku',
    img: 'P4JZ2it.png',
    opts: {
      series: [16],
      stage: [],
      notgirl: true
    }
  }
];
