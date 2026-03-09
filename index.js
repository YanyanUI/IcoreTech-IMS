const menu = document.getElementById("menu");
const verticalNav = document.querySelector('.navBar');

menu.addEventListener('click', () => {
    verticalNav.classList.toggle('show');
});