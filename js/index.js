import { Timer } from './_timer.js'
import { Greeting } from './_greeting.js'
import { Slider } from './_slider.js'
import {Weather} from './_weather'

const weather = new Weather();
const greeting = new Greeting();
const slider = new Slider();
const timer = new Timer({
  everyHourCallback: () => {
    greeting.updateTimeOfDay(timer.getTimeOfDay());
    slider.updateTimeOfDay(timer.getTimeOfDay());
    }
});

greeting.updateTimeOfDay(timer.getTimeOfDay());
slider.updateTimeOfDay(timer.getTimeOfDay());
