'use strict';
const multer = require('@koa/multer');
const path = require('path')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('in dest');
        cb(null, path.resolve(__dirname, './public'));
    },
    filename: function (req, file, cb) {
        console.log('in filename');
        let fileName = file.originalname.toLowerCase();
        let fileExtension;

        if (fileName.endsWith('.jpg')) {
            fileExtension = '.jpg';
        } else if (fileName('.png')) {
            fileExtension = '.png'
        }
        cb(null, file.fieldname + '-' + Date.now() + fileExtension)
    }
});

const upload = multer({ storage: storage });


module.exports = {
    imgUpload: (ctx) => {
        console.log('in imgUpload!');
        console.log('ctx');
        console.log(ctx)
        upload.single('upload')(ctx, () => {
            console.log('ctx.request.files', ctx.request.files);
            console.log('ctx.files', ctx.files);
            ctx.body = 'done';
        });
    }
};
