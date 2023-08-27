import React from "react";
import { Grid } from "@mui/material";
import { HomeDashboardConstants } from "../home-dashboard-constants";

export interface CardTitleProps {
  title: string;
  icon: React.ReactNode;
}

const CardTitle = ({ title, icon }: CardTitleProps) => {
  return (
    <Grid container color={HomeDashboardConstants.colors.gray.light} fontSize={14} alignItems="center">
      <Grid item mr={1}>
        {icon}
      </Grid>
      <Grid item>{title}</Grid>
    </Grid>
  );
};

export default CardTitle;
