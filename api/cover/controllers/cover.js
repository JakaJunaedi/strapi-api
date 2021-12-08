'use strict';

const shortid = require('shortid');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { default: createStrapi } = require('strapi');


/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
      
      strapi.services['cover'].uploadCover(ctx);
     
        
      /**
        const storage = multer.diskStorage({
            destination: `${__dirname}public/uploads`,
            filename: (req, file, cb) => {
                const fileName = `${Date.now()}${path.extname(file.originalname)}`;
                cb(null, fileName);
            }
        })
        const uploadImage = multer({storage}).single('image_url')
         console.log(uploadImage);
         */

        /**
        const configPublicPath = strapi.config.get(
            'middleware.settings.public.path',
            strapi.config.paths.static
          );
          const uploadDir = path.resolve(strapi.dir, configPublicPath);
          console.log(uploadDir);

          return {
          create(file){
              return new Promise((resolve, reject) => {
                fs.writeFile(
                    path.join(uploadDir, `/uploads/${file.hash}${file.ext}`),
                    file.buffer,
                    err => {
                      if (err) {
                        return reject(err);
                      }
        
                      file.url = `/uploads/${file.hash}${file.ext}`;
        
                      resolve();
                      console.log(resolve);
                    }
                  );
              })
          }
    }
     */
}
};
