import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async find(ctx) {
      const {
        category,
        search,
        page = "1",
        pageSize = "6",
      } = ctx.query;

      return await strapi
        .service("api::blog.blog")
        .getBlogs(
          category as string,
          search as string,
          Number(page),
          Number(pageSize)
        );
    },

    async findOne(ctx) {
      const { slug } = ctx.params;

      return await strapi
        .service("api::blog.blog")
        .getBlogBySlug(slug);
    },

    async findBySlug(ctx) {

        const { slug } = ctx.params;

        return await strapi
            .service("api::blog.blog")
            .getBlogBySlug(slug);

    }

  })
);