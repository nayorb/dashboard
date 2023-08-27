import React from "react";
import { Power as PowerIcon, WaterOutlined, BoltOutlined, LocalFireDepartment } from "@mui/icons-material";
import Card from "../Card";
import UnitTile from "../UnitTile";
import FooterLink from "../FooterLink";

const PowerCard = () => {
  return (
    <Card title={"POWER"} icon={<PowerIcon />}>
      <div className="flex h-48">
        <div className="flex flex-col w-72 h-full justify-between">
          <div className="mt-5">
            <UnitTile label={"WATER"} icon={<WaterOutlined fontSize="medium" />} temperature={22} unit="m3" />
          </div>
          <FooterLink title="View in details" />
        </div>
        <div className="flex flex-col w-72 h-full justify-between">
          <div className="mt-5">
            <UnitTile label={"ELECTRICITY"} icon={<BoltOutlined fontSize="medium" />} temperature={41} unit="kw/h" />
          </div>
          <FooterLink title="View in details" />
        </div>
        <div className="flex flex-col w-72 h-full justify-between">
          <div className="mt-5">
            <UnitTile label={"GAS"} icon={<LocalFireDepartment fontSize="medium" />} temperature={67} unit="m3" />
          </div>
          <FooterLink title="View in details" />
        </div>
      </div>
    </Card>
  );
};

export default PowerCard;
