const fs = require("fs");
const RECEPTY = require("./NORMALIZED_RECEPTY.json");

const normalize = (text) =>
  text
    .toLowerCase()
    .replaceAll(" ", "_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const NORMALIZED_RECEPTY = {};

const recipesEntries = Object.entries(RECEPTY);

const INGREDIENTS = {};
const CATEGORIES = {};
const UNITS = {};

for (let i = 0, len = recipesEntries.length; i < len; i++) {
  const [id, recipe] = recipesEntries[i];

  const normalizedRecipe = { ...recipe };

  const ingredients = Object.keys(normalizedRecipe.ingredientCategories);
  const units = Object.values(normalizedRecipe.ingredientCategories).map((v) => v.unit);

  for (let j = 0; j < ingredients.length; j++) {
    const ingredient = ingredients[j];
    INGREDIENTS[normalize(ingredient)] = true;
  }

  const categories = Object.keys(recipe.categories);

  for (let k = 0; k < categories.length; k++) {
    const category = categories[k];
    CATEGORIES[normalize(category)] = true;

    // if (category === "maso-ine") {
    //   delete normalizedRecipe.categories["maso-ine"];
    //   normalizedRecipe.categories["maso_ine"] = true;
    // }
  }

  for (let j = 0; j < units.length; j++) {
    const unit = units[j];
    if (unit) {
      UNITS[normalize(unit)] = true;
    }

    // if (category === "maso-ine") {
    //   delete normalizedRecipe.categories["maso-ine"];
    //   normalizedRecipe.categories["maso_ine"] = true;
    // }
  }

  NORMALIZED_RECEPTY[id] = normalizedRecipe;
}

const INGREDIENTS_ARRAY = Object.keys(INGREDIENTS).sort();
const CATEGORIES_ARRAY = Object.keys(CATEGORIES).sort();
const UNITS_ARRAY = Object.keys(UNITS).sort();

fs.writeFileSync("./NORMALIZED_RECEPTY.json", JSON.stringify(NORMALIZED_RECEPTY), "utf8");
fs.writeFileSync("./INGREDIENTS.json", JSON.stringify(INGREDIENTS_ARRAY), "utf8");
fs.writeFileSync("./CATEGORIES.json", JSON.stringify(CATEGORIES_ARRAY), "utf8");
fs.writeFileSync("./UNITS.json", JSON.stringify(UNITS_ARRAY), "utf8");

console.log("CATEGORIES_ARRAY.length", CATEGORIES_ARRAY.length);
console.log("INGREDIENTS_ARRAY.length", INGREDIENTS_ARRAY.length);
console.log("UNITS_ARRAY.length", UNITS_ARRAY.length);
