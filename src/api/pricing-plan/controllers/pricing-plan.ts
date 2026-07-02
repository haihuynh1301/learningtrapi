import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::pricing-plan.pricing-plan",
  ({ strapi }) => ({
    async full(ctx) {
      const data = await strapi
        .service("api::pricing-plan.pricing-plan")
        .getFull();

      return data;
    },
  })
);