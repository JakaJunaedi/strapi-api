"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async comment(ctx) {
    const { id } = ctx.params;
    const posts = await strapi.services.post.findOne({ id });
    //console.log(posts);
    return posts.comments;
  },
};
