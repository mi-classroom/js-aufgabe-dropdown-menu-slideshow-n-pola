// eslint-disable-next-line import/extensions
import Slide from './slide-show.js';

const header = document.querySelector('.main-header');
const hamburgerButton = header.querySelector('.hamburger-button');
const menuList = header.querySelector('.main-header__menu-bar-nav');

function toogleMenu() {
  hamburgerButton.classList.toggle('hamburger-button--is-open');
  menuList.classList.toggle('main-header__menu-bar-nav--is-open');
}

hamburgerButton.addEventListener('click', toogleMenu);

const slideShow = document.querySelectorAll('.slide-show');
const slides = [];

slideShow.forEach((elem, i) => {
  slides[i] = new Slide(elem);
  elem
    .querySelector('.slide-show__nav-previous')
    .addEventListener('click', () => {
      slides[i].previous();
    });
  elem.querySelector('.slide-show__nav-next').addEventListener('click', () => {
    slides[i].next();
  });
});
