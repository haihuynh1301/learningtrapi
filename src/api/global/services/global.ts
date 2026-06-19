/**
 * global service
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreService('api::global.global');
export default {
  async getGlobal() {
    return await strapi.documents(
      "api::global.global"
    ).findFirst({
      populate: {
       header: {
          populate: "*",
        },
                footer: {
          populate: {
            logo: {
              populate: {
                image: true,
              },
            },

            item: {
              populate: {
                items: true,
              },
            },
          },
        },
      },
    });
  },
};