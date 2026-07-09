import { BlogResponse } from "@/types/blog";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export interface GetBlogsParams {
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
}

export async function getBlogs(
  params: GetBlogsParams = {}
): Promise<BlogResponse> {
  const searchParams = new URLSearchParams();

  if (params.page) {
    searchParams.set("page", String(params.page));
  }

  if (params.pageSize) {
    searchParams.set("pageSize", String(params.pageSize));
  }

  if (params.category) {
    searchParams.set("category", params.category);
  }

  if (params.search) {
    searchParams.set("search", params.search);
  }

  const res = await fetch(
    `${API_URL}/api/blogs?${searchParams.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Cannot fetch blogs");
  }

  return res.json();
}