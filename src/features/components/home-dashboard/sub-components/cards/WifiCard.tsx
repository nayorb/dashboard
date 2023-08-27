import React from "react";
import { HomeDashboardConstants } from "../../home-dashboard-constants";
import { Wifi as WifiIcon } from "@mui/icons-material";
import FooterLink from "../FooterLink";
import Card from "../Card";
import { Box } from "@mui/material";
import { Check } from "@mui/icons-material";
import Status from "../Status";

const WifiCard = () => {
  return (
    <Card title={"WIFI"} icon={<WifiIcon />} footer={<FooterLink title={"Edit"} />}>
      <Status text="ACTIVATED" icon={<Check fontSize="large" />} color={HomeDashboardConstants.colors.green.main} />
    </Card>
  );
};

export default WifiCard;
