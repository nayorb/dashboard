import { RecipeCategory } from "./recipe-category.types";
import { RecipeUnit } from "./recipe-ingredient-types.types";
import { RecipeIngredient } from "./recipe-ingredients.types";

export interface IAppRecipeIngredient {
  unit?: RecipeUnit;
  amount?: number | [number, number];
  ingredient: RecipeIngredient;
}

export interface IAppRecipeIngredientCategory {
  title?: string;
  ingredients: IAppRecipeIngredient[];
}

export interface IAppRecipe {
  title: string;
  id: string;
  categories: RecipeCategory[];
  ingredientCategories: IAppRecipeIngredientCategory[];
  steps: string[];
}
