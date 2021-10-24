export class Greeting {
  constructor() {
    this.greetingPosition = this.getPosition('.greeting');
    this.namePosition = this.getPosition('.name');
    this.timeOfDay = null;
    this.array = ['night', 'morning', 'day', 'evening'];
    this.init();
  }

  init() {
    this.insertGreetingValue();
    this.localeStorage();
  }

  getPosition(selector) {
    return document.querySelector(selector);
  }

  setTimeOfDay(value) {
    this.timeOfDay = value;
  };

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
    this.greetingPosition.textContent = `Good ${this.array[this.timeOfDay]},`;
  }
}
