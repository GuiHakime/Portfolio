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


/* Animação */

//Função de otimização
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4); //Valor em relação ao topo
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)

        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll()
    }, 200));
}