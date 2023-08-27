import React from "react";
import { HomeOutlined, CloudOutlined, Thermostat } from "@mui/icons-material";
import Card from "../Card";
import FooterLink from "../FooterLink";
import UnitTile from "../UnitTile";

const TemperatureCard = () => {
  return (
    <Card title={"TEMPERATURE"} icon={<Thermostat />} footer={<FooterLink title={"Edit"} />}>
      <div className="flex items-center justify-center h-full">
        <UnitTile label={"INDOOR"} icon={<HomeOutlined fontSize="medium" />} temperature={22} unit="°C" />
        <UnitTile label={"OUTDOOR"} icon={<CloudOutlined fontSize="medium" />} temperature={18} unit="°C" />
      </div>
    </Card>
  );
};

export default TemperatureCard;
