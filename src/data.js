const imageRoot = 'https://i.imgur.com/';
const options = [
  {
    name: 'Filter by Series Entry',
    key: 'series',
    tooltip: 'Check this to remove certain series entries.',
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
      { name: 'Antinomy of Common Flowers', tooltip: '15.5 - Hyouibana' },
      { name: 'Hidden Star in Four Seasons', tooltip: '16 - Tenkuushou' }
    ]
  },
  {
    name: 'Filter by Stage Appearances',
    key: 'stage',
    tooltip: 'Check this to remove certain stages.',
    checked: false,
    sub: [
      { name: 'Stage 1' },
      { name: 'Stage 2' },
      { name: 'Stage 3' },
      { name: 'Stage 4' },
      { name: 'Stage 5/Penultimate', tooltip: 'Stage 4 in 5-stage games, and Stage 8 in 9-stage games.' },
      { name: 'Stage 6/Final' },
      { name: 'Stage EX/Phantasm' }
    ]
  },
  {
    name: 'Include PC-98 Duplicates',
    key: 'pc98',
    tooltip: 'Check this to include PC-98 characters with a Windows counterpart.',
    checked: false
  },
  {
    name: 'Include Non-Girls',
    key: 'notgirl',
    tooltip: 'Check this to include certain non-female characters.',
    checked: false
  }
];

const characterData = [
  {
    name: 'Hakurei Reimu',
    img: 'c5DqpgX.png',
    series: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26],
    stage: [3]
  },
  {
    name: 'Kirisame Marisa',
    img: 'tJnkSzK.png',
    series: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    stage: [3, 6]
  },
  {
    name: 'Rumia',
    img: '0YT7QlS.png',
    series: [0, 6, 11, 20],
    stage: [0]
  },
  {
    name: 'Daiyousei',
    img: 'NWlZud3.png',
    series: [0, 6],
    stage: [1, 6]
  },
  {
    name: 'Cirno',
    img: 'qdveFSy.png',
    series: [0, 6, 7, 10, 11, 16, 18, 20, 21, 22, 26],
    stage: [1]
  },
  {
    name: 'Hong Meiling',
    img: 'ptGp0x4.png',
    series: [0, 6, 8, 11, 16],
    stage: [2]
  },
  {
    name: 'Koakuma',
    img: 'vBKdDm4.png',
    series: [0, 6],
    stage: [3]
  },
  {
    name: 'Patchouli',
    img: 'A7ZnuHo.png',
    series: [0, 6, 8, 11, 12, 16, 20],
    stage: [3, 6]
  },
  {
    name: 'Izayoi Sakuya',
    img: 'sgZPf11.png',
    series: [0, 6, 7, 8, 9, 10, 11, 12, 16, 20, 21, 22],
    stage: [4, 5]
  },
  {
    name: 'Remilia',
    img: '8UX7hKE.png',
    series: [0, 6, 8, 9, 11, 12, 16, 20, 22],
    stage: [5]
  },
  {
    name: 'Flandre',
    img: 'OhaDcnc.png',
    series: [0, 6, 11],
    stage: [6]
  },
  {
    name: 'Letty Whiterock',
    img: 'MgzqjFK.png',
    series: [0, 7, 11, 20],
    stage: [0]
  },
  {
    name: 'Chen',
    img: 'ohmetZh.png',
    series: [0, 7, 8, 11, 12, 16, 20],
    stage: [1, 6]
  },
  {
    name: 'Alice Margatroid',
    img: 'aDIf0pN.png',
    series: [0, 7, 8, 9, 11, 12, 16, 20],
    stage: [2]
  },
  {
    name: 'Lily White',
    img: '2Pr8b2N.png',
    series: [0, 7, 10, 20, 26],
    stage: [3, 6]
  },
  {
    name: 'Lunasa Prismriver',
    img: 'htOMdDQ.png',
    series: [0, 7, 10, 20, 25],
    stage: [3]
  },
  {
    name: 'Merlin Prismriver',
    img: 'PrRPujP.png',
    series: [0, 7, 10, 20, 25],
    stage: [3]
  },
  {
    name: 'Lyrica Prismriver',
    img: 'ze79bFC.png',
    series: [0, 7, 10, 20, 25],
    stage: [3]
  },
  {
    name: 'Konpaku Youmu',
    img: 'WMjyRLJ.png',
    series: [0, 7, 8, 9, 10, 11, 12, 16, 19, 20, 22],
    stage: [4, 5]
  },
  {
    name: 'Saigyouji Yuyuko',
    img: 'VT9mTGb.png',
    series: [0, 7, 8, 9, 11, 12, 16, 19, 20, 22],
    stage: [0, 5]
  },
  {
    name: 'Yakumo Ran',
    img: 'rshnJPV.png',
    series: [0, 7, 8, 9, 11, 12, 16, 20],
    stage: [6]
  },
  {
    name: 'Yakumo Yukari',
    img: 'qsceD4I.png',
    series: [0, 7, 8, 9, 11, 12, 16, 20, 22, 25],
    stage: [6]
  },
  {
    name: 'Ibuki Suika',
    img: 'pLdMjQ3.png',
    series: [0, 8, 11, 12, 16, 17, 20, 22],
    stage: [5]
  },
  {
    name: 'Wriggle Nightbug',
    img: '8DLUAPf.png',
    series: [0, 9, 11, 20],
    stage: [0]
  },
  {
    name: 'Mystia Lorelei',
    img: '6KyhLqE.png',
    series: [0, 9, 10, 11, 20],
    stage: [1]
  },
  {
    name: 'Kamishirasawa Keine',
    img: '99w0Chm.png',
    series: [0, 9, 11, 20, 22],
    stage: [2, 6]
  },
  {
    name: 'Inaba Tewi',
    img: 'yqNfNje.png',
    series: [0, 9, 10, 11, 20],
    stage: [4]
  },
  {
    name: 'Reisen Udongein Inaba',
    img: 'PrYzRcC.png',
    series: [0, 9, 10, 11, 16, 20, 24, 25],
    stage: [4]
  },
  {
    name: 'Yagokoro Eirin',
    img: 'ceo4DhK.png',
    series: [0, 9, 11, 20],
    stage: [5]
  },
  {
    name: 'Houraisan Kaguya',
    img: '2YDuTk3.png',
    series: [0, 9, 11, 20],
    stage: [5]
  },
  {
    name: 'Fujiwara no Mokou',
    img: '3zo4VKV.png',
    series: [0, 9, 11, 20, 22, 23, 25],
    stage: [6]
  },
  {
    name: 'Shameimaru Aya',
    img: '8TLXMST.png',
    series: [0, 10, 11, 12, 13, 16, 20, 22, 26],
    stage: [3]
  },
  {
    name: 'Medicine Melancholy',
    img: 'IImsp7K.png',
    series: [0, 10, 11, 20],
    stage: [3]
  },
  {
    name: 'Kazami Yuuka',
    img: 'MZXJQq5.png',
    series: [0, 10, 11, 20],
    stage: [4]
  },
  {
    name: 'Onozuka Komachi',
    img: 'aX4WIH8.png',
    series: [0, 10, 11, 12, 16, 20],
    stage: [4]
  },
  {
    name: 'Shiki Eiki, Yamaxanadu',
    img: 'nPBvatH.png',
    series: [0, 10, 11, 20],
    stage: [5]
  },
  {
    name: 'Aki Shizuha',
    img: '3pDRgvR.png',
    series: [13, 17, 20],
    stage: [0]
  },
  {
    name: 'Aki Minoriko',
    img: 'bV0DaN7.png',
    series: [13, 17, 20],
    stage: [0]
  },
  {
    name: 'Kagiyama Hina',
    img: 'J11NjNj.png',
    series: [13, 17, 20],
    stage: [1]
  },
  {
    name: 'Kawashiro Nitori',
    img: '4Ufced2.png',
    series: [13, 17, 20, 22, 23, 25],
    stage: [2]
  },
  {
    name: 'Inubashiri Momiji',
    img: 'qGMjnYk.png',
    series: [13, 17, 22],
    stage: [3]
  },
  {
    name: 'Kochiya Sanae',
    img: 'ATTRSWU.png',
    series: [13, 14, 15, 16, 17, 19, 20, 22, 24],
    stage: [4, 6]
  },
  {
    name: 'Yasaka Kanako',
    img: 'nQ78Lz7.png',
    series: [13, 16, 17, 20, 22],
    stage: [5, 6]
  },
  {
    name: 'Moriya Suwako',
    img: 'yJaD5ZV.png',
    series: [13, 14, 16, 17, 20, 22],
    stage: [6]
  },
  {
    name: 'Nagae Iku',
    img: 'xgAlECj.png',
    series: [12, 16, 17, 20],
    stage: [4]
  },
  {
    name: 'Hinanawi Tenshi',
    img: 'tZLYivt.png',
    series: [12, 16, 17, 20, 22, 25],
    stage: [5]
  },
  {
    name: 'Kisume',
    img: 'VgJgaEf.png',
    series: [14, 17],
    stage: [0]
  },
  {
    name: 'Kurodani Yamame',
    img: 'sqgJ2St.png',
    series: [14, 17, 20],
    stage: [0]
  },
  {
    name: 'Mizuhashi Parsee',
    img: 'lkoAJod.png',
    series: [14, 17, 20],
    stage: [1]
  },
  {
    name: 'Hoshiguma Yuugi',
    img: 'tDO653L.png',
    series: [14, 17, 20],
    stage: [2]
  },
  {
    name: 'Komeiji Satori',
    img: 'dup7Nt6.png',
    series: [14, 17, 20],
    stage: [3]
  },
  {
    name: 'Kaenbyou Rin (Orin)',
    img: 'uQjbw1W.png',
    series: [14, 17, 20],
    stage: [3, 4, 5]
  },
  {
    name: 'Reiuji Utsuho (Okuu)',
    img: 'DfdaXPW.png',
    series: [14, 16, 17, 20],
    stage: [5]
  },
  {
    name: 'Komeiji Koishi',
    img: 'wVCcens.png',
    series: [14, 17, 20, 23, 25],
    stage: [6]
  },
  {
    name: 'Nazrin',
    img: 'EpHQbiY.png',
    series: [15, 17, 20],
    stage: [0, 4]
  },
  {
    name: 'Tatara Kogasa',
    img: 'kJbv4dc.png',
    series: [15, 17, 20],
    stage: [1, 6]
  },
  {
    name: 'Kumoi Ichirin',
    img: 'Fyn5yVx.png',
    series: [15, 17, 20, 23, 25],
    stage: [2]
  },
  {
    name: 'Murasa Minamitsu',
    img: '39KYpvW.png',
    series: [15, 17, 20],
    stage: [3]
  },
  {
    name: 'Toramaru Shou',
    img: '8bMDDAo.png',
    series: [15, 17, 20],
    stage: [4]
  },
  {
    name: 'Hijiri Byakuren',
    img: '2ppPxny.png',
    series: [15, 17, 20, 22, 23, 25],
    stage: [5]
  },
  {
    name: 'Houjuu Nue',
    img: 'zL4S8Mj.png',
    series: [15, 17, 19, 20],
    stage: [3, 5, 6]
  },
  {
    name: 'Himekaidou Hatate',
    img: 'LgvoTaJ.png',
    series: [17, 20, 22],
    stage: [6]
  },
  {
    name: 'Sunny Milk',
    img: 'VbqXiB6.png',
    series: [0, 18, 20],
    stage: [0, 1, 2]
  },
  {
    name: 'Luna Child',
    img: 'OBqgP48.png',
    series: [0, 18, 20],
    stage: [0, 1, 2]
  },
  {
    name: 'Star Sapphire',
    img: 'sNw61ap.png',
    series: [0, 18, 20],
    stage: [0, 1, 2]
  },
  {
    name: 'Kasodani Kyouko',
    img: 'sLiqEBA.png',
    series: [19, 20, 22],
    stage: [1]
  },
  {
    name: 'Miyako Yoshika',
    img: '6jq6eh6.png',
    series: [19, 20, 22],
    stage: [2, 3]
  },
  {
    name: 'Kaku Seiga',
    img: '090hLPL.png',
    series: [19, 20, 22],
    stage: [3]
  },
  {
    name: 'Soga no Tojiko',
    img: 'y0UXwFO.png',
    series: [19, 20],
    stage: [4]
  },
  {
    name: 'Mononobe no Futo',
    img: 'WTZ97LE.png',
    series: [19, 20, 22, 23, 25],
    stage: [4]
  },
  {
    name: 'Toyosatomimi no Miko',
    img: '3Xiqd22.png',
    series: [19, 20, 22, 23, 25],
    stage: [5]
  },
  {
    name: 'Futatsuiwa Mamizou',
    img: 'gMpWdmA.png',
    series: [19, 20, 22, 23, 25],
    stage: [6]
  },
  {
    name: 'Hata no Kokoro',
    img: 'fxCGmUk.png',
    series: [0, 20, 23, 25],
    stage: [5]
  },
  {
    name: 'Wakasagihime',
    img: 'brWCLVx.png',
    series: [21, 22],
    stage: [0]
  },
  {
    name: 'Sekibanki',
    img: 'VAMLiJD.png',
    series: [21, 22],
    stage: [1]
  },
  {
    name: 'Imaizumi Kagerou',
    img: 'b5UMjD8.png',
    series: [21, 22],
    stage: [2]
  },
  {
    name: 'Tsukumo Benben',
    img: 'vWNeMaH.png',
    series: [21, 22],
    stage: [3, 6]
  },
  {
    name: 'Tsukumo Yatsuhashi',
    img: 'EJFQHQN.png',
    series: [21, 22],
    stage: [3, 6]
  },
  {
    name: 'Kijin Seija',
    img: '16RUacj.png',
    series: [21, 22],
    stage: [4, 5]
  },
  {
    name: 'Sukuna Shinmyoumaru',
    img: 'Zl2tN7W.png',
    series: [21, 22, 23, 25],
    stage: [5]
  },
  {
    name: 'Horikawa Raiko',
    img: 'SLLEccR.png',
    series: [21, 22, 25],
    stage: [6]
  },
  {
    name: 'Usami Sumireko',
    img: 'mc7ICW6.png',
    series: [23, 25],
    stage: [5]
  },
  {
    name: 'Seiran',
    img: '0ra00WG.png',
    series: [24],
    stage: [0]
  },
  {
    name: 'Ringo',
    img: 'xQOsFlZ.png',
    series: [24],
    stage: [1]
  },
  {
    name: 'Doremy Sweet',
    img: 'rGS7dyn.png',
    series: [24, 25],
    stage: [2, 6]
  },
  {
    name: 'Kishin Sagume',
    img: 'HLT338X.png',
    series: [24],
    stage: [3]
  },
  {
    name: 'Clownpiece',
    img: '9Jje7ZQ.jpg',
    series: [24],
    stage: [4]
  },
  {
    name: 'Junko',
    img: 'NsfLZjY.jpg',
    series: [24],
    stage: [5, 6]
  },
  {
    name: 'Hecatia Lapislazuli',
    img: 'EH3Ulol.png',
    series: [24],
    stage: [6]
  },
  {
    name: 'Eternity Larva',
    img: 'ql5KxJH.png',
    series: [26],
    stage: [0]
  },
  {
    name: 'Sakata Nemuno',
    img: 'gYFhJ3Y.png',
    series: [26],
    stage: [1]
  },
  {
    name: 'Komano Aunn',
    img: 'wWUStkF.png',
    series: [26],
    stage: [2]
  },
  {
    name: 'Yatadera Narumi',
    img: 'wrPVhAo.png',
    series: [26],
    stage: [3]
  },
  {
    name: 'Nishida Satono',
    img: '8w9gAy2.png',
    series: [26],
    stage: [4]
  },
  {
    name: 'Teireida Mai',
    img: 'DesAqAC.png',
    series: [26],
    stage: [4]
  },
  {
    name: 'Matara Okina',
    img: 'icWvMyo.png',
    series: [26],
    stage: [5, 6]
  },
  {
    name: 'Yorigami Shion',
    img: 'LenxXR4.png',
    series: [25],
    stage: [5]
  },
  {
    name: 'Yorigami Joon',
    img: '0aPaTm8.png',
    series: [25],
    stage: [5]
  },
  {
    name: 'Hieda no Akyuu',
    img: 'ogONuLZ.png',
    series: [0],
    stage: []
  },
  {
    name: 'Tokiko',
    img: 'Y4maOc8.png',
    series: [0],
    stage: []
  },
  {
    name: 'Reisen (Manga)',
    img: 'cWjCo2j.png',
    series: [0],
    stage: []
  },
  {
    name: 'Watatsuki no Toyohime',
    img: 'uEBxsEX.png',
    series: [0],
    stage: []
  },
  {
    name: 'Watatsuki no Yorihime',
    img: 'Txu2P7S.png',
    series: [0],
    stage: []
  },
  {
    name: 'Maribel Hearn',
    img: 'XUI9vPo.png',
    series: [0],
    stage: []
  },
  {
    name: 'Usami Renko',
    img: '1P5EXRt.png',
    series: [0],
    stage: []
  },
  {
    name: 'Ibaraki Kasen',
    img: 'dQHnPPe.png',
    series: [0, 23],
    stage: [4]
  },
  {
    name: 'Motoori Kosuzu',
    img: 'jEsJJo8.png',
    series: [0],
    stage: []
  },
  {
    name: 'Hakurei Reimu (PC-98)',
    img: 'IZsGAMS.png',
    series: [1, 2, 3, 4, 5],
    stage: [3],
    pc98: true
  },
  {
    name: 'Shingyoku (Female)',
    img: 'KuPiR2k.png',
    series: [1],
    stage: [0]
  },
  {
    name: 'Mima',
    img: 'odH03t2.png',
    series: [1, 2, 3, 5],
    stage: [2, 4, 5]
  },
  {
    name: 'Elis',
    img: 'ytnL1xd.png',
    series: [1],
    stage: [4]
  },
  {
    name: 'Kikuri',
    img: 'fX2Kqik.png',
    series: [1],
    stage: [4]
  },
  {
    name: 'Sariel',
    img: 'Wyc7YFw.png',
    series: [1],
    stage: [5]
  },
  {
    name: 'Konngara',
    img: 'dg9jLHv.png',
    series: [1],
    stage: [5]
  },
  {
    name: 'Rika',
    img: '02Xb4pU.png',
    series: [2],
    stage: [0, 6]
  },
  {
    name: 'Meira',
    img: 'p529JgT.png',
    series: [2],
    stage: [1]
  },
  {
    name: 'Kirisame Marisa (PC-98)',
    img: 'wxE7cBm.png',
    series: [2, 3, 4, 5],
    stage: [3],
    pc98: true
  },
  {
    name: 'Ellen',
    img: '3iNNL0c.png',
    series: [3],
    stage: []
  },
  {
    name: 'Kotohime',
    img: 'kRSGtpq.png',
    series: [3],
    stage: []
  },
  {
    name: 'Kana Anaberal',
    img: 'rBvKMk5.png',
    series: [3],
    stage: []
  },
  {
    name: 'Asakura Rikako',
    img: 'VIf5gUK.png',
    series: [3],
    stage: []
  },
  {
    name: 'Kitashirakawa Chiyuri',
    img: 'tZFBycy.png',
    series: [3],
    stage: [4]
  },
  {
    name: 'Okazaki Yumemi',
    img: 'c9rnG3n.png',
    series: [3],
    stage: [5]
  },
  {
    name: 'Ruukoto',
    img: 'dko67SJ.png',
    series: [3],
    stage: []
  },
  {
    name: 'Orange',
    img: 'm8wXE5U.png',
    series: [4],
    stage: [0]
  },
  {
    name: 'Kurumi',
    img: '0rvq1ph.png',
    series: [4],
    stage: [1]
  },
  {
    name: 'Elly',
    img: 'iIPftHn.png',
    series: [4],
    stage: [2]
  },
  {
    name: 'Yuuka (PC-98)',
    img: 'ivUSwxp.png',
    series: [4, 5],
    stage: [4, 5],
    pc98: true
  },
  {
    name: 'Mugetsu',
    img: 'bYA9E16.png',
    series: [4],
    stage: [6]
  },
  {
    name: 'Gengetsu',
    img: 'TIOTtV9.png',
    series: [4],
    stage: [6]
  },
  {
    name: 'Sara',
    img: '2QUbCrU.png',
    series: [5],
    stage: [0]
  },
  {
    name: 'Louise',
    img: 'nDM5aB6.png',
    series: [5],
    stage: [1, 3]
  },
  {
    name: 'Alice (PC-98)',
    img: 'KaBuRTW.png',
    series: [5],
    stage: [2, 6],
    pc98: true
  },
  {
    name: 'Yuki',
    img: 'FfcmDgp.png',
    series: [5],
    stage: [3]
  },
  {
    name: 'Mai',
    img: 'r6w7TX1.png',
    series: [5],
    stage: [3]
  },
  {
    name: 'Yumeko',
    img: 'PcPqkdO.png',
    series: [5],
    stage: [4]
  },
  {
    name: 'Shinki',
    img: 'gPE95S7.png',
    series: [5],
    stage: [5]
  },
  {
    name: 'Mimi-chan',
    img: 'zBl2zlv.png',
    series: [3],
    stage: [],
    notgirl: true
  },
  {
    name: 'Unzan',
    img: 'r5eWREh.png',
    series: [15, 17, 20, 23, 25],
    stage: [2],
    notgirl: true
  },
  {
    name: 'Genji',
    img: 'LoUqOuH.png',
    series: [2, 3, 4, 5],
    stage: [],
    notgirl: true
  },
  {
    name: 'Shingyoku (Male)',
    img: 'a5uwlgN.png',
    series: [1],
    stage: [0],
    notgirl: true
  },
  {
    name: 'YuugenMagan',
    img: 'IOW8GdU.png',
    series: [1],
    stage: [2],
    notgirl: true
  },
  {
    name: 'Evil Eye Sigma',
    img: 'rAFUMwE.png',
    series: [2],
    stage: [6],
    notgirl: true
  },
  {
    name: 'Great Catfish',
    img: 'BgRi9Oh.png',
    series: [16, 25],
    stage: [5],
    notgirl: true
  },
  {
    name: 'Morichika Rinnosuke',
    img: 'ITUhsGj.png',
    series: [0, 20],
    stage: [],
    notgirl: true
  },
  {
    name: 'Fortune Teller',
    img: 'BYot23O.png',
    series: [0],
    stage: [],
    notgirl: true
  },
  {
    name: 'Hisoutensoku',
    img: 'P4JZ2it.png',
    series: [16],
    stage: [],
    notgirl: true
  }
];
