import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => ({
    async full(ctx) {
      const data = await strapi
        .service("api::homepage.homepage")
        .getHomepage();

      return data;
    },
  })
);