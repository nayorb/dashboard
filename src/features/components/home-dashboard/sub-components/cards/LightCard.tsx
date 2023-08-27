import React from "react";
import { Lightbulb as LightbulbIcon } from "@mui/icons-material";
import Card from "../Card";
import { Switch } from "@mui/material";

interface SwitchContainerProps {
  label: string;
}

const SwitchContainer = ({ label }: SwitchContainerProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-light">{label}</div>
      <Switch />
    </div>
  );
};

const LightCard = () => {
  return (
    <Card title={"LIGHT"} icon={<LightbulbIcon />}>
      <div className="flex items-center justify-between p-6">
        <div className="w-48">
          <SwitchContainer label="Entrance hall" />
          <SwitchContainer label="Living Room" />
          <SwitchContainer label="Dining room" />
          <SwitchContainer label="Bathrooom" />
        </div>
        <div className="w-48">
          <SwitchContainer label="Bedroom1" />
          <SwitchContainer label="Bedroom2" />
          <SwitchContainer label="Bedroom3" />
          <SwitchContainer label="Wc" />
        </div>
      </div>
    </Card>
  );
};

export default LightCard;
