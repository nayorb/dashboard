import { useEffect, useState } from "react";
import WeatherService from "../../services/weather/weather.service";
import useLocalCity from "../useLocalCity";
import { IAppWeatherData } from "./useWeather.types";

const useWeather = () => {
  const { localCity, setCity } = useLocalCity();
  const [weatherData, setWeatherData] = useState<IAppWeatherData | null>(null);

  useEffect(() => {
    if (!localCity) return;

    (async () => {
      const data = await WeatherService.getCurrentData(localCity);
      setWeatherData(data);
    })();
  }, [localCity]);

  return {
    localCity,
    setCity,
    weatherData,
  };
};

export default useWeather;
