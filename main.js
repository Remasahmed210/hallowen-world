const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close')



navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu')
})
navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu')
})

const navLink = document.querySelectorAll('.nav__link')

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        navMenu.classList.remove('show-menu')
    })
}

// function linkAction() {
//     navMenu.classList.remove('show-menu')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction));


let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});


function scrollHeader() {
    const header = document.querySelector('.header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: 'true',
});



const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up')
    
    if (this.scrollY >= 460) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    reset: true
})

sr.reveal('.home-swiper, .new-swiper, .newsletter__container')
sr.reveal('.category__data, .trick__content, .footer__content', {interval: 100})
sr.reveal('.about__data, .discount__img', {origin: 'left'})
sr.reveal('.about__img, .discount__data', {origin: 'right'})