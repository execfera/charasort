const options = [
  { 
    "name": "Include by Series Entry",
    "tooltip": "",
    "sub": [
      { "Books and CDs": "" },
      { "The Highly Responsive to Prayers": "01 - Reiiden" },
      { "The Story of Eastern Wonderland": "02 - Fuumaroku" },
      { "Phantasmagoria of Dim.Dream": "03 - Yumejikuu" },
      { "Lotus Land Story": "04 - Gensoukyou" },
      { "Mystic Square": "05 - Kaikidan" },
      { "Embodiment of Scarlet Devil": "06 - Koumakan" },
      { "Perfect Cherry Blossom": "07 - Youyoumu" },
      { "Imperishable Night": "08 - Eiyashou" },
      { "Immaterial and Missing Power": "07.5 - Suimusou" },
      { "Phantasmagoria of Flower View": "09 - Kaeidzuka" },
      { "Shoot the Bullet": "09.5 - Bunkachou" },
      { "Mountain of Faith": "10 - Fuujinroku" },
      { "Scarlet Weather Rhapsody": "10.5 - Hisouten" },
      { "Subterranean Animism": "11 - Chireiden" },
      { "Undefined Fantastic Object": "12 - Seirensen" },
      { "Touhou Hisoutensoku": "12.3 - Hisoutensoku" },
      { "Double Spoiler": "12.5 - Bunkachou" },
      { "Great Fairy Wars": "12.8 - Daisensou" },
      { "Ten Desires": "13 - Shinreibyou" },
      { "Hopeless Masquerade": "13.5 - Shinkirou" },
      { "Double Dealing Character": "14 - Kishinjou" },
      { "Impossible Spell Card": "14.3 - Amanojaku" },
      { "Urban Legend in Limbo": "14.5 - Shinpiroku" },
      { "Legacy of Lunatic Kingdom": "15 - Kanjuden" },
      { "Hidden Star in Four Seasons": "16 - Tenkuushou" },
      { "Antinomy of Common Flowers": "15.5 - Hyouibana" },
    ]
  },
  "-----", 
  { 
    "name": "Include by Stage Appearances",
    "tooltip": "",
    "sub": [
      { "Stage 1": "" },
      { "Stage 2": "" },
      { "Stage 3": "" },
      { "Stage 4": "" },
      { "Penultimate Stage": "Stage 4 in 5-stage games, Stage 5 in normal games, and Stage 8 in 9-stage games." },
      { "Final Stage": "" },
      { "Extra Stage": "Phantasm is included." }
    ]
  },
  "-----",
  { "Include PC-98 Duplicates": "PC-98 characters with a Windows counterpart will be included." },
  { "Include Non-Girls": "Certain non-female characters will be included." },
  { "Show Character Images": "" },
];

window.onload = init;

function init() {
  const optionElem = document.querySelector('.options');
  const optionInserted = (size, tooltip, name) => `<div class="${size} option"><label title="${tooltip}"><input type="checkbox" checked> ${name}</label></div>`;

  options.forEach(opt => {
    if(opt === '-----') {
      optionElem.insertAdjacentHTML('beforeend', '<hr>');
    } else if (Object.keys(opt).length > 1) {
      optionElem.insertAdjacentHTML('beforeend', optionInserted('large', opt.tooltip, opt.name));
      opt.sub.forEach(subopt => {
        optionElem.insertAdjacentHTML('beforeend', optionInserted('small', Object.values(subopt)[0], Object.keys(subopt)[0]));
      });
    } else {
      optionElem.insertAdjacentHTML('beforeend', optionInserted('small', Object.values(opt)[0], Object.keys(opt)[0]));
    }
  });
}
