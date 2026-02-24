"use client";

import { BLOG_POSTS } from "@/lib/posts";
import { BlogListClient } from "@/components/Blog/blog-list-client";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F0] pt-[180px] pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            The Accelar Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-black tracking-tight">
            Engineering insights
          </h1>
          <p className="mt-4 text-body-color text-lg leading-relaxed">
            Deep technical guides on AI, blockchain infrastructure, distributed
            systems, and execution strategy — written by engineers, for
            engineers.
          </p>
        </div>

        {/* Post grid */}
        <BlogListClient posts={BLOG_POSTS} />
      </div>
    </main>
  );
}
