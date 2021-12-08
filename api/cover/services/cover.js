"use strict";

const fs = require('fs');
const rootDir = process.cwd();
const filePath = `${rootDir}/public/uploads`;
const path = require("path");
const multer = require("@koa/multer");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */


const storage = multer.diskStorage({
    destination: function (ctx, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function(ctx, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname)
        );
    }
})
console.log(filePath);

const upload = multer({ storage });

module.exports = {
  uploadCover: (ctx) => {
    console.log("res");
    upload.single("image_url")(ctx, () => {
      console.log(ctx.request.files);
      return ctx.request.files;
    });
  },
};
