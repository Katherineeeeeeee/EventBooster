'use strict'

const closeModalBtn = document.querySelector('.button-close');


const modalTeamOverflowEl = document.querySelector('.modal-team-overflow');
const modalTeamlOverflowLink = document.querySelector('.footer__link');




const timeout = 800;

modalTeamlOverflowLink.addEventListener('click', openModalTeamOverflowEl);

function openModalTeamOverflowEl(el) {
  el.preventDefault();
  modalTeamOverflowEl.classList.remove('visually-hidden');
  modalTeamOverflowEl.classList.add('opened');
 document.body.classList.add('no-scroll');
 window.addEventListener('keydown', onEscBtnPush);
 modalTeamOverflowEl.addEventListener('click', onBackdropElClick);
 closeModalBtn.addEventListener('click', closeModalWindow);
}
function onBackdropElClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModalWindow();
}

function onEscBtnPush(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModalWindow();
}

function closeModalWindow() {
  modalTeamOverflowEl.classList.add('visually-hidden');
  modalTeamOverflowEl.classList.remove('opened');
  document.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscBtnPush);
}


