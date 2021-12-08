"use strict";
const _ = require('lodash');
const { sanitizeEntity } = require('strapi-utils');
const apiUploadController = require('../api');

const resolveController = (ctx) => {
  const {
    state: { isAuthenticatedAdmin },
  } = ctx;

  return isAuthenticatedAdmin ? adminUploadController : apiUploadController;
};

const resolveControllerMethod = (method) => (ctx) => {
  const controller = resolveController(ctx);
  const callbackFn = controller[method];

  if (!_.isFunction(callbackFn)) {
    return ctx.notFound();
  }

  return callbackFn(ctx);
};

module.exports = {
  find: resolveControllerMethod("find"),
  findOne: resolveControllerMethod("findOne"),
  count: resolveControllerMethod("count"),
  destroy: resolveControllerMethod("destroy"),
  updateSettings: resolveControllerMethod("updateSettings"),
  getSettings: resolveControllerMethod("getSettings"),
};
