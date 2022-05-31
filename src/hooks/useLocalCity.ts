import { useEffect, useState } from "react";
import CityService from "../services/city.service";

const useLocalCity = () => {
  const [localCity, setLocalCity] = useState<null | string>(null);

  useEffect(() => {
    // setup initial local city
    (async () => {
      const city = await CityService.getLocalCity();
      setLocalCity(city || null);
    })();
  }, []);

  const changeLocalCity = (city: string | null) => {
    // save local city
    (async () => {
      await CityService.saveLocalCity(city);
      setLocalCity(city);
    })();
  };

  return { setCity: changeLocalCity, localCity: localCity };
};

export default useLocalCity;
