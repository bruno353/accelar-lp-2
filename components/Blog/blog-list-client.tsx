"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/posts";

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {posts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href={`/blog/${post.slug}`} className="group block h-full">
            <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-one hover:shadow-[0_8px_30px_rgba(9,14,52,0.08)] transition-all duration-500 overflow-hidden">
              {/* Cover */}
              <div
                className={`relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br ${post.coverGradient}`}
              >
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-black">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs text-body-color mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="text-xl font-medium text-black leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="mt-3 text-body-color text-[15px] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                  Read article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
