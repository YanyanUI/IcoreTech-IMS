const categoryBtn = document.getElementById("filter-btn-categories");
const categoryList = document.getElementById("list-categories");

categoryBtn.addEventListener('click', () => {
    categoryList.classList.toggle("show");
});