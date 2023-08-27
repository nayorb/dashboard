import React from "react";
import { HomeDashboardConstants } from "../home-dashboard-constants";

interface UnitTileProps {
  label: string;
  icon: React.ReactNode;
  temperature: number;
  unit: string;
}

const UnitTile = ({ temperature, label, icon, unit }: UnitTileProps) => {
  return (
    <div
      className="flex flex-col items-center mx-4"
      style={{
        color: HomeDashboardConstants.colors.blue.main,
      }}
    >
      <div className="font-medium">{label}</div>
      <div className="flex items-center justify-center font-thin mt-2">{icon}</div>
      <div
        className="flex items-start mt-2 font-thin"
        style={{
          color: HomeDashboardConstants.colors.common.black,
        }}
      >
        <div className="text-5xl">{temperature}</div>
        {unit}
      </div>
    </div>
  );
};

export default UnitTile;
