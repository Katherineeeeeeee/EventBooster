'use strict';
export const haventPlace = 'place will be soon';
export function ticketMarkup(el) {
  let nameArtist = el.name;
  if (el.name.length > 20) {
    nameArtist = el.name.slice(0, 20) + '...';
  }

  if (!el._embedded) {
    el._embedded = {};
    el._embedded.venues = [{}];
    el._embedded.venues[0].name = haventPlace;
  }

  if (!el._embedded.venues[0].name) {
    el._embedded.venues[0].name = haventPlace;
  }

  if (!el._embedded.venues[0].location) {
    el._embedded.venues[0].location = [{}];
    el._embedded.venues[0].location.latitude = '';
    el._embedded.venues[0].location.longitude = '';
  }


  return `<li class= "gallery__item">

  <div class="js-target flip-scale-down-diag-2" data-id="${el.id}">
    <img
      class="gallery__img"
        src="${el.images[1].url}"
        alt="фото веб-сайта"
      />
    <div class="gallery__wrap">
      <h2 class="gallery__title"> ${nameArtist}</h2>
      <div>
      <p class="gallery__txt">${el.dates.start.localDate}</p>
      </div>
    </div>
  </div>

<a class="gallery__link" href="https://www.google.com/maps/@${el._embedded.venues[0].location.latitude},${el._embedded.venues[0].location.longitude},14z " target="_blank"><span class="gallery__link--text">${el._embedded.venues[0].name}</span></a>
</li>`;
}
