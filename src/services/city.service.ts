import CITIES from "../data/cities.json";

const LOCAL_CITY_KEY = "app/local-city";

const CityService = {
  getLocalCity: async () => {
    return localStorage.getItem(LOCAL_CITY_KEY);
  },
  saveLocalCity: async (city: string | null) => {
    if (city === null) {
      localStorage.removeItem(LOCAL_CITY_KEY);
    } else {
      localStorage.setItem(LOCAL_CITY_KEY, city);
    }
  },
  getListOfCities: () => CITIES,
};

export default CityService;
