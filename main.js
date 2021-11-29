// UI Elements
const body = document.querySelector('body');
const html = document.querySelector('html');
const nav = document.querySelector('.navbar-container');
const burger = document.querySelector('.burger');
const burgerLines = document.querySelectorAll('.line');

//Open Menu

burger.addEventListener('click', () => {
    nav.classList.toggle('show-nav')

    if (nav.classList.contains('show-nav')) {
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
        burgerLines.forEach(line => {
            line.style.backgroundColor = '#6E5AE9'
        })
    } else {
        burgerLines.forEach(line => {
            line.style.backgroundColor = 'white'
            body.style.overflow = 'auto';
            html.style.overflow = 'auto';
        })
    }
})