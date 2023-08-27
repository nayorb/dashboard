const fs = require("fs");
const request = require("request");
const IMAGES = require("./IMAGES.json");

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

const download = function (uri, filename) {
  return new Promise((req, resolve) => {
    request.head(uri, function (err, res, body) {
      console.log("uri", uri);
      console.log("filename", filename);
      console.log("content-type:", res.headers["content-type"]);
      console.log("content-length:", res.headers["content-length"]);
      request(uri)
        .pipe(fs.createWriteStream(`images/${filename}.jpg`))
        .on("close", () => {
          console.log("done", filename);
          // const NEW_IMAGES = JSON.parse(fs.readFileSync("IMAGES.json"));
          // delete NEW_IMAGES[filename];
          // console.log("LENGTH AFTER", Object.keys(NEW_IMAGES).length);
          // fs.writeFileSync("IMAGES.json", JSON.stringify(NEW_IMAGES));
          resolve();
        });
    });
  });
};

(async () => {
  // for (let i = 0, len = 1; i < len; i++) {
  for (let i = 0, len = IMAGES.length; i < len; i++) {
    const IMAGE = IMAGES[i];
    console.log("i", i, IMAGE);
    const item_name = IMAGE.id,
      item_url = IMAGE.url;
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
})();
