/**
 * about-us controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::about-us.about-us');
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::about-us.about-us",
  ({ strapi }) => ({
    async full(ctx) {
      const data = await strapi
        .service("api::about-us.about-us")
        .getAboutPage();

      return data;
    },
  })
);