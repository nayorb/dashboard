const INDIVIDUAL_SIZE = 3;

const getRandomHex = (): string => {
  return Math.floor(Math.random() * 256).toString(16);
};

export class Individual {
  genes: Array<string>;
  selected: boolean;
  id: string;

  constructor(id: string) {
    this.genes = [];
    this.selected = false;
    this.id = id;
    for (let i = 0; i < INDIVIDUAL_SIZE; i++) {
      this.genes.push(getRandomHex());
    }
  }
}

export class GeneticAlgorithm {
  generation: number;
  population: Array<Individual>;

  constructor(populationSize: number) {
    this.generation = 0;
    this.population = [];
    for (let i = 0; i < populationSize; i++) {
      this.population.push(new Individual(i.toString()));
    }
  }

  fitness(individual: Individual): number {
    // let fitness = 0;
    // for (let i = 0; i < individual.genes.length; i++) {
    //   fitness += individual.selected ? 1 : 0;
    // }
    return individual.selected ? 1 : 0;
  }

  selection(): Array<Individual> {
    const selected = [];
    for (let i = 0; i < this.population.length; i++) {
      const individual = this.population[i];
      const fitness = this.fitness(individual);
      for (let j = 0; j < fitness; j++) {
        selected.push(individual);
      }
    }
    return selected;
  }

  crossover(): Array<Individual> {
    const children = [];
    let parents;

    const selected = this.selection();

    if (selected.length === 0) {
      parents = this.population;
    } else {
      parents = selected;
    }

    for (let i = 0; i < this.population.length - 1; i++) {
      const parent1 = parents[Math.floor(Math.random() * parents.length)];
      const parent2 = parents[Math.floor(Math.random() * parents.length)];
      const child = new Individual(i.toString());

      for (let j = 0; j < INDIVIDUAL_SIZE; j++) {
        child.genes[j] = Math.random() < 0.5 ? parent1.genes[j] : parent2.genes[j];
      }
      children.push(child);
    }
    children.push(new Individual((this.population.length - 1).toString()));
    return children;
  }

  mutation(): Array<Individual> {
    const children = this.population;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      for (let j = 0; j < INDIVIDUAL_SIZE; j++) {
        if (Math.random() < 0.2) {
          child.genes[j] = getRandomHex();
        }
      }
    }
    return children;
  }

  nextGeneration(): void {
    this.population = this.crossover();
    this.population = this.mutation();
    this.generation++;
  }

  toggleSelected(id: string): void {
    const individual = this.population.find((individual) => individual.id === id);
    if (individual) {
      individual.selected = !individual.selected;
    }
  }
}
