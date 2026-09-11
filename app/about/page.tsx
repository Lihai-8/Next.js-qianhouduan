import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Next.js",
  description: "了解 Next.js：React 全栈框架的核心能力与适用场景",
};

const features = [
  {
    title: "App Router",
    body: "用文件系统定义路由。在 app 目录下创建文件夹和 page.tsx，即可得到对应 URL，例如本页对应 /about。",
  },
  {
    title: "服务端与客户端组件",
    body: "默认在服务端渲染，减少发到浏览器的 JavaScript。需要交互时再声明为客户端组件。",
  },
  {
    title: "数据获取与缓存",
    body: "在服务端组件中直接 fetch 或访问数据源，配合缓存与重新验证，页面可以静态生成，也可以按需动态渲染。",
  },
  {
    title: "优化与部署",
    body: "内置图片、字体、脚本优化，以及 API / Server Actions。可部署到 Node、边缘运行时或 Vercel 等平台。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 px-16 py-24 bg-white dark:bg-black">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
            About
          </p>
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Next.js 是什么
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js 是基于 React 的全栈 Web 框架。它把路由、渲染、数据获取和部署约定整合在一起，让你可以同时写界面和后端逻辑，而不必从零拼装工具链。
          </p>
        </div>
        <ul className="flex flex-col gap-8">
          {features.map((feature) => (
            <li key={feature.title} className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                {feature.title}
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/"
          >
            返回首页
          </Link>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            官方文档
          </a>
        </div>
      </main>
    </div>
  );
}
