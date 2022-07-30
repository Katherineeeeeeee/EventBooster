'use strict';

export function ticketMarkup(el) {
  let nameArtist = el.name;
  if (el.name.length > 20) {
    nameArtist = el.name.slice(0, 20) + '...';
  }

  return `<li class= "gallery__item">

  <div class="js-target" data-id="${el.id}">
    <img
      class="gallery__img"
        src="${el.images[1].url}"
        alt="фото веб-сайта"
      />
    <div class="gallery__wrap">
      <h2 class="gallery__title"> ${nameArtist}</h2>
      <p class="gallery__txt">${el.dates.start.localDate}</p>
    </div>
  </div>

<a class="gallery__link" href="https://www.google.com/maps/@${el._embedded.venues[0].location.latitude},${el._embedded.venues[0].location.longitude},14z " target="_blank"><span class="gallery__link--text">
${el._embedded.venues[0].name}</span></a>
</li>`;
}
