const fs = require("fs");
const puppeteer = require("puppeteer");
const RECIPE_URLS = require("./recipes-urls.json");

const bootstrapUrls = async () => {
  const URL_BASE = "https://bonvivani.sk";

  const IMAGES = [];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const getImageUrl = async (url) => {
    await page.goto(url);

    const getId = (text) =>
      text
        ?.toLowerCase()
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const title = await page.evaluate(() => {
      return document.querySelector(".page-header span").innerHTML;
    });

    const id = getId(title);

    const imageElement = await page.$(".field--name-field-image-recept img");
    const imageUrl = await imageElement.evaluate((el) => {
      return el.getAttribute("src");
    });

    console.log({
      id,
      url: URL_BASE + imageUrl,
    });

    return {
      id,
      url: URL_BASE + imageUrl,
    };
  };

  for (let i = 0, len = RECIPE_URLS.length; i < len; i++) {
    const recipeUrl = RECIPE_URLS[i];
    console.log(`starting ${recipeUrl} (${i + 1} from ${len})`);

    const image = await getImageUrl(`${URL_BASE}${recipeUrl}`);

    console.log(`finished ${recipeUrl} (${i + 1} from ${len})`);

    IMAGES.push(image);
  }

  fs.writeFileSync("./IMAGES.json", JSON.stringify(IMAGES), "utf8");
  console.log(IMAGES);
};

bootstrapUrls();
