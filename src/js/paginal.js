'use strict';
import { ticketmasterAPI, renderBaseMarkup } from './render-base-markup';

const list = document.querySelector('.paginal');

let currentPageForCheck = 1;

function paginal(totalObjects, numberImgPerPage, currentPage) {
  const sum = Math.ceil(totalObjects / numberImgPerPage);
  if (sum === 1) {
    list.innerHTML = '';
    return;
  }
  let btnsArr = [];
  currentPageForCheck = currentPage + 1;

  for (let i = 1; i <= sum; i += 1) {
    if (i === currentPageForCheck) {
      btnsArr.push(`<li class="act">${i}</li>`);
      continue;
    }
    btnsArr.push(`<li>${i}</li>`);
  }

  let len = btnsArr.length;

  if (sum <= 5 && sum > 0) {
    list.innerHTML = btnsArr.join('');
  } else if (sum > 0) {

    if (currentPage >= len - 3) {
      list.innerHTML =
        btnsArr[0] +
        '...' +
        btnsArr[currentPage - 1] +
        btnsArr.slice(currentPage, currentPage + 3).join('');
    } else if (currentPage > 0 && currentPage < 2) {
      list.innerHTML =
        btnsArr[currentPage - 1] +
        btnsArr.slice(currentPage, currentPage + 3).join('') +
        '...' +
        btnsArr[len - 1];
    } else if (currentPage >= 2) {

      list.innerHTML =
        btnsArr[0] +
        '...' +
        btnsArr[currentPage - 1] +
        btnsArr.slice(currentPage, currentPage + 3).join('') +
        '...' +
        btnsArr[len - 1];
    } else {
      list.innerHTML =
        btnsArr.slice(currentPage, currentPage + 3).join('') +
        '...' +
        btnsArr[len - 1];
    }
  } else {
    list.innerHTML =
      btnsArr.slice(currentPage, currentPage + 3).join('') +
      '...' +
      btnsArr[len - 1];
  }

  list.addEventListener('click', paginClick);
}

function paginClick(e) {
  if (
    e.target.nodeName !== 'LI' ||
    e.target.textContent == currentPageForCheck
  ) {
    return;
  }
  ticketmasterAPI.page = e.target.textContent - 1;

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1000);
  renderBaseMarkup();
}

export { paginal };
