let header = document.querySelector(".main-header");
let hamburgerButton = header.querySelector(".hamburger-button");
let menuList = header.querySelector(".main-header__menu-bar-nav");

function toogleMenu() {
  hamburgerButton.classList.toggle("hamburger-button--is-open");
  menuList.classList.toggle("main-header__menu-bar-nav--is-open");
}

hamburgerButton.addEventListener("click", toogleMenu);
