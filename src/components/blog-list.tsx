import { getPosts } from "@/app/blog/posts";
import { BlogCard } from "./blog-card";

export async function BlogList() {
  const posts = await getPosts();

  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} priority={index === 0} />
      ))}
    </div>
  );
}
