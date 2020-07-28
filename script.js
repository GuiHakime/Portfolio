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

/* Animação Menu */

const menuItems = document.querySelectorAll('.logo2 a')

//Pra cada item
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const to = getScroolTopByHref(event.target) + 200

    scrollToPosition(to)
}

function scrollToPosition(to) {
    //  window.scroll({
    //    top: to,
    //      behavior: "smooth",
    //   })
    smoothScrollTo(0, to, 470)

}

function getScroolTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop

}

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};

/* FUNÇÂO POPUP*/

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'close') {
                modal.classList.remove('mostrar')
            }
        })
    }
}

const preview = document.querySelector('.pr1')
const Preview2 = document.querySelector('.pr2')
const Preview3 = document.querySelector('.pr3')
preview.addEventListener('click', () => {
    iniciaModal('modal-promocao')
})
Preview2.addEventListener('click', () => {
    iniciaModal('modal-promocao2')
})
Preview3.addEventListener('click', () => {
    iniciaModal('modal-promocao3')
})


//Função de troca de conteúdo principal

function showcards(cardID) {
    const card = document.getElementById(cardID);
    if (card) {
        card.classList.add('mostrar')
        card.addEventListener('click', (e) => {
            if (e.target.id == cardID || e.target.className == 'close-card') {
                card.classList.remove('mostrar')
                firstcard.classList.add('txt')
            }
        })
    }
}

const btncard = document.querySelector('#skills')
const firstcard = document.querySelector('.container-card')
btncard.addEventListener('click', () => {
    showcards('cards-js')
    firstcard.classList.remove('txt')

})