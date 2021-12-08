'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        strapi.services['my-upload'].imgUpload(ctx); 
        ctx.send(JSON.stringify(ctx));
      },
};
