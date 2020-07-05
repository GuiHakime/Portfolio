/**(MENU MOBILE), ACIONAMENTO DO MENU*/

let iconMenu = document.querySelector('.burger');
let menu = document.querySelector(".menu")

iconMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__move')
});

//Calendário 

const lang = navigator.language
let date = new Date()

let dayNumber = date.getDate()
let month = date.getMonth()
let dayName = date.toLocaleString(lang, {
    weekday: 'long'
})
let monthName = date.toLocaleString(lang, {
    month: 'long'
})
let year = date.getFullYear()

document.getElementById('mes').innerHTML = monthName
document.getElementById('dia').innerHTML = dayName
document.getElementById('numero-dia').innerHTML = dayNumber
document.getElementById('ano').innerHTML = year