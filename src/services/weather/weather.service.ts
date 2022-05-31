import { WeatherData } from "./mappers/weather.service.types";
import mapWeatherDataToAppWeatherData from "./mappers/mapWeatherDataToAppWeatherData";
import { IAppWeatherData } from "../../hooks/weather/useWeather.types";

export const APP_ID = "710039770547ff6ef07b6748e57792f9";
const API_URL = "https://api.openweathermap.org/data/2.5/";

const getPlaceOverviewUrl = (query: string) => {
  return `${API_URL}weather?q=${query}&appid=${APP_ID}&units=metric`;
};

const getPlaceDetailsUrl = ({ lat = "48.15", lon = "17.11", exclude = "minutely" } = {}) => {
  return `${API_URL}onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${APP_ID}&units=metric`;
};

const WeatherService = {
  getCurrentData: async (location: string): Promise<IAppWeatherData | never> => {
    const response = await fetch(getPlaceOverviewUrl(location));
    const data = await response.json();
    if (data.cod === 200) {
      console.log(data);

      const oneCallResponse = await fetch(getPlaceDetailsUrl(data.coord));
      const oneCallData: WeatherData = await oneCallResponse.json();
      if (oneCallData) {
        console.log("oneCallData", oneCallData);
      }
      return mapWeatherDataToAppWeatherData(oneCallData, data.name);
    } else {
      throw new Error("WeatherService.getCurrentData | data.cod equal to ", data.cod);
    }
  },
};

export default WeatherService;
