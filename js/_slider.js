import {Utils} from "./_utils";

export class Slider extends Utils{
  constructor() {
    super();
    this.timeOfDay = null;
    this.sliderPosition = this.getPosition('body');
    this.min = 1;
    this.max = 20;
    this.bgNum = this.getRandomNum(1, 20);
    this.init();
  }

  init() {
    this.getPosition('.slide-prev').addEventListener('click', () => {
      this.bgNum = this.bgNum === this.min ? this.max : this.bgNum - 1;
      this.setBg();
    })
    this.getPosition('.slide-next').addEventListener('click', () => {
      this.bgNum = this.bgNum === this.max ? this.min : this.bgNum + 1;
      this.setBg();
    })
  }

  setTimeOfDay(value) {
    this.timeOfDay = value;
  };

  updateTimeOfDay(value) {
    this.setTimeOfDay(value);
    this.setBg();
  }

  createImageUrl(time, number) {
    return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg`
  }

  setBg () {
    const url = this.createImageUrl(this.timeOfDay, this.bgNum.toString().padStart(2, '0'));
    this.sliderPosition.style.backgroundImage = `url(${url})`
  }
}
