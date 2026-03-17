const addSupplier = document.getElementById("addSupplier-btn");
const closeBtn = document.getElementById("close-btn");
const popUp = document.getElementById("PopUp-form");
const overlay = document.getElementById("overlay");

addSupplier.addEventListener('click', () => {
    popUp.style.display = "block";
    popUp.style.position = "absolute";
    overlay.style.display = "block";
});
closeBtn.addEventListener('click', () => {
    popUp.style.display = "none";
    overlay.style.display = "none";
})

overlay.addEventListener('click', () => {
  popUp.style.display = "none";
  overlay.style.display = "none";
});

//Menu function

const menu = document.getElementById("menu");
const verticalNav = document.querySelector('.navBar');

menu.addEventListener('click', () => {
    verticalNav.classList.toggle('show');
});