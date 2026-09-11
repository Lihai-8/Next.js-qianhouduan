import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogList } from "@/src/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "阅读最新的 Next.js 实践与前端开发文章",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-10 px-16 py-20">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex w-full flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
            Blog
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            最新文章
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            这里汇总了关于 Next.js 与前端开发的实践笔记，帮助你更快上手全栈应用开发。
          </p>
        </div>
        <BlogList />
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← 返回首页
        </Link>
      </main>
    </div>
  );
}