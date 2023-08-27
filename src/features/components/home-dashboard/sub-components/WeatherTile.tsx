import React from "react";
import { Grid } from "@mui/material";
import { WbSunny, WbCloudy, Thunderstorm } from "@mui/icons-material";
import { HomeDashboardConstants } from "../home-dashboard-constants";

export enum WeatherStatus {
  SUNNY = "SUNNY",
  CLOUDY = "CLOUDY",
  RAINY = "RAINY",
}

export interface WeatherTileProps {
  date: Date;
  status: WeatherStatus;
  humidity: number;
}

const getIcon = (status: WeatherStatus) => {
  switch (status) {
    case WeatherStatus.SUNNY:
      return WbSunny;
    case WeatherStatus.CLOUDY:
      return WbCloudy;
    case WeatherStatus.RAINY:
      return Thunderstorm;
  }
};

const getDisplayHumidityValue = (percent: number) => {
  return roundToOneDecimal(percent / 100);
};

const roundToOneDecimal = (number: number) => {
  return Math.round(number * 10) / 10;
};

const getWeekdayFromDate = (date: Date) => {
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  return weekday.toUpperCase();
};

const WeatherTile = ({ date, status, humidity }: WeatherTileProps) => {
  const StatusIcon = getIcon(status);
  const isToday = date.toDateString() === new Date().toDateString();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={1}
      justifyContent="space-between"
      height="100%"
      style={{
        transform: isToday ? "scale(1.1)" : "scale(1)",
      }}
    >
      <Grid item color={HomeDashboardConstants.colors.blue.main}>
        {getWeekdayFromDate(date)}
      </Grid>
      <Grid item color={HomeDashboardConstants.colors.blue.main}>
        {<StatusIcon fontSize="large" />}
      </Grid>
      <Grid item fontSize={14} color={HomeDashboardConstants.colors.gray.light}>
        {isToday ? "Hum: " : ""}
        {getDisplayHumidityValue(humidity)} mm
      </Grid>
    </Grid>
  );
};

export default WeatherTile;
