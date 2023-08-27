import React, { useEffect, useState } from "react";
import { GeneticAlgorithm, Individual } from "./genetic-algorithm";

interface GeneticProviderReturn {
  population: Individual[];
  generation: number;
  nextGeneration: () => void;
  toggleSelected: (id: string) => void;
}

const getRandomEmailOnGmailDomain = () => {
  const randomEmail = Math.random().toString(36).substring(7);
  return `${randomEmail.charAt(0).toUpperCase() + randomEmail.slice(1)}@gmail.com`;
};

const getNextOperationId = () => {
  return getRandomEmailOnGmailDomain();
};

const useGenetic = (): GeneticProviderReturn => {
  const [genetic, setGenetic] = useState<GeneticAlgorithm | null>(null);
  const [_, setLastOperationId] = useState("");

  useEffect(() => {
    if (!genetic) {
      setGenetic(new GeneticAlgorithm(10));
    }
  }, []);

  const nextGeneration = () => {
    if (genetic) {
      genetic.nextGeneration();
      setLastOperationId(getNextOperationId());
    }
  };

  const population = genetic?.population || [];

  const generation = genetic?.generation || 0;

  const toggleSelected = (id: string) => {
    const individual = population.find((individual) => individual.id === id);
    if (individual) {
      individual.selected = !individual.selected;
    }
    setLastOperationId(getNextOperationId());
  };

  return {
    population,
    generation,
    nextGeneration,
    toggleSelected,
  };
};

export default useGenetic;
