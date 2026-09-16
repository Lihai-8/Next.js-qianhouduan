"use client";

import useSWR from "swr";

type HelloResponse = {
  message: string;
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch hello message");
  }
  return response.json() as Promise<HelloResponse>;
};

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/hello", fetcher);

  return (
    <div className="flex flex-1 w-full flex-col bg-white font-sans dark:bg-black">
      <main className="flex flex-1 w-full items-center justify-center px-16">
        <p className="text-2xl font-semibold tracking-tight text-center text-black dark:text-zinc-50">
          {isLoading && "加载中..."}
          {error && "获取问候语失败"}
          {data?.message}
        </p>
      </main>
    </div>
  );
}
