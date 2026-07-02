import { BlogCardDTO, CategoryDTO } from "./types";

export function mapBlogCard(blog: any): BlogCardDTO {
  return {
    id: blog.id,

    title: blog.title,

    slug: blog.slug,

    excerpt: blog.excerpt,

    thumbnail: blog.thumbnail?.url ?? null,

    category: blog.category
      ? {
          title: blog.category.title,
          slug: blog.category.slug,
        }
      : null,
  };
}

export function mapCategory(category: any): CategoryDTO {
  return {
    title: category.title,

    slug: category.slug,
  };
}

export function mapBlogDetail(blog: any) {
  return {
    id: blog.id,

    title: blog.title,

    slug: blog.slug,

    excerpt: blog.excerpt,

    content: blog.content,

    thumbnail: blog.thumbnail?.url ?? null,

    category: blog.category
      ? {
          title: blog.category.title,
          slug: blog.category.slug,
        }
      : null,
  };
}