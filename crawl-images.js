const puppeteer = require("puppeteer");

const tableUrls = [
  "https://www.kaufland.sk/product/408365823/",
  "https://www.kaufland.sk/product/453459641/",
  "https://www.kaufland.sk/product/431857902/",
  "https://www.kaufland.sk/product/440195737/",
  "https://www.kaufland.sk/product/458732747/",
  "https://www.kaufland.sk/product/460143850/?vid=458732747",
  "https://www.kaufland.sk/product/458732187/",
  "https://www.kaufland.sk/product/457601086/?id_unit=385919166575&ref=spa_gallery_page_w2&mabref=konferen%C4%8Dn%C3%A9%20stol%C3%ADky",
  "https://www.kaufland.sk/product/458543015/",
  "https://www.kaufland.sk/product/453922366/",
  "https://www.kaufland.sk/product/447608564/",
  "https://www.kaufland.sk/product/419105838/",
  "https://www.kaufland.sk/product/460143891/",
  "https://www.kaufland.sk/product/437909853/?id_unit=385870657143&ref=spa_gallery_page_w2&mabref=konferen%C4%8Dn%C3%A9+stol%C3%ADky",
  "https://www.kaufland.sk/product/457601086/?id_unit=385919166575&ref=spa_gallery_page_w1&mabref=konferen%C4%8Dn%C3%A9%20stol%C3%ADky",
  "https://www.kaufland.sk/product/458732187/?vid=457601086",
  "https://www.kaufland.sk/product/453587697/",
  "https://www.kaufland.sk/product/453112753/",
  "https://www.kaufland.sk/product/437909853/?id_unit=385870657143&ref=spa_gallery_page_w2&mabref=konferen%C4%8Dn%C3%A9%20stol%C3%ADky",
];

const tables = [];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  for (const url of tableUrls) {
    await page.goto(url);
    await page.waitForSelector(".rd-gallery__image");
    const images = await page.$$eval(".rd-gallery__image", (imgs) => imgs.map((img) => img.src));
    const titles = await page.$$eval(".rd-title", (ttles) => ttles.map((img) => img.innerHTML));

    tables.push({
      name: titles[0].trim(),
      url,
      img: images[0],
    });
  }

  await browser.close();

  console.log(tables);
})();
