'use strict';
import sprite from '../images/sprite.svg';

export function ticketModal(el) {
  if (!el.priceRanges) {
    el.priceRanges = [{}];
    el.priceRanges[0].min = '';
    el.priceRanges[0].max = 'Sold out';
    el.priceRanges[0].currency = '';
  }

  if (!el._embedded.events) {
    el._embedded.events = { info: 'No information' };
  }

  return `<div class="modal">
  <div class="modal__window">
    <button class="modal__close-btn" type="button">
      <svg class="modal__close-icon" width="17" height="17">
        <use href="${sprite}#icon-close"></use>
      </svg>
    </button>
    <img class="modal__img" src="${el.images[0].url}" alt="logo" />
    <ul class="modal__list">
      <li class="modal__item-img">
        <img class="modal__item-poster" src="${el.images[2].url}" alt="logo" />
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Info</h2>
        <p class="modal__text">
        ${el._embedded.events.info}
        </p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">When</h2>
        <p class="modal__text">${el.dates.start.localDate}</p>
        <p class="modal__text">${el.dates.start.localTime} (${el.dates.timezone})</p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Where</h2>
        <p class="modal__text">${el._embedded.venues[0].city.name}</p>
        <p class="modal__text">${el._embedded.venues[0].country.name}</p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Who</h2>
        <p>${el.name}</p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Prices</h2>
        <p class="modal__text-wrapper">
          <svg class="modal__text-ticket" width="24" height="16">
            <use href="${sprite}#icon-ticket"></use>
          </svg>
          Standart ${el.priceRanges[0].min} - ${el.priceRanges[0].max} ${el.priceRanges[0].currency}
        </p>
        <a class="modal__buy-btn blob-btn" href="${el.url}" target="_blank">
          Buy tickets
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </a>
        <p class="modal__text-wrapper">
          <svg class="modal__text-ticket" width="24" height="16">
            <use href="${sprite}#icon-ticket"></use>
          </svg>
          Vip ${el.priceRanges[0].max} ${el.priceRanges[0].currency}
        </p>
        <a class="modal__buy-btn blob-btn" href="${el.url}" target="_blank">
          Buy tickets
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </a>
      </li>
    </ul>
    <button class="modal__author-btn more-btn js-modal-btn-more" href="#" type="button" data-name="${el.name}">
      More From This Author
      <span class="more-btn__wrap">
        <span class="more-btn__mores">
          <span class="more-btn__more"></span>
          <span class="more-btn__more"></span>
          <span class="more-btn__more"></span>
          <span class="more-btn__more"></span>
        </span>
      </span>
    </button>
  </div>
</div>
`;
}
