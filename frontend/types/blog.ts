export interface Category {
  title: string;
  slug: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  category: Category;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  pageCount: number;
}

export interface BlogResponse {
  blogs: Blog[];
  categories: Category[];
  pagination: Pagination;
}