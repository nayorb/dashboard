// react component
import React from "react";
import { Grid, GridProps } from "@mui/material";
import { HomeDashboardConstants } from "../home-dashboard-constants";
import CardTitle from "./CardTitle";

export interface CardProps extends GridProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card = ({ title, icon, children, footer, ...restProps }: CardProps) => {
  return (
    <Grid
      container
      bgcolor={HomeDashboardConstants.colors.common.white}
      height="100%"
      p={2}
      display="flex"
      spacing={0}
      {...restProps}
    >
      <Grid item xs={12} height={24}>
        <CardTitle title={title} icon={icon} />
      </Grid>

      <Grid item xs={12} overflow="hidden">
        {children}
      </Grid>

      <Grid item xs={12} alignSelf="flex-end">
        {footer}
      </Grid>
    </Grid>
  );
};

export default Card;
