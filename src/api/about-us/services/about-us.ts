/**
 * about-us service
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreService('api::about-us.about-us');
export default {
  async getAboutPage() {
    return await strapi.documents(
      "api::about-us.about-us"
    ).findFirst({
      populate: {
        hero: {
          populate: "*",
        },
      },
    });
  },
};