import React from "react";
import useRecipe from "../../../hooks/recipes/useRecipe";
import { useLocation, useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

export interface RecipeDetailPageProps {}

const RecipeDetailPage = ({}: RecipeDetailPageProps) => {
  const params = useParams<{ id: string }>();
  const { recipe, ingredientCategoriesTitles } = useRecipe(params.id);

  if (!recipe)
    return (
      <Typography variant="h2" color="red">
        No recipe
      </Typography>
    );

  return (
    <Box p={4}>
      {/* === TITLE === */}
      <Typography variant="h2">{recipe.title}</Typography>

      <Grid container>
        {/* === INGREDIENTS === */}
        <Grid item lg={4} xs={12}>
          {Object.entries(recipe.ingredientCategories)
            .filter(([_, ingredient]) => !ingredient.title)
            .map(([key, ingredient]) => (
              <Box key={key}>
                <Grid container>
                  <Grid item xs={4}>
                    <Grid container>
                      <Typography>{ingredient.amount}</Typography>
                      <Typography ml={1}>{ingredient.unit}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{key}</Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          {ingredientCategoriesTitles.map((ingredientCategory) => (
            <Box>
              {/* === INGREDIENT TITLE === */}
              {ingredientCategory && (
                <Typography variant="body1" color="lightblue">
                  {ingredientCategory}
                </Typography>
              )}
              {/* === INGREDIENTS === */}
              {Object.entries(recipe.ingredientCategories)
                .filter(([key, ingredient]) => ingredient.title === ingredientCategory)
                .map(([key, ingredient]) => (
                  <Box key={key}>
                    <Grid container>
                      <Grid item xs={4}>
                        <Grid container>
                          <Typography>{ingredient.amount}</Typography>
                          <Typography ml={1}>{ingredient.unit}</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{key}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
            </Box>
          ))}
        </Grid>
        <Grid item lg={8} xs={12}>
          {recipe.steps.map((step, index) => (
            <Box mb={4}>
              <Typography variant="h2">{index + 1}</Typography>
              <Typography>{step}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecipeDetailPage;
