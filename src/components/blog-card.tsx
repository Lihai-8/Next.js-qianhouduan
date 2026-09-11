import Link from "next/link";
import type { BlogPost } from "@/app/blog/posts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-black/[.08] p-6 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]">
      <time className="text-sm text-zinc-500 dark:text-zinc-400">
        {post.date}
      </time>
      <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:underline underline-offset-4"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {post.excerpt}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-sm font-medium text-zinc-950 dark:text-zinc-50"
      >
        阅读全文 →
      </Link>
    </article>
  );
}
