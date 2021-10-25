import {Utils} from "./_utils";

export class Weather extends Utils {
  constructor() {
    super();
    this.weatherIconPosition = this.getPosition('.weather-icon');
    this.temperaturePosition = this.getPosition('.temperature');
    this.weatherDescriptionPosition = this.getPosition('.weather-description');
    this.windPosition = this.getPosition('.wind');
    this.humidityPosition = this.getPosition('.humidity');
    this.cityPosition = this.getPosition('.city');
    this.city = 'Vilnius';
    this.init();
  }

  init() {
    this.localeStorage();
    this.input();
  }

  createUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=6dbf9017d0d1b1f5da6659651d7871ec&units=metric`
  }

  async getWeather() {
    const url = this.createUrl(this.city);
    const res = await fetch(url);
    const data = await res.json();
    this.showWeather(data);
  }

  showWeather(data) {
    this.weatherIconPosition.className = 'weather-icon owf';
    this.weatherIconPosition.classList.add(`owf-${data.weather[0].id}`);
    this.temperaturePosition.textContent = `${parseInt(data.main.temp)}°C`;
    this.weatherDescriptionPosition.textContent = data.weather[0].description;
    this.windPosition.textContent = `Wind speed: ${data.wind.speed} m/s`;
    this.humidityPosition.textContent = `Humidity: ${data.main.humidity}%`;
  }

  input() {
    this.cityPosition.addEventListener('change', () => {
      this.city = this.cityPosition.value;
      this.getWeather();
    })
  }

  localeStorage() {
    window.addEventListener('load', () => {
      const city = localStorage.getItem('city');
      if (city) {
        this.city = city;
        this.cityPosition.value = city;
      } else {
        this.cityPosition.value = this.city;
      }
      this.cityPosition.setAttribute('placeholder', '[Enter city]');
      this.getWeather();
    });

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('city', this.cityPosition.value);
    });
  }
}
