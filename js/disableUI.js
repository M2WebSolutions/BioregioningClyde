const buttons = document.querySelector('.glide__arrows');
const menu = document.querySelector('.menu-icon');
const bullets = document.querySelector('.glide__bullets');
const arrows = document.querySelector('.icons');

menu.addEventListener("click", () => {
    buttons.classList.toggle('visible')
    bullets.classList.toggle('visible')
    arrows.classList.toggle('visible')
});
