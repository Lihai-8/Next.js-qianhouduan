import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-start justify-center gap-8 px-16 py-20">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          404
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
          页面不存在
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          你访问的地址没有对应页面，可能是链接写错了，或者页面已经被移除。
        </p>
        <Link
          href="/"
          className="flex h-12 w-auto items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          返回首页
        </Link>
      </main>
    </div>
  );
}
