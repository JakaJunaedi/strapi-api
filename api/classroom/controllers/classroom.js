"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  me: async (ctx) => {
    //ctx.send("test success");

    const user = ctx.state.user;
    if (!user) {
      return ctx.badRequest({
        messages: "No authorization header was found",
      });
    }

    const data = await strapi.services.classroom.find({ user: user.id });

    if (!data) {
      return ctx.notFound();
    }

    ctx.send(data);
  },
};
