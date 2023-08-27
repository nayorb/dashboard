import React from "react";
import { Grid } from "@mui/material";
import { HomeDashboardConstants } from "../home-dashboard-constants";

const getDateString = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
};

const TOP_BORDER_RADIUS = 4;

const TitleCard = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      p={1}
      bgcolor={HomeDashboardConstants.colors.gray.dark}
      color={HomeDashboardConstants.colors.common.white}
    >
      <Grid item fontSize={18} fontWeight={500}>
        <h1>{"Dashboard".toUpperCase()}</h1>
      </Grid>
      <Grid item fontSize={14}>
        <h1>{getDateString(new Date())}</h1>
      </Grid>
    </Grid>
  );
};

export default TitleCard;
