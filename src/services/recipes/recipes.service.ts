import RECIPES from "../../scripts/RECEPTY.json";
import { IAppRecipe } from "../../types/recipes/recipe.types";

export type TRecipes = Record<string, IAppRecipe>;

export const ALL_RECIPES = RECIPES as unknown as TRecipes;

const RecipesService = {
  getAllRecipes: async (): Promise<TRecipes> => {
    return RECIPES as unknown as TRecipes;
  },
};

export default RecipesService;
