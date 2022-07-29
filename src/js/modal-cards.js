// 'use strict';

// import { ticketModal } from '../templates/modal-card';
// import { TicketmasterAPI } from './ticketmaster-api';

// const ticketmasterAPI = new TicketmasterAPI();

// const modalEl = document.querySelector('.for-modal-js');
// const galleryEl = document.querySelector('.gallery');

// renderModalCard();

// async function renderModalCard(e) {
//   try {
//     const response = await ticketmasterAPI.fetchTickets();

//     let inputs = galleryEl.getElementsByTagName('li');

//     for (let i = 0; i < inputs.length; i += 1) {
//       inputs[i].addEventListener('click', onTargetElementClick);
//     }

//     function onTargetElementClick() {
//       let modalCardMarkup = null;
//       response._embedded.events.forEach(el => {
//         if (this.dataset.id === el.id) {
//           return (modalCardMarkup = ticketModal(el));
//         }
//       });
//       modalEl.innerHTML = modalCardMarkup;
//       document.body.classList.add('no-scroll');

//       const closeModalBtn = document.querySelector('.modal__close-btn');
//       const backdropEl = document.querySelector('.modal');

//       window.addEventListener('keydown', onEscBtnPush);
//       backdropEl.addEventListener('click', onBackdropElClick);
//       closeModalBtn.addEventListener('click', closeModalWindow);

//       function onBackdropElClick(e) {
//         if (e.target !== e.currentTarget) {
//           return;
//         }
//         closeModalWindow();
//       }

//       function onEscBtnPush(e) {
//         if (e.code !== 'Escape') {
//           return;
//         }
//         closeModalWindow();
//       }

//       function closeModalWindow() {
//         modalEl.innerHTML = '';
//         document.body.classList.remove('no-scroll');
//         window.removeEventListener('keydown', onEscBtnPush);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
