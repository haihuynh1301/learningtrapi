import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::about-us.about-us",
  ({ strapi }) => ({
    async full(ctx) {
      const data = await strapi.documents(
        "api::about-us.about-us"
      ).findFirst({
        populate: "*",
      });

      return data;
    },
  })
);