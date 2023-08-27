// react
// react component
import React from "react";
import { Box, Grid } from "@mui/material";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { HomeDashboardConstants } from "../home-dashboard-constants";

export interface FooterLinkProps {
  title: string;
}

const FooterLink = ({ title }: FooterLinkProps) => {
  return (
    <Grid
      item
      xs={12}
      justifyContent="flex-end"
      alignItems="flex-end"
      color={HomeDashboardConstants.colors.gray.dark}
      display="flex"
    >
      <Grid item mr={0.5}>
        {title}
      </Grid>
      <ChevronRightIcon />
    </Grid>
  );
};

export default FooterLink;
