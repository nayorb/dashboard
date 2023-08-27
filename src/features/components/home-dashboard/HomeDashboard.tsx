import { Box, BoxProps, Grid, GridProps } from "@mui/material";
import TitleCard from "./sub-components/TitleCard";
import Card from "./sub-components/Card";
import {
  WbSunny as WbSunnyIcon,
  Wifi as WifiIcon,
  Lightbulb as LightbulbIcon,
  Alarm as AlarmIcon,
  Power as PowerIcon,
  Thermostat as ThermostatIcon,
} from "@mui/icons-material";
import FooterLink from "./sub-components/FooterLink";
import { HTMLAttributes } from "react";
import WifiCard from "./sub-components/cards/WifiCard";
import AlarmCard from "./sub-components/cards/AlarmCard";
import LightCard from "./sub-components/cards/LightCard";
import PowerCard from "./sub-components/cards/PowerCard";
import TemperatureCard from "./sub-components/cards/TemperatureCard";
import WeatherCard from "./sub-components/cards/WeatherCard";

const CardContainer = ({ children, ...props }: BoxProps) => {
  return (
    // <Grid item xs={12} md={md ?? 12} container pr={pr ?? 0} {...props} maxHeight={CARD_HEIGHT} height={CARD_HEIGHT}>
    <Box {...props}>{children}</Box>
    // </Grid>
  );
};

const CARD_HEIGHT = 256;

enum GridAreas {
  WEATHER = "weather",
  TEMPERATURE = "temperature",
  WIFI = "wifi",
  ALARM = "alarm",
  LIGHT = "light",
  POWER = "power",
}

const HomeDashboard = () => {
  return (
    <Box borderRadius={2} overflow="hidden" width="900px">
      <TitleCard />
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `
          "weather weather weather temperature"
          "weather weather weather temperature"
          "wifi light light light"
          "alarm light light light"
          "power power power power"
          "power power power power"
        `,
          gridAutoRows: CARD_HEIGHT / 2,
          width: "100%",
          gap: 4,
          marginTop: 4,
        }}
      >
        <CardContainer gridArea={GridAreas.WEATHER}>
          <WeatherCard />
        </CardContainer>
        <CardContainer gridArea={GridAreas.TEMPERATURE}>
          <TemperatureCard />
        </CardContainer>

        <CardContainer gridArea={GridAreas.WIFI}>
          <WifiCard />
        </CardContainer>

        <CardContainer gridArea={GridAreas.ALARM}>
          <AlarmCard />
        </CardContainer>

        <CardContainer gridArea={GridAreas.LIGHT}>
          <LightCard />
        </CardContainer>

        <CardContainer gridArea={GridAreas.POWER}>
          <PowerCard />
        </CardContainer>
      </div>
    </Box>
  );
};

export default HomeDashboard;
