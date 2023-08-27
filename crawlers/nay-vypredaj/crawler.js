const puppeteer = require("puppeteer");

const BASE_URL = "https://www.nay.sk/vypredaj/sort-by_mostExpensive";

// load data from file data.json
const fs = require("fs");

let data = [];

try {
  data = JSON.parse(fs.readFileSync("data.json", "utf8"));
} catch {
  fs.writeFileSync("data.json", JSON.stringify(data));
}

const getPageUrl = (page) => `${BASE_URL}?page=${page}`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let allProducts = [];

  const START_PAGE = 101;
  const LAST_PAGE = 386;

  // go through first 10 pages
  for (let i = START_PAGE; i <= LAST_PAGE; i++) {
    await page.goto(getPageUrl(i));

    const products = await page.evaluate(() => {
      const parsePrice = (price) => {
        return Number(price.replaceAll(" ", "").replaceAll("€", "").replaceAll(",", "."));
      };

      const PRODUCT_SELECTOR = ".product-box";
      const PRODUCT_TITLE_SELECTOR = ".product-box__link span";
      const PRODUCT_IMAGE_SELECTOR = ".img-box__img";
      const PRODUCT_LINK_SELECTOR = ".product-box__link";
      const PRODUCT_PRICE_SELECTOR = ".product-box__price-bundle strong";
      const PRODUCT_OLD_PRICE_SELECTOR = ".product-box__price-bundle del";

      const products = document.querySelectorAll(PRODUCT_SELECTOR);

      return Array.from(products).map((product) => {
        const link = product.querySelector(PRODUCT_LINK_SELECTOR);
        const title = product.querySelector(PRODUCT_TITLE_SELECTOR);
        const price = product.querySelector(PRODUCT_PRICE_SELECTOR);
        const image = product.querySelector(PRODUCT_IMAGE_SELECTOR);
        const oldPrice = product.querySelector(PRODUCT_OLD_PRICE_SELECTOR);

        const priceNumber = price ? parsePrice(price.textContent) : null;
        const oldPriceNumber = oldPrice ? parsePrice(oldPrice.textContent) : priceNumber ? priceNumber : null;
        const discount = oldPriceNumber ? Math.round((1 - priceNumber / oldPriceNumber) * 100) : null;
        const linkContent = link ? link.getAttribute("href") : null;
        const url = linkContent ? `https://www.nay.sk${linkContent}` : null;

        return {
          oldPrice: oldPriceNumber,
          price: priceNumber,
          title: title ? title.textContent.trim() : null,
          url: url,
          image: image ? image.getAttribute("src") : null,
          discount,
        };
      });
    });

    allProducts.push(...products);
    allProducts = allProducts.sort((a, b) => b.discount - a.discount);

    const dataWithAllProducts = [...allProducts, ...data];
    const sortedData = dataWithAllProducts.sort((a, b) => b.discount - a.discount);

    console.log(sortedData, "sortedData for page: ", i);

    // write data to file
    fs.writeFileSync("data.json", JSON.stringify(sortedData));

    await page.waitForTimeout(5000);
  }

  await browser.close();
})();
