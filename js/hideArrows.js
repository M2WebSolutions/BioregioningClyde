const menu = document.querySelector('.menu-icon');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

menu.addEventListener("click", () => {
    arrowLeft.classList.toggle('visible')
    arrowRight.classList.toggle('visible')
});
