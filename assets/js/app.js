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
