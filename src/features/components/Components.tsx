import React, { useState } from "react";
import Tracker from "./tracker/Tracker";
import HomeDashboard from "./home-dashboard/HomeDashboard";
import PriceColorBrandFilter from "./price-color-brand-filter/PriceColorBrandFilter";
import BinaryWatch from "./binary-watch/BinaryWatch";
import TilesGame from "./tiles-game/TilesGame";

const components = [
  {
    id: "tracker",
    name: "Tracker",
    component: <Tracker />,
  },
  {
    id: "home-dashboard",
    name: "Home Dashboard",
    component: <HomeDashboard />,
  },
  {
    id: "price-color-brand-filter",
    name: "Price Color Brand Filter",
    component: <PriceColorBrandFilter />,
  },
  {
    id: "binary-watch",
    name: "Binary Watch",
    component: <BinaryWatch />,
  },
  {
    id: "tiles-game",
    name: "Tiles Game",
    component: <TilesGame />,
  },
];

const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState(components[4].id);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h1>Components</h1>
      <div className="flex">
        {components.map((component) => (
          <button
            key={component.id}
            className={`rounded-md text-amber-50 block px-3 py-1 m-1 ${
              selectedComponent === component.id ? "bg-amber-500" : "bg-amber-300"
            }`}
            onClick={() => setSelectedComponent(component.id)}
          >
            {component.name}
          </button>
        ))}
      </div>
      <div className="p-8">
        {components.map((component) => {
          if (component.id === selectedComponent) {
            return component.component;
          }
        })}
      </div>
    </div>
  );
};

export default Components;
