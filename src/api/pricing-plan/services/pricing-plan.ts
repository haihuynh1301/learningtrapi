import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::pricing-plan.pricing-plan",
  ({ strapi }) => ({
    async getFull() {
      return await strapi.documents(
        "api::pricing-plan.pricing-plan"
      ).findFirst({
        populate: {
          hero: true,

          item: {
            populate: {
              headingcard: true,
              featureitems: true,
              button: true,
            },
          },

          features: {
            populate: {
              heading: true,

              items: {
                populate: {
                  items: true,
                },
              },
            },
          },
          banner: {
            populate: "*",
          },
           question: {
            populate: "*",
          },
        },
      });
    },
  })
);