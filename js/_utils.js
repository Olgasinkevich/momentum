export class Utils {
  getPosition(selector) {
    return document.querySelector(selector);
  }

  getRandomNum(min , max ) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
