import type { Metadata } from "next";
import { BlogList } from "@/src/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "阅读最新的 Next.js 实践与前端开发文章",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-6 px-16 py-20">
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          最新文章
        </h1>
        <BlogList />
      </main>
    </div>
  );
}
