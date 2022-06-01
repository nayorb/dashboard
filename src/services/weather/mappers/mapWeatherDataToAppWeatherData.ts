import { WeatherData } from "../weather.service.types";
import { IAppWeatherData } from "../../../hooks/weather/useWeather.types";

const mapWeatherDataToAppWeatherData = (weatherData: WeatherData, location: string): IAppWeatherData => {
  const today = weatherData.daily[0];
  return {
    location,
    current: {
      temperature: weatherData.current.temp,
      humidity: weatherData.current.humidity,
      uvi: weatherData.current.uvi,
      weather: weatherData.current.weather[0],
    },
    today: {
      temperatures: {
        day: today.temp.day,
        evening: today.temp.eve,
        max: today.temp.max,
        min: today.temp.min,
        morning: today.temp.morn,
        night: today.temp.night,
      },
      date: today.dt * 1000,
      humidity: today.humidity,
      pop: today.pop,
      uvi: today.uvi,
      weather: today.weather[0],
      wind: {
        deg: today.wind_deg,
        gust: today.wind_gust,
        speed: today.wind_speed,
      },
    },
  };
};

export default mapWeatherDataToAppWeatherData;
