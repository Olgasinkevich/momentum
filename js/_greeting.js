import {Utils} from "./_utils";

export class Greeting extends Utils{
  constructor() {
    super();
    this.greetingPosition = this.getPosition('.greeting');
    this.namePosition = this.getPosition('.name');
    this.timeOfDay = null;
    this.init();
  }

  init() {
    this.localeStorage();
  }

  setTimeOfDay(value) {
    this.timeOfDay = value;
  };

  updateTimeOfDay(value) {
    this.setTimeOfDay(value);
    this.insertGreetingValue();
  }

  localeStorage() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('name')) {
        this.namePosition.value = localStorage.getItem('name');
      }
      this.namePosition.setAttribute('placeholder', '[Enter name]');
    });

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('name', this.namePosition.value);
    });
  }

  insertGreetingValue() {
    this.greetingPosition.textContent = `Good ${this.timeOfDay},`;
  }
}
