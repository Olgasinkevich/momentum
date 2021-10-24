export class Timer {
  constructor(callbacks) {
    this.date = new Date();
    this.currentDay = this.date.getDate();
    this.currentHour = this.date.getHours();
    this.timePosition = this.getPosition('time');
    this.datePosition =  this.getPosition ('date');
    this.init(callbacks);
  }

  init({everySecondCallback, everyHourCallback, everyDayCallback}) {
    this.insertTimeValue();
    this.insertDateValue();

    setInterval(() => {
      this.date = new Date();
      this.insertTimeValue();
      //everySecondCallback && everySecondCallback();

      if (this.currentHour !== this.date.getHours()) {
        this.currentHour = this.date.getHours();
        everyHourCallback && everyHourCallback();
      }

      if (this.currentDay !== this.date.getDate()) {
        this.currentDay = this.date.getDate();
        this.insertDateValue();
        //everyDayCallback && everyDayCallback();
      }

    }, 1000);
  }

  getPosition(selector) {
    return document.querySelector(selector);
  }

  getTimeOfDay() {
    return Math.floor(this.currentHour / 6);
  }

  insertTimeValue() {
    this.timePosition.textContent = this.date.toLocaleTimeString();
  }

  insertDateValue() {
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    this.datePosition.textContent = this.date.toLocaleDateString('en-En', options);
  }
}

