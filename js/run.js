const burger = document.querySelector(".burger i");
const navlink = document.querySelector("nav ul");
console.log(navlink);

function showHamburger() {
  burger.classList.toggle("fa-times");
  navlink.classList.toggle("nav-active");
}