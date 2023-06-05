const toggleBtn = document.querySelector(".toggle");
const menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});