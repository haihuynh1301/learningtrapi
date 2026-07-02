/**
 * program controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::program.program",
  ({ strapi }) => ({
    async getFull(ctx) {
      const data = await strapi
        .service("api::program.program")
        .getFull();

      ctx.body = data;
    },
  })
);