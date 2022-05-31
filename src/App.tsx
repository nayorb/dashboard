import React, { useEffect } from "react";
import { Autocomplete, Input } from "@mui/material";
import WeatherService from "./services/weather/weather.service";
import CityService from "./services/city.service";
import useLocalCity from "./hooks/useLocalCity";

function App() {
  const { localCity, setCity } = useLocalCity();

  useEffect(() => {
    if (!localCity) return;

    (async () => {
      const response = await WeatherService.getCurrentData(localCity);
      console.log("Response", response);
    })();
  }, [localCity]);

  return (
    <div>
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
}

export default App;
