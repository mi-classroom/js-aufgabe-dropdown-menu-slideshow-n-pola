const header = document.querySelector('.main-header');
const hamburgerButton = header.querySelector('.hamburger-button');
const menuList = header.querySelector('.main-header__menu-bar-nav');

function toogleMenu() {
  hamburgerButton.classList.toggle('hamburger-button--is-open');
  menuList.classList.toggle('main-header__menu-bar-nav--is-open');
}

hamburgerButton.addEventListener('click', toogleMenu);

class Slide {
  constructor(obj) {
    this.obj = obj;
    this.selectedObj = 0;
    this.images = obj.querySelectorAll('.slide-show__slide');
    this.images[0].classList.add('slide-show__slide--visible');
  }

  previous() {
    if (!(this.selectedObj - 1 < 0)) {
      // eslint-disable-next-line no-plusplus
      this.selectedObj--;
      this.showImage(this.selectedObj);
    }
  }

  next() {
    if (this.selectedObj + 1 < this.images.length) {
      // eslint-disable-next-line no-plusplus
      this.selectedObj++;
      this.showImage(this.selectedObj);
    }
  }

  showImage(index) {
    this.images.forEach((element) => {
      element.classList.remove('slide-show__slide--visible');
    });
    this.images[index].classList.add('slide-show__slide--visible');
  }
}

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
