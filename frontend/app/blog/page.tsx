import BlogGrid from "@/components/blog/BlogGrid";
import { getBlogs } from "@/lib/blog";

export default async function BlogPage() {
  const data = await getBlogs();

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <h1>Our Blog</h1>

      <BlogGrid blogs={data.blogs} />
    </main>
  );
}