const buttons = document.querySelector('.glide__arrows');
const menu = document.querySelector('.menu-icon');
const bullets = document.querySelector('.glide__bullets');

menu.addEventListener("click", () => {
    buttons.classList.toggle('visible')
    bullets.classList.toggle('visible')
});
