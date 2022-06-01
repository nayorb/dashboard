import RECIPES from "../../data/recipes";
import { IAppRecipe } from "../../types/recipes/recipe.types";

const RecipesService = {
  getAllRecipes: async (): Promise<IAppRecipe[]> => {
    return RECIPES;
  },
};

export default RecipesService;
