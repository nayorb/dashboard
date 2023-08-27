const fs = require("fs");
const puppeteer = require("puppeteer");
const RECIPE_URLS = require("./recipes-urls.json");

const bootstrapImages = async () => {
  const URL_BASE = "https://bonvivani.sk";

  const RECEPTY = [];

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
    const categories = [];
    for (let i = 0, len = kategorieReceptu.length; i < len; i++) {
      const kat = kategorieReceptu[i];
      categories.push(
        getId(
          await kat.evaluate((el) => {
            return el.innerHTML;
          }),
        ),
      );
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
      ingredients.push(
        await getIngredient(
          // await item.evaluate((el) => {
          //   return el;
          // }),
          item,
        ),
      );
    }

    const ingredientCategories = [];
    let currentCategory = {
      ingredients: [],
    };

    for (let i = 0, len = ingredients.length; i < len; i++) {
      const ingredient = ingredients[i];

      const amount = ingredient.amount;
      const unit = ingredient.unit;
      const ing = ingredient.ingredient;

      // new title
      if (!unit && !ing) {
        // create new category
        if (!!currentCategory.title) {
          ingredientCategories.push(currentCategory);
          currentCategory = {
            ingredients: [],
          };
        }
        // attach title to current category
        currentCategory.title = amount?.replace(":", "").trim();
      } else {
        // add normal ingredient
        currentCategory.ingredients.push({
          amount: parseInt(amount) ? parseInt(amount) : amount,
          unit: unit,
          ingredient: ing,
        });
      }
    }

    ingredientCategories.push(currentCategory);
    recept.ingredientCategories = ingredientCategories;

    const steps = await page.evaluate(() =>
      Array.from(document.querySelectorAll(".field--name-field-postup p:first-child")).map((c) => c.innerHTML),
    );
    recept.steps = steps;

    console.log("recept", recept);
    return recept;
  };

  for (let i = 0, len = RECIPE_URLS.length; i < len; i++) {
    const recipeUrl = RECIPE_URLS[i];
    console.log(`starting ${recipeUrl} (${i + 1} from ${len})`);

    const recipe = await getRecipe(`${URL_BASE}${recipeUrl}`);

    console.log(`finished ${recipeUrl} (${i + 1} from ${len})`);

    RECEPTY.push(recipe);
  }

  fs.writeFileSync("./RECEPTY.json", JSON.stringify(RECEPTY), "utf8");
  console.log(RECEPTY);
};

bootstrapImages();

// const aa = RECIPE_URLS.sort();
// fs.writeFileSync("./recipes-urls.json", JSON.stringify(aa), "utf8");

import fs from "fs";
import request from "request";
// import fetch from "node-fetch";
// import FileType from "file-type";

// async function savePhotoFromAPI(url, file_name) {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const fileType = await FileType.fromBuffer(buffer);
//     if (fileType.ext) {
//         const outputFileName = `${file_name}.${fileType.ext}`
//         fs.createWriteStream(outputFileName).write(buffer);
//     } else {
//         console.log('File type could not be reliably determined! The binary data may be malformed! No file saved!')
//     }
// }

var download = function (uri, filename) {
  return new Promise((req, resolve) => {
    request.head(uri, function (err, res, body) {
      request(uri)
        .pipe(fs.createWriteStream(`${filename}.png`))
        .on("close", () => {
          console.log("done", filename);
          const NEW_BLOCK_IMAGES = JSON.parse(fs.readFileSync("block_images.json"));
          delete NEW_BLOCK_IMAGES[filename];
          console.log("LENGTH AFTER", Object.keys(NEW_BLOCK_IMAGES).length);
          fs.writeFileSync("block_images.json", JSON.stringify(NEW_BLOCK_IMAGES));
          resolve();
        });
    });
  });
};

let BLOCK_IMAGES = JSON.parse(fs.readFileSync("block_images.json"));
const BLOCK_IMAGE_KEYS = Object.keys(BLOCK_IMAGES);

for (let i = 0; i < BLOCK_IMAGE_KEYS.length; i++) {
  console.log("i", i);
  const item_name = BLOCK_IMAGE_KEYS[i],
    item_url = BLOCK_IMAGES[item_name];
  try {
    await download(item_url, item_name);

    // console.log("done", item_name)
    // BLOCK_IMAGES = JSON.parse(fs.readFileSync("block_images.json"))
    // delete BLOCK_IMAGES[item_name]
    // console.log("LENGTH AFTER", Object.keys(BLOCK_IMAGES).length)
    // fs.writeFileSync("block_images.json", JSON.stringify(BLOCK_IMAGES))
  } catch (e) {
    console.log(e);
  }
}
