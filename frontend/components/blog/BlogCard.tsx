import Link from "next/link";
import { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      style={{
        display: "block",
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        textDecoration: "none",
        color: "#222",
      }}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.thumbnail}`}
        alt={blog.title}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          borderRadius: 6,
        }}
      />

      <div
        style={{
          marginTop: 12,
          fontSize: 13,
          color: "#666",
        }}
      >
        {blog.category.title}
      </div>

      <h3>{blog.title}</h3>

      <p>{blog.excerpt}</p>
    </Link>
  );
}