import React from "react";
import { IAppRecipe } from "../../../types/recipes/recipe.types";
import { StyledRecipeCardContainer, StyledRecipeCardImage } from "./RecipeCard.styles";
import { Box, Typography } from "@mui/material";

export interface RecipeCardProps {
  recipe: IAppRecipe;
  onClick(): void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <StyledRecipeCardContainer onClick={onClick}>
      <StyledRecipeCardImage id={recipe.id} />
      <Typography variant="h6" mt={2}>
        {recipe.title}
      </Typography>
    </StyledRecipeCardContainer>
  );
};

export default RecipeCard;
