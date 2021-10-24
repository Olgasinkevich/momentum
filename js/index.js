import { Timer } from './_timer.js'
import { Greeting } from './_greeting.js'

const greeting = new Greeting();
const timer = new Timer({
  everyHourCallback: () => {
    greeting.setTimeOfDay(timer.getTimeOfDay());
    greeting.insertGreetingValue();
    }
});

greeting.setTimeOfDay(timer.getTimeOfDay());
