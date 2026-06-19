/**
 * about-us router
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::about-us.about-us');

export default {
  routes: [
    {
      method: "GET",
      path: "/about-full",
      handler: "about-us.full",
      config: {
        auth: false,
      },
    },
  ],
};