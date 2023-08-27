import React from "react";
import { WbSunny as WbSunnyIcon } from "@mui/icons-material";
import Card from "../Card";
import FooterLink from "../FooterLink";
import { Grid } from "@mui/material";
import WeatherTile, { WeatherStatus } from "../WeatherTile";

export interface WeatherReport {
  date: Date;
  status: WeatherStatus;
  humidity: number;
}

const next5Days = [
  new Date(),
  new Date(new Date().setDate(new Date().getDate() + 1)),
  new Date(new Date().setDate(new Date().getDate() + 2)),
  new Date(new Date().setDate(new Date().getDate() + 3)),
  new Date(new Date().setDate(new Date().getDate() + 4)),
];

const getRandomWeatherStatus = () => {
  const status = Object.values(WeatherStatus);
  const randomIndex = Math.floor(Math.random() * status.length);
  return status[randomIndex];
};

const getRandomHumidity = () => {
  return Math.floor(Math.random() * 100);
};

const weatherReport = next5Days.map((day) => ({
  date: day,
  status: getRandomWeatherStatus(),
  humidity: getRandomHumidity(),
}));

const WeatherCard = () => {
  return (
    <Card title={"WEATHER"} icon={<WbSunnyIcon />} footer={<FooterLink title={"View in details"} />}>
      <Grid container display="grid" gridTemplateColumns="repeat(5, 1fr)" height="100%">
        {weatherReport.map((report, index) => (
          <WeatherTile date={report.date} status={report.status} humidity={report.humidity} />
        ))}
      </Grid>
    </Card>
  );
};

export default WeatherCard;
