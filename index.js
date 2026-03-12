const menu = document.getElementById("menu");
const verticalNav = document.querySelector('.navBar');

menu.addEventListener('click', () => {
    verticalNav.classList.toggle('show');
});

const stock = document.getElementById("stockBtn");

stock.addEventListener('click', () => {
    document.location.href = "./stockPage/stock.html";
})

const chart = document.getElementById("chartBtn");

chart.addEventListener('click', () => {
    document.location.href = "./chartPage/chart.html";
})

const supplier = document.getElementById('supplierBtn');

supplier.addEventListener('click', () => {
    document.location.href = "./supplierPage/supplier.html";
})

const item = document.getElementById('itemBtn');

item.addEventListener('click', () => {
    document.location.href = "./itemPage/item.html";
})