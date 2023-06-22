const navToggleDiv = document.getElementById("nav-toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

nav_toggle.onclick = () => {
    navToggleI.classList.toggle("fa-bars");
    navToggleI.classList.toggle("fa-xmark");
    navListUl.classList.toggle("show-menu");
};