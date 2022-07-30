'use strict';


let maskEl = document.querySelector('.mask');

window.addEventListener('load', () => {
  maskEl.classList.add('hide');
  setTimeout(() => {
    maskEl.remove();
  }, 500);
});



