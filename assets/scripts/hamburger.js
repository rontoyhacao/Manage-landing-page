const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('open');
    if(navContainer.classList.contains('open')) {
        scrollTop();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.removeProperty('overflow');

    }
});

function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; // for chrome
}