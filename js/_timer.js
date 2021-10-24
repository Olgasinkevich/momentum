export class Timer {
  constructor() {
    this.date = new Date();
    this.currentDay = this.date.getDate();
    this.timePosition = this.getTimePosition();
    this.datePosition =  this.getDatePosition ();
    this.init();
  }

  init() {
    this.insertTimeValue();
    this.insertDateValue();

    setInterval(() => {
      this.date = new Date();
      this.insertTimeValue();
      if (this.currentDay !== this.date.getDate()) {
        this.currentDay = this.date.getDate();
        this.insertDateValue();
      }
    }, 1000);
  }

  getTimePosition() {
    return document.querySelector('time');
  }

   getDatePosition (){
    return document.querySelector('date');
  }

  insertTimeValue() {
    this.timePosition.textContent = this.date.toLocaleTimeString();
  }

  insertDateValue() {
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    this.datePosition.textContent = this.date.toLocaleDateString('en-En', options);
  }
}

