/**(MENU MOBILE), ACIONAMENTO DO MENU*/

let iconMenu = document.querySelector('.burger');
let menu = document.querySelector(".menu")

iconMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__move')
});