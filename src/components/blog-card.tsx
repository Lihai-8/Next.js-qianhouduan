import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/app/blog/posts";

export function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <Card>
      <Image
        src={post.coverImage}
        alt={post.coverAlt}
        width={1200}
        height={630}
        className="h-48 w-full object-cover"
        priority={priority}
      />
      <CardHeader>
        <time className="text-sm text-muted-foreground">{post.date}</time>
        <CardTitle className="text-xl font-semibold tracking-tight">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:underline underline-offset-4"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-base leading-7">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href={`/blog/${post.slug}`}
          className={buttonVariants({ variant: "default", size: "sm" })}
        >
          阅读全文 →
        </Link>
      </CardFooter>
    </Card>
  );
}
