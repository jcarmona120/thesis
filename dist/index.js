const menuButton = document.querySelector('.header_nav--icon')
const menu = document.querySelector('.header__nav')


menuButton.addEventListener('click', () => {
    console.log('menu click')
    menu.classList.toggle('hide')
})