import React from "react";
import { Box, ButtonBase, Grid, Input, Typography } from "@mui/material";
import { TUseRecipesFilter } from "../../../hooks/recipes/useRecipes";
import { RecipeIngredient } from "../../../types/recipes/recipe-ingredients.types";

export interface IngredientFilterProps {
  onFilterItemClick(item: RecipeIngredient): void;
  onItemSelectClick(item: RecipeIngredient): void;
  items: RecipeIngredient[];
  selectedItems: TUseRecipesFilter;
}

const FilterItem = ({
  item,
  onDotClick,
  onItemClick,
  selected,
}: {
  item: RecipeIngredient;
  onDotClick: (item: RecipeIngredient) => void;
  onItemClick: (item: RecipeIngredient) => void;
  selected: boolean;
}) => {
  return (
    <Grid
      item
      xs={12}
      my={1}
      mr={3}
      py={0.5}
      px={2}
      position="relative"
      sx={{
        backgroundColor: selected ? "lightgreen" : "lightblue",
        borderRadius: 8,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: selected ? "lightgreen" : "lightblue",
        },
      }}
      onClick={() => onItemClick(item)}
    >
      <Typography>{item}</Typography>
      <Box
        position="absolute"
        zIndex={2}
        right={4}
        top={4}
        sx={{
          backgroundColor: "lightcoral",
          width: 24,
          height: 24,
          borderRadius: 999,
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onDotClick(item);
        }}
      >
        <ButtonBase
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 999,
            "&:hover": {
              backgroundColor: "coral",
            },
          }}
        />
      </Box>
    </Grid>
  );
};

function IngredientFilter({ onFilterItemClick, onItemSelectClick, items, selectedItems }: IngredientFilterProps) {
  const [search, setSearch] = React.useState("");

  return (
    <Grid
      container
      style={{
        height: "100%",
      }}
    >
      {Object.keys(selectedItems).map((item) => {
        const isSelected = !!selectedItems[item as RecipeIngredient];

        if (!isSelected) return null;

        return (
          <FilterItem
            item={item as RecipeIngredient}
            onItemClick={onFilterItemClick}
            onDotClick={onItemSelectClick}
            selected
          />
        );
      })}

      <Box>
        <Input
          style={{
            width: "100%",
            padding: 8,
            boxSizing: "border-box",
            border: "1px solid lightgray",
          }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          endAdornment={
            <ButtonBase onClick={() => setSearch("")}>
              <Box>❌</Box>
            </ButtonBase>
          }
        />
      </Box>

      <Box
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "lightgray",
          margin: "8px 0",
        }}
      />

      <Box
        style={{
          overflowY: "scroll",
          height: "100%",
        }}
      >
        {items
          .filter((item) => item.includes(search))
          .map((item) => {
            const isSelected = !!selectedItems[item];

            if (isSelected) return null;

            return (
              <FilterItem
                item={item}
                onItemClick={onFilterItemClick}
                onDotClick={onItemSelectClick}
                selected={isSelected}
              />
            );
          })}
      </Box>
    </Grid>
  );
}

export default IngredientFilter;
