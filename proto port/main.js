// UI Elements
const nav = document.querySelector('.navbar-container');
const burger = document.querySelector('.burger');
const burgerLines = document.querySelectorAll('.line');

//Open Menu

burger.addEventListener('click', () => {
    nav.classList.toggle('show-nav')

    if (nav.classList.contains('show-nav')) {
        burgerLines.forEach(line => {
            line.style.backgroundColor = '#6E5AE9'
        })
    } else {
        burgerLines.forEach(line => {
            line.style.backgroundColor = 'white'
        })
    }
})