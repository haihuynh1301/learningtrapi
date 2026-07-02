import type { Core } from "@strapi/strapi";


interface QueryBlogsOptions {
  category?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export async function queryBlogs(
  strapi: Core.Strapi,
  options: QueryBlogsOptions
) {
  const {
    category,
    search,
    page = 1,
    pageSize = 6,
  } = options;

  const filters: any = {};

  if (category) {
    filters.category = {
      slug: {
        $eq: category,
      },
    };
  }

  if (search) {
    filters.title = {
      $containsi: search,
    };
  }

  const total = await strapi
    .documents("api::blog.blog")
    .count({
      status: "published",
      filters,
    });

  const blogs = await strapi
    .documents("api::blog.blog")
    .findMany({
      status: "published",

      filters,

      populate: {
        thumbnail: true,
        category: true,
      },

      sort: {
        publishedAt: "desc",
      },

      start: (page - 1) * pageSize,

      limit: pageSize,
    });

  return {
    blogs,

    pagination: {
      page,

      pageSize,

      total,

      pageCount: Math.ceil(total / pageSize),
    },
  };
}

export async function queryCategories(
  strapi: Core.Strapi
) {
  return await strapi
    .documents("api::category.category")
    .findMany({
      status: "published",

      sort: {
        title: "asc",
      },
    });
}

export async function queryBlogBySlug(
  strapi: Core.Strapi,
  slug: string
) {
  const blogs = await strapi
    .documents("api::blog.blog")
    .findMany({
      status: "published",

      filters: {
        slug: {
          $eq: slug,
        },
      },

      populate: {

            thumbnail: true,

            category: true

        },

      limit: 1,
    });

  return blogs[0] ?? null;
}