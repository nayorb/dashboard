import React from "react";
import useWeather from "../../../hooks/weather/useWeather";
import { Grid, Typography } from "@mui/material";
import Card from "../../../components/common/card/Card";

export interface WeatherPageProps {}

const WeatherPage = ({}: WeatherPageProps) => {
  const { weatherData, localCity } = useWeather();
  return (
    <div className="p-8">
      <div className="text-6xl text-emerald-700">{localCity}</div>
      <div className="mt-4">{JSON.stringify(weatherData)}</div>
      <Card
        title="title"
        image="https://img.unitedclassifieds.sk/foto/MzYxeDI5MC9maWx0ZXJzOnF1YWxpdHkoODApL3JzZg==/EyEBFsPKO_fss?st=-nPI_queSib3Unw05L4yeFJ8QdJzHiLLZP4KLaEHxfk&ts=1664361238&e=0"
      >
        asdasd
      </Card>
    </div>
  );
};

export default WeatherPage;
