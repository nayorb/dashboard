import React from "react";
import useGenetic from "./useGenetic";

const Genetic = () => {
  const { population, generation, nextGeneration, toggleSelected } = useGenetic();

  return (
    <div className="p-8">
      <h1>Generation - {generation}</h1>
      <button
        className="bg-amber-500 rounded-md p-1 text-amber-50"
        onClick={() => {
          nextGeneration();
        }}
      >
        Next generation
      </button>
      {population.map((individual) => (
        <button
          key={individual.id}
          className={`rounded-md text-amber-50 block p-3 m-1`}
          style={{
            backgroundColor: "#" + individual.genes.join(""),
          }}
          onClick={() => toggleSelected(individual.id)}
        >
          {individual.genes.join("")}
          {`${individual.selected ? " - selected" : ""}`}
        </button>
      ))}
    </div>
  );
};

export default Genetic;
