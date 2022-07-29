'use strict';

import { ticketModal } from '../templates/modal-card';
import { ticketMarkup } from '../templates/gallery';
import { TicketmasterAPI } from './ticketmaster-api';
import { paginal } from './paginal';
// import { Report } from 'notiflix/build/notiflix-report-aio';

const ticketmasterAPI = new TicketmasterAPI();

const modalEl = document.querySelector('.for-modal-js');
const galleryEl = document.querySelector('.gallery');
const searchQueryEl = document.querySelector('.js-serch-query');

renderBaseMarkup();

searchQueryEl.addEventListener('submit', onSerchQuerySubmit);

async function onSerchQuerySubmit(e) {
  e.preventDefault();
  ticketmasterAPI.searchQuery = e.currentTarget.elements.serchQuery.value;
  renderBaseMarkup();
}

async function renderBaseMarkup() {
  try {
    const response = await ticketmasterAPI.fetchTickets();
    const baseMarkup = response._embedded.events
      .map(el => {
        return ticketMarkup(el);
      })
      .join('');
    galleryEl.innerHTML = baseMarkup;

    //* Modal window
    galleryEl.addEventListener('click', openModalByClick);

    function openModalByClick(e) {
      let modalCardMarkup = null;
      response._embedded.events.forEach(el => {
        if (e.target.parentElement.dataset.id === el.id) {
          return (modalCardMarkup = ticketModal(el));
        }
      });
      modalEl.innerHTML = modalCardMarkup;
      document.body.classList.add('no-scroll');

      const closeModalBtn = document.querySelector('.modal__close-btn');
      const backdropEl = document.querySelector('.modal');
      const modalBtnMoreEvents = document.querySelector('.js-modal-btn-more');

      window.addEventListener('keydown', onEscBtnPush);
      backdropEl.addEventListener('click', onBackdropElClick);
      closeModalBtn.addEventListener('click', closeModalWindow);
      modalBtnMoreEvents.addEventListener('click', moreEventsModalBtn);

      //Search more events by author - modal window
      function moreEventsModalBtn(e) {
        closeModalWindow();
        ticketmasterAPI.searchQuery = this.dataset.name;
        renderBaseMarkup();
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
        window.removeEventListener('keydown', onEscBtnPush);
      }
    }

    //? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    paginal(
      response.page.totalElements,
      ticketmasterAPI.size,
      ticketmasterAPI.page
    );
  } catch (err) {
    Report.failure(
      'Error',
      'Sorry, no matches were found. Try a new search or use our suggestions.',
      'Okay'
    );
    console.log(err);
  }
}

export { ticketmasterAPI, renderBaseMarkup };
