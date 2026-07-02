// export interface BlogCardDTO {
//   id: number;
//   title: string;
//   slug: string;
//   excerpt: string;
//   thumbnail: string | null;
//   category: {
//     title: string;
//     slug: string;
//   } | null;
// }

// export interface CategoryDTO {
//   title: string;
//   slug: string;
// }

// export interface BlogListResponse {
//   blogs: BlogCardDTO[];
//   categories: CategoryDTO[];
// }

// export interface BlogQueryOptions {
//     category?: string;
//     search?: string;

//     page?: number;
//     pageSize?: number;

//     sort?: "latest" | "oldest";
// }

export interface BlogCardDTO {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string | null;
  category: {
    title: string;
    slug: string;
  } | null;
}

export interface CategoryDTO {
  title: string;
  slug: string;
}

export interface PaginationDTO {
  page: number;
  pageSize: number;
  total: number;
  pageCount: number;
}

export interface BlogListDTO {
  blogs: BlogCardDTO[];
  categories: CategoryDTO[];
  pagination: PaginationDTO;
}

export interface BlogDetailDTO {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: any;
  thumbnail: string | null;
  category: {
    title: string;
    slug: string;
  } | null;
}