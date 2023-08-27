import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useState } from "react";
import useRecipes, { TUseRecipesFilter } from "../../../hooks/recipes/useRecipes";
import RecipeCard from "../../../components/recipes/recipe-card/RecipeCard";
import { RecipeIngredient } from "../../../types/recipes/recipe-ingredients.types";
import IngredientFilter from "../../../components/recipes/ingredient-filter/IngredientFilter";
import { IAppRecipe } from "../../../types/recipes/recipe.types";

const LOCAL_STORAGE_FILTER_KEY = "recipes_ingredients_filter";

const RecipesPage = () => {
  const [filterIngredients, setFilterIngredients] = useState<TUseRecipesFilter>(
    localStorage.getItem(LOCAL_STORAGE_FILTER_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_FILTER_KEY) as string)
      : {},
  );
  const { filteredRecipes } = useRecipes({ filter: filterIngredients });
  const navigate = useNavigate();

  // @ts-ignore

  const changeFilter = (item: RecipeIngredient) => {
    const newFilter = { ...filterIngredients, [item]: !filterIngredients[item] };
    localStorage.setItem(LOCAL_STORAGE_FILTER_KEY, JSON.stringify(newFilter));
    setFilterIngredients(newFilter);
  };

  return (
    <Grid p={3} container height="100vh" overflow="hidden">
      <Grid
        md={3}
        item
        style={{
          height: "100%",
        }}
      >
        <IngredientFilter
          onFilterItemClick={changeFilter}
          // @ts-ignore
          onItemSelectClick={(item: RecipeIngredient) => setFilterIngredients({ [item]: true })}
          items={Object.keys(RecipeIngredient) as RecipeIngredient[]}
          selectedItems={filterIngredients}
        />
      </Grid>
      <Grid
        md={9}
        item
        display="grid"
        gridAutoFlow="row dense"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gridAutoRows={256}
        gap={2}
        style={{
          overflowY: "scroll",
          height: "100%",
        }}
      >
        {Object.values(filteredRecipes).map((recipe) => (
          <RecipeCard
            recipe={recipe as unknown as IAppRecipe}
            key={recipe.id}
            onClick={() => navigate(`/recipes/${recipe.id}`)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default RecipesPage;
