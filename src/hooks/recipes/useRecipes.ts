import { useEffect, useState } from "react";
import { ALL_RECIPES, TRecipes } from "../../services/recipes/recipes.service";
import { RecipeIngredient } from "../../types/recipes/recipe-ingredients.types";
import { IAppRecipe } from "../../types/recipes/recipe.types";

export type TUseRecipes = ReturnType<typeof useRecipes>;
export type TUseRecipesFilter = Partial<Record<RecipeIngredient, boolean>>;

export interface IUseRecipesProps {
  filter: TUseRecipesFilter;
}

const hasRecipeAllOfTheIngredients = (recipe: IAppRecipe, ingredients: RecipeIngredient[]): boolean => {
  return ingredients.every((ingredient) => recipe.ingredientCategories[ingredient]);
};

const filterRecipes = (recipes: TRecipes, filter: TUseRecipesFilter): TRecipes => {
  const filteredRecipes: TRecipes = {};
  const selectedIngredients: RecipeIngredient[] = Object.keys(filter).filter(
    (ingredient) => filter[ingredient as RecipeIngredient],
  ) as RecipeIngredient[];

  Object.entries(recipes).forEach(([recipeId, recipe]) => {
    if (hasRecipeAllOfTheIngredients(recipe, selectedIngredients)) {
      filteredRecipes[recipeId] = recipe;
    }
  });

  return filteredRecipes;
};

const useRecipes = ({ filter }: IUseRecipesProps) => {
  const [filteredRecipes, setFilteredRecipes] = useState<TRecipes>(ALL_RECIPES);

  useEffect(() => {
    setFilteredRecipes(filterRecipes(ALL_RECIPES, filter));
  }, [filter]);

  return {
    recipes: ALL_RECIPES,
    filteredRecipes: filteredRecipes,
  };
};

export default useRecipes;
