'use strict';

import { ticketModal } from '../templates/modal-card';
import { ticketmasterAPI, renderBaseMarkup } from './render-base-markup';

const modalEl = document.querySelector('.for-modal-js');
const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', renderModalCard);

async function renderModalCard(e) {
  try {
    if (
      !e.target.parentElement.dataset.id &&
      !e.target.parentElement.parentElement.dataset.id
    ) {
      return;
    }

    const response = await ticketmasterAPI.fetchEventById(
      e.target.parentElement.dataset.id ||
        e.target.parentElement.parentElement.dataset.id
    );

    modalEl.classList.remove('visually-hidden');

    modalEl.classList.remove('visually-hidden');

    modalEl.innerHTML = ticketModal(response);

    document.body.classList.add('no-scroll');

    const closeModalBtn = document.querySelector('.modal__close-btn');
    const backdropEl = document.querySelector('.modal');
    const modalBtnMoreEvents = document.querySelector('.js-modal-btn-more');

    window.addEventListener('keydown', onEscBtnPush);
    backdropEl.addEventListener('click', onBackdropElClick);
    closeModalBtn.addEventListener('click', closeModalWindow);
    modalBtnMoreEvents.addEventListener('click', moreEventsModalBtn);

    //Search more events by button 'more from the author' - modal window

    function moreEventsModalBtn() {
      closeModalWindow();
      ticketmasterAPI.searchQuery = this.dataset.name;
      ticketmasterAPI.page = 0;
      renderBaseMarkup();
      ticketmasterAPI.searchQuery = '';
      return;
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
      modalEl.innerHTML = '';
      document.body.classList.remove('no-scroll');

      modalEl.classList.add('visually-hidden');

      window.removeEventListener('keydown', onEscBtnPush);
    }
  } catch (err) {
    console.log(err);
  }
}
