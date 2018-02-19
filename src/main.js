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
