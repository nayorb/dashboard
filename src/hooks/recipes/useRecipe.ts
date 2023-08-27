import useRecipes from "./useRecipes";
import { IAppRecipe, IAppRecipeIngredientData } from "../../types/recipes/recipe.types";
import RECIPES_JSON from "../../scripts/NORMALIZED_RECEPTY.json";

const RECIPES = RECIPES_JSON as unknown as Record<string, IAppRecipe>;

const useRecipe = (id?: string): { ingredientCategoriesTitles: string[]; recipe: IAppRecipe | null } => {
  if (!id) return { ingredientCategoriesTitles: [], recipe: null };

  const recipe = RECIPES[id];

  if (!recipe) return { ingredientCategoriesTitles: [], recipe: null };

  const ingredientCategoriesTitles: Record<string, boolean> = {};

  for (let i = 0, len = Object.values(recipe.ingredientCategories).length; i < len; i++) {
    const categoryTitle = Object.values(recipe.ingredientCategories)[i].title;

    if (categoryTitle) {
      ingredientCategoriesTitles[categoryTitle] = true;
    }
  }

  console.log("recipe", recipe);

  return {
    ingredientCategoriesTitles: Object.keys(ingredientCategoriesTitles),
    recipe,
  };
};

export default useRecipe;
