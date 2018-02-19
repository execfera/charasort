function init() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip = '', checked = true, disabled = false) => {
    return `<div><label title="${tooltip}"><input id="cb-${id}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${name}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip = '', checked = true) => {
    return `<div class="large option"><label title="${tooltip}"><input id="cbgroup-${id}" type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
  };

  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.key, opt.tooltip, opt.checked));
      opt.sub.forEach((subopt, subindex) => {
        optList.insertAdjacentHTML('beforeend', optInsert(subopt.name, `${opt.key}-${subindex}`, subopt.tooltip, subopt.checked, opt.checked === false));
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');

      const groupbox = document.querySelector(`#cbgroup-${opt.key}`);

      groupbox.parentElement.addEventListener('click', () => {
        let i = 0;
        while (i < opt.sub.length) {
          document.getElementById(`cb-${opt.key}-${i}`).disabled = !groupbox.checked;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${i}`).checked = true; }
          i++;
        }
      });
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.key, opt.tooltip, opt.checked));
    }
  });
}

window.onload = init;
