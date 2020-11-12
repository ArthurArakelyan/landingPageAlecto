const homeBullets = document.querySelectorAll('.home__bullet');

homeBullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        homeBullets.forEach(bullet => {
            if(bullet.classList.contains('active__bullet')) {
                bullet.classList.remove('active__bullet');
            }
        });

        bullet.classList.add('active__bullet');
    });
});

/***** burger menu *****/

const burgerMenu = document.querySelector('.header__burgerMenu');
const burgerMenuBtn = document.querySelector('.header__burgerMenu_btn');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('is-active');
    nav.classList.toggle('navIsOpen');
});