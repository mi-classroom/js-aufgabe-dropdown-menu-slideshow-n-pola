export default class Slide {
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