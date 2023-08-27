import { useState } from "react";
import Genetic from "../features/genetics/Genetic";
import LivingRoomTablePage from "./LivingRoomTablePage";
import Components from "../features/components/Components";
import { Grid } from "@mui/material";

const tabs = [
  {
    id: "components",
    name: "Components",
    component: <Components />,
  },
  {
    id: "genetic",
    name: "Genetic",
    component: <Genetic />,
  },
  {
    id: "living",
    name: "Living Room Table",
    component: <LivingRoomTablePage />,
  },
];

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`rounded-md text-amber-50 block px-3 py-1 m-1 ${
              selectedTab === tab.id ? "bg-amber-500" : "bg-amber-300"
            }`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <Grid container className="bg-cyan-400">
        {tabs.map((tab) => {
          if (tab.id === selectedTab) {
            return tab.component;
          }
        })}
      </Grid>
    </div>
  );
};

export default HomePage;
