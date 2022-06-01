import { Autocomplete, Input } from "@mui/material";
import CityService from "../../../services/city.service";
import React from "react";
import useWeather from "../../../hooks/weather/useWeather";

const MainMenu = () => {
  const { localCity, setCity, weatherData } = useWeather();

  return (
    <div>
      {weatherData && <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather.icon}@2x.png`} />}
      <Autocomplete
        renderInput={({ InputProps, inputProps }) => (
          <Input
            {...InputProps}
            inputProps={inputProps}
            sx={{
              width: 512,
            }}
          />
        )}
        options={CityService.getListOfCities()}
        value={localCity}
        onChange={(_, option) => setCity(option || null)}
      />
    </div>
  );
};

export default MainMenu;
