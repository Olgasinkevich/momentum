import {Utils} from "./_utils";

export class Timer extends Utils {
  constructor(callbacks) {
    super();
    this.date = new Date();
    this.currentDay = this.date.getDate();
    this.currentHour = this.date.getHours();
    this.timePosition = this.getPosition('time');
    this.datePosition = this.getPosition('date');
    this.partsDayArray = ['night', 'morning', 'day', 'evening'];
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

  getTimeOfDay() {
    return this.partsDayArray[Math.floor(this.currentHour / 6)];
  }

  insertTimeValue() {
    this.timePosition.textContent = this.date.toLocaleTimeString();
  }

  insertDateValue() {
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    this.datePosition.textContent = this.date.toLocaleDateString('en-En', options);
  }
}

