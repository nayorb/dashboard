import { RecipeCategory } from "./recipe-category.types";
import { RecipeUnit } from "./recipe-ingredient-types.types";
import { RecipeIngredient } from "./recipe-ingredients.types";

export interface IAppRecipeIngredientData {
  unit?: RecipeUnit;
  amount?: number | [number, number];
  title?: string;
}

export interface IAppRecipeIngredientCategory {
  title?: string;
  ingredients: IAppRecipeIngredientData[];
}

export interface IAppRecipe {
  title: string;
  id: string;
  categories: Record<RecipeCategory, boolean>;
  ingredientCategories: Record<RecipeIngredient, IAppRecipeIngredientData>;
  steps: string[];
}
