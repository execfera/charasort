function init() {
  const optList = document.querySelector('.options');
  const optInsert = (name, tooltip = '', checked = true, disabled = false) => {
    return `<div><label title="${tooltip}"><input type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${name}</label></div>`;
  };
  const optInsertLarge = (name, tooltip = '', checked = true) => {
    return `<div class="large option"><label title="${tooltip}"><input type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
  };

  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.tooltip, opt.checked));
      opt.sub.forEach(subopt => {
        optList.insertAdjacentHTML('beforeend', optInsert(subopt.name, subopt.tooltip, subopt.checked, opt.checked === false));
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.tooltip, opt.checked));
    }
  });
}

window.onload = init;
