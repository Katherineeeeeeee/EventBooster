'use strick';
import { haventPlace } from '../templates/gallery';
let list = document.querySelector('.gallery');

list.addEventListener('click', isAllowed);
function isAllowed(e) {
  if (e.target.textContent == haventPlace) {
    e.preventDefault();
  }
  return;
}
