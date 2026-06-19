/**
 * global router
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::global.global');
export default {
  routes: [
    {
      method: "GET",
      path: "/global-full",
      handler: "global.full",
      config: {
        auth: false,
      },
    },
  ],
};
