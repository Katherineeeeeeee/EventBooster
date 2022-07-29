'use strict';

const scrollBtn = document.querySelector('.scroll');

window.onscroll = () => {
    if(window.scrollY > 290) {
        scrollBtn.classList.remove('scroll_hide');
    } else if(
        window.scrollY < 290) {
        scrollBtn.classList.add('scroll_hide');
    }
};
scrollBtn.onclick = () => {
    window.scrollTo(0, 0)
}