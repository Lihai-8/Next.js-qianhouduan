import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "文章不存在" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-8 px-16 py-20">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Blog
        </p>
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {post.date}
        </time>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
          {post.title}
        </h1>
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          width={1200}
          height={630}
          className="w-full max-w-4xl rounded-xl object-cover"
          priority
        />
        <div className="flex max-w-3xl flex-col gap-6">
          {post.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <Link
          href="/blog"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← 返回文章列表
        </Link>
      </main>
    </div>
  );
}
