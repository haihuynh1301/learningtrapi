import { factories } from "@strapi/strapi";
import { queryBlogBySlug } from "../utils/query";
import { mapBlogDetail } from "../utils/mapper";

import {
  queryBlogs,
  queryCategories,
} from "../utils/query";

import {
  mapBlogCard,
  mapCategory,
} from "../utils/mapper";

export default factories.createCoreService(
  "api::blog.blog",
  ({ strapi }) => ({
    async getBlogs(
      category?: string,
      search?: string,
      page = 1,
      pageSize = 6
    ) {
      const result = await queryBlogs(strapi, {
        category,
        search,
        page,
        pageSize,
      });

      const categories =
        await queryCategories(strapi);

      return {
        blogs: result.blogs.map(mapBlogCard),

        categories:
          categories.map(mapCategory),

        pagination: result.pagination,
      };
    },

    async getBlogBySlug(slug: string) {
        const blog = await queryBlogBySlug(
            strapi,
            slug
        );

        if (!blog) {
            return null;
        }

        return {
            blog: mapBlogDetail(blog),
        };
    },
  })
);