/**
 * global controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::global.global');

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::global.global",
  ({ strapi }) => ({
    async full(ctx) {
      const data = await strapi
        .service("api::global.global")
        .getGlobal();

      return data;
    },
  })
);