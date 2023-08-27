const fs = require("fs");
const puppeteer = require("puppeteer");
const RECIPE_URLS = require("./recipes-urls.json");

const bootstrapUrls = async () => {
  const URL_BASE = "https://bonvivani.sk";

  const RECEPTY = {};

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const getRecipe = async (url) => {
    await page.goto(url);

    const getId = (text) =>
      text
        ?.toLowerCase()
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    const isNbsp = (str) => str === "&nbsp;";

    const recept = {};

    const getIngredient = async (fieldItemElement) => {
      const amount = await fieldItemElement.evaluate((el) => el.querySelector(".field--name-field-measure")?.innerHTML);
      const unit = await fieldItemElement.evaluate((el) => el.querySelector(".field--name-field-unit")?.innerHTML);

      let ingredientElement = await fieldItemElement.evaluate(
        (el) => el.querySelector(".field--name-field-ingredient")?.innerHTML,
      );
      let ingredientElementAnchor = await fieldItemElement.evaluate(
        (el) => el.querySelector(".field--name-field-ingredient a")?.innerHTML,
      );
      let ingredient;
      if (ingredientElementAnchor) {
        ingredient = getId(ingredientElementAnchor);
      } else {
        ingredient = ingredientElement;
      }

      return {
        amount: isNbsp(amount) ? undefined : amount,
        unit: isNbsp(unit) ? undefined : unit,
        ingredient: isNbsp(ingredient) ? undefined : ingredient,
      };
    };
    const title = await page.evaluate(() => {
      return document.querySelector(".page-header span").innerHTML;
    });

    recept.title = title;

    const id = getId(title);
    recept.id = id;

    const kategorieReceptu = await page.$$(".view-kategorie-receptu .field-content a");
    const categories = {};
    for (let i = 0, len = kategorieReceptu.length; i < len; i++) {
      const kat = kategorieReceptu[i];
      categories[
        getId(
          await kat.evaluate((el) => {
            return el.innerHTML;
          }),
        )
      ] = true;
    }

    recept.categories = categories;

    const ingredientElements = await page.$$(".field--name-field-suroviny .field--items>.field--item");

    // const ingredients = (
    //   await page.evaluate(() => {
    //     return Array.from(document.querySelector(".field--name-field-suroviny .field--item").children);
    //   })
    // ).map((i) => getIngredient(i));

    const ingredients = [];
    for (let i = 0, len = ingredientElements.length; i < len; i++) {
      const item = ingredientElements[i];
      ingredients.push(await getIngredient(item));
    }

    const ingredientCategories = {};
    let currentCategory;

    for (let i = 0, len = ingredients.length; i < len; i++) {
      const ingredient = ingredients[i];

      const amount = ingredient.amount;
      const unit = ingredient.unit;
      const ing = ingredient.ingredient;

      // new title
      if (!unit && !ing) {
        // create new category
        currentCategory = amount?.replace(":", "").trim();
      } else {
        // add normal ingredient
        ingredientCategories[ing] = {
          unit,
          amount: parseInt(amount) ? parseInt(amount) : amount,
          title: currentCategory,
        };
      }
    }

    recept.ingredientCategories = ingredientCategories;

    const steps = await page.evaluate(() =>
      Array.from(document.querySelectorAll(".field--name-field-postup p:first-child")).map((c) => c.innerHTML),
    );
    recept.steps = steps;

    console.log("recept", JSON.stringify(recept, null, 2));
    return recept;
  };

  for (let i = 0, len = RECIPE_URLS.length; i < len; i++) {
    // for (let i = 0, len = 2; i < len; i++) {
    const recipeUrl = RECIPE_URLS[i];
    console.log(`starting ${recipeUrl} (${i + 1} from ${len})`);

    const recipe = await getRecipe(`${URL_BASE}${recipeUrl}`);
    // const recipe = await getRecipe("https://bonvivani.sk/recepty/napacovane-rezne");

    console.log(`finished ${recipeUrl} (${i + 1} from ${len})`);

    RECEPTY[recipe.id] = recipe;
  }

  fs.writeFileSync("./RECEPTY.json", JSON.stringify(RECEPTY), "utf8");
  console.log(RECEPTY);
};
(async () => {
  await bootstrapUrls();
})();

// const aa = RECIPE_URLS.sort();
// fs.writeFileSync("./recipes-urls.json", JSON.stringify(aa), "utf8");
