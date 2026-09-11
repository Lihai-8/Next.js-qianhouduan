export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "app-router",
    title: "从零认识 App Router",
    excerpt:
      "用文件系统定义路由，在 app 目录下创建 page.tsx 即可得到对应 URL。本文梳理布局、嵌套路由与动态段的基本用法。",
    date: "2026-03-01",
    body: [
      "App Router 把路由写进文件系统。在 app 目录下新建文件夹和 page.tsx，浏览器就能访问对应路径。例如 app/blog/page.tsx 对应 /blog，app/blog/[slug]/page.tsx 对应 /blog/某篇文章。",
      "同一个文件夹里还可以放 layout.tsx，用来共享导航、页脚或样式。子页面会嵌套在父布局里渲染，不必在每个页面重复写外壳。",
      "动态段用方括号表示，比如 [slug]。页面通过 await params 拿到 slug，再去 mock 数据或数据库里查找文章。找不到时调用 notFound()，就会显示自定义 404。",
      "列表页只展示标题和摘要，详情页用同一份数据渲染全文。这样点击卡片进入文章时，内容来源一致，也不会出现链接有效、页面却是空的情况。",
    ],
  },
  {
    slug: "server-components",
    title: "服务端组件与数据获取",
    excerpt:
      "默认在服务端渲染可以减少发到浏览器的 JavaScript。结合 fetch 缓存与重新验证，页面既能静态生成，也能按需动态渲染。",
    date: "2026-03-10",
    body: [
      "App Router 里的页面默认是服务端组件。它们在服务器上完成渲染，再把 HTML 发给浏览器，因此不必把数据请求逻辑打包进客户端 JavaScript。",
      "需要点击、输入或使用浏览器 API 时，再给组件加上 use client。常见做法是让页面保持服务端组件，只把按钮、表单等交互部分拆成客户端组件。",
      "在服务端组件里可以直接读取 mock 数据、调用数据库，或使用 fetch。Next.js 可以对请求结果做缓存，也可以按时间或标签重新验证，让页面在静态和动态之间切换。",
      "本页的正文就来自本地 mock 数据：用 slug 查出对应文章，再把段落渲染出来。真实项目里可以把 posts 换成 CMS 或数据库查询，页面结构可以保持不变。",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export async function getPosts() {
  return posts;
}
