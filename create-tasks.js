const { TodoistApi } = require("@doist/todoist-api-typescript");

const TABLES_PROJECT_ID = "2311475021";

const todoist = new TodoistApi("77189a71b0d08da47d6ac09089298510641bd056");

(async () => {
  const allTasks = await todoist.getTasks();
  const allProjects = await todoist.getProjects();

  for (const table of TABLES) {
    const task = {
      content: JSON.stringify(table),
      project_id: TABLES_PROJECT_ID,
    };

    await todoist.addTask(task);
  }

  console.log(allTasks[0]);
  console.log(allProjects);
})();

const TABLES = [
  {
    name: "Konferenčný stolík Vicco Bočný stolík Anton Anthracite Konferenčný stolík Police",
    url: "https://www.kaufland.sk/product/408365823/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/57ef43dbf60c14f28420c916a6f865fc.webp",
  },
  {
    name: "Konferenčný stolík MONO dub Wotan / betón",
    url: "https://www.kaufland.sk/product/453459641/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/e1127a2e4fbbc08c07c0c2b35f5452dc.webp",
  },
  {
    name: "Konferenčný stolík NORD dub wotan",
    url: "https://www.kaufland.sk/product/431857902/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/f770752f798ba10b9f2533e373a75f8a.webp",
  },
  {
    name: "Konferenčný stolík AURIS 87 cm Konferenčný stolík s policou Artisan Oak / Black Matt",
    url: "https://www.kaufland.sk/product/440195737/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/dc17efb1ae40a0dcb59a67694685753d.webp",
  },
  {
    name: "Konferenčný stolík FurniStyle 120,5 cm Karim",
    url: "https://www.kaufland.sk/product/458732747/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/f459c1e56475a83612640b3726cdca54.webp",
  },
  {
    name: "Konferenčný stolík CLIF 100x62x39",
    url: "https://www.kaufland.sk/product/460143850/?vid=458732747",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/ccbdf49df1667b10d8505aa009e8372f.webp",
  },
  {
    name: "Konferenčný stolík Ipari Antoine Brown - drevo",
    url: "https://www.kaufland.sk/product/458732187/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/d824c654cb00da2e69fb6e3ff48c6551.webp",
  },
  {
    name: "Zaoblený drevený konferenčný stolík VIDE ONE FLO, Kombinácia dubového masívu a dyhovanej DTD dosky",
    url: "https://www.kaufland.sk/product/457601086/?id_unit=385919166575&ref=spa_gallery_page_w2&mabref=konferen%C4%8Dn%C3%A9%20stol%C3%ADky",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/459fe862ea2786d366c7940923c42860.webp",
  },
  {
    name: "Eazy Living Konferenčný stolík 110 cm Haline Dark Grey",
    url: "https://www.kaufland.sk/product/458543015/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/c0c9589e1d9e103e30db65616ca63118.webp",
  },
  {
    name: "Konferenčný stolík MADDIE so zásuvkou dub artisan antracit",
    url: "https://www.kaufland.sk/product/453922366/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/265bec769b769fb84e0d7ed8c1ffa538.webp",
  },
  {
    name: "Konferenčný stolík CHICAGO Puccini dub biely",
    url: "https://www.kaufland.sk/product/447608564/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/2f4a14c2cda621109454675c974639f9.webp",
  },
  {
    name: "Konferenčný stolík Vicco Urban Grey 100 x 35,5 x 50 cm",
    url: "https://www.kaufland.sk/product/419105838/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/709bc63d6db9759421f684c2a35cd69f.webp",
  },
  {
    name: "Konferenčný stolík MILA 120x60x50",
    url: "https://www.kaufland.sk/product/460143891/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/d9f0dbe6ec38ab6908b07a2d93afa8fb.webp",
  },
  {
    name: "Konferenčný stolík GREY Coffet Table GREY/ARTISAN",
    url: "https://www.kaufland.sk/product/437909853/?id_unit=385870657143&ref=spa_gallery_page_w2&mabref=konferen%C4%8Dn%C3%A9+stol%C3%ADky",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/7785de948fa56dc6c702041222f4186b.webp",
  },
  {
    name: "Zaoblený drevený konferenčný stolík VIDE ONE FLO, Kombinácia dubového masívu a dyhovanej DTD dosky",
    url: "https://www.kaufland.sk/product/457601086/?id_unit=385919166575&ref=spa_gallery_page_w1&mabref=konferen%C4%8Dn%C3%A9%20stol%C3%ADky",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/459fe862ea2786d366c7940923c42860.webp",
  },
  {
    name: "Konferenčný stolík Ipari Antoine Brown - drevo",
    url: "https://www.kaufland.sk/product/458732187/?vid=457601086",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/d824c654cb00da2e69fb6e3ff48c6551.webp",
  },
  {
    name: "Konferenčný stolík BALI 55A dub",
    url: "https://www.kaufland.sk/product/453587697/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/55b1f443f5f4d7926f8a9637fe02826c.webp",
  },
  {
    name: "Juskys Konferenčný stolík 60 x 60 x 40 cm tmavosivá/vzhľad dreva",
    url: "https://www.kaufland.sk/product/453112753/",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/f93658089d8dcafd993e9fa71b1c48bb.webp",
  },
  {
    name: "Konferenčný stolík GREY Coffet Table GREY/ARTISAN",
    url: "https://www.kaufland.sk/product/437909853/?id_unit=385870657143&ref=spa_gallery_page_w2&mabref=konferen%C4%8Dn%C3%A9%20stol%C3%ADky",
    img: "https://media.cdn.kaufland.de/product-images/1024x1024/7785de948fa56dc6c702041222f4186b.webp",
  },
];
