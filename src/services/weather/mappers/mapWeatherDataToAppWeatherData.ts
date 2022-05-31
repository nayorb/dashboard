import { WeatherData } from "./weather.service.types";
import { IAppWeatherData } from "../../../hooks/weather/useWeather.types";

const mapWeatherDataToAppWeatherData = (weatherData: WeatherData, location: string): IAppWeatherData => {
  return { location };
};

export default mapWeatherDataToAppWeatherData;
