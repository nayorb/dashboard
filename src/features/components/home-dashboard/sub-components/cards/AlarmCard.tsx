import React from "react";
import { HomeDashboardConstants } from "../../home-dashboard-constants";
import { Alarm as AlarmIcon } from "@mui/icons-material";
import FooterLink from "../FooterLink";
import Card from "../Card";
import { Close } from "@mui/icons-material";
import Status from "../Status";

const AlarmCard = () => {
  return (
    <Card title={"ALARM"} icon={<AlarmIcon />} footer={<FooterLink title={"Edit"} />}>
      <Status text="DISABLED" icon={<Close fontSize="large" />} color={HomeDashboardConstants.colors.red.main} />
    </Card>
  );
};

export default AlarmCard;
