'use strict'
const btn = document.querySelector('.switch')
const paginalBtns = document.querySelector('.paginal')

if(localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light')
  btn.checked = true;
  paginalBtns.classList.add('lightTheme')
}

btn.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'light'){
        localStorage.removeItem('theme');
        paginalBtns.classList.remove('lightTheme')
    } else {
        localStorage.setItem ('theme', 'light');
        btn.checked = true;
        paginalBtns.classList.add('lightTheme')
    }
    addLightClassToBody()
})

function addLightClassToBody() {
        if(localStorage.getItem('theme') === 'light') {
            document.querySelector('body').classList.add('light');
        } else {
            document.querySelector('body').classList.remove('light')
        }
    }

addLightClassToBody()

// document.getElementById('theme-toggle').addEventListener('click', (e) => {
//     const checked = e.target.checked;
//     document.body.setAttribute('theme', checked ? 'light' : 'dark');
//   });