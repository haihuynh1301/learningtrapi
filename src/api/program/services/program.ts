/**
 * program service
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreService('api::program.program');

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::program.program",
  ({ strapi }) => ({
    async getFull() {
      return await strapi.documents(
        "api::program.program"
      ).findFirst({
        populate: {
            hero: {
                populate: {
                  heading: true,
                  items: true,
                  image: true,
                },
              },

              overview: {
                populate: {
                  heading: true,
                  button: true,
                  box: true,
                },
              },

              learn: {
                populate: {
                  heading: true,
                  items: true,
                },
              },

              instructor: {
                populate: {
                  image: true,
                  heading: true,
                  information: true,
                },
              },
               plan: {
                populate: {
                  heading: true,
                  card: {
                     populate: {
                        headingcard: true,
                        featureitems: true,
                        button: true,
                      },
                  },
                },
              },
        },
      });
    },
  })
);