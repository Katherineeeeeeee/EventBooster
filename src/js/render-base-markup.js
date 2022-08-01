'use strict';

import { ticketMarkup } from '../templates/gallery';
import { TicketmasterAPI } from './ticketmaster-api';
import { paginal } from './paginal';
import { Report } from 'notiflix/build/notiflix-report-aio';

const ticketmasterAPI = new TicketmasterAPI();

const galleryEl = document.querySelector('.gallery');
const searchQueryEl = document.querySelector('.js-serch-query');

let countryBefore = null;

renderBaseMarkup();

searchQueryEl.addEventListener('submit', onSerchQuerySubmit);

async function onSerchQuerySubmit(e) {
  e.preventDefault();

  if (
    ticketmasterAPI.searchQuery === e.currentTarget.elements.serchQuery.value &&
    countryBefore === ticketmasterAPI.searchCountry
  ) {
    return;
  }

  countryBefore = ticketmasterAPI.searchCountry;
  ticketmasterAPI.searchQuery = e.currentTarget.elements.serchQuery.value;
  ticketmasterAPI.page = 0;
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
