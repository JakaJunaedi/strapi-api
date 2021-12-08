"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByPage(ctx) {
    const itemPerPage = 3; // item yang ditapilkan perhalaman adalah 3 item
    const activePage = ctx.params.page; // page adalah parameter yang dibuat di routes.json
    const showItem = itemPerPage * activePage - itemPerPage; // untuk menampilkan hasil

    const products = await strapi.query("products").find({
      _start: showItem,
      _limit: itemPerPage,
    });

    return products;
  },
};
