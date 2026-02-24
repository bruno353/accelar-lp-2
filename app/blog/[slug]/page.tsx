"use client";

import { usePathname } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/posts";
import { BlogPostClient } from "@/components/Blog/blog-post-client";

export default function BlogPostPage() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "";
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#F8F8F0] pt-[180px] pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-light text-black">Post not found</h1>
          <a href="/blog" className="text-primary mt-4 inline-block">
            Back to blog
          </a>
        </div>
      </main>
    );
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return <BlogPostClient post={post} otherPosts={otherPosts} />;
}
