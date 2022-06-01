import { useEffect, useState } from "react";
import RecipesService from "../../services/recipes/recipes.service";
import { IAppRecipe } from "../../types/recipes/recipe.types";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<IAppRecipe[]>([]);

  useEffect(() => {
    (async () => {
      const response = await RecipesService.getAllRecipes();
      setRecipes(response);
    })();
  }, []);

  return {
    recipes,
  };
};

export default useRecipes;
