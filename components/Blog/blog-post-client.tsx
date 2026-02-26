"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost, ContentBlock } from "@/lib/posts";
import NewsletterSignup from "../NewsletterSignup";

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseInlineLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary/60 transition-colors"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-black/80 text-[17px] leading-[1.8] mb-6">
          {parseInlineLinks(block.text)}
        </p>
      );
    case "heading":
      return (
        <h2 className="text-2xl sm:text-3xl font-medium text-black mt-12 mb-5 tracking-tight">
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-xl font-medium text-black mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-black/80 text-[16px] leading-[1.7]"
            >
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-[11px]" />
              <span>{parseInlineLinks(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote className="border-l-[3px] border-primary/40 pl-6 py-2 my-8 bg-primary/[0.04] rounded-r-xl pr-6">
          <p className="text-black/75 text-[17px] leading-[1.75] italic">
            {parseInlineLinks(block.text)}
          </p>
        </blockquote>
      );
    case "callout":
      return (
        <div className="my-10 rounded-2xl bg-primary/[0.06] border border-primary/15 p-6 sm:p-8">
          <p className="text-lg font-medium text-black mb-2">{block.title}</p>
          <p className="text-body-color text-[15px] leading-relaxed">
            {block.text}
          </p>
        </div>
      );
    case "divider":
      return (
        <div className="flex items-center justify-center gap-2 my-10">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </div>
      );
  }
}

export function BlogPostClient({
  post,
  otherPosts,
}: {
  post: BlogPost;
  otherPosts: BlogPost[];
}) {
  return (
    <main className="min-h-screen bg-[#F8F8F0]">
      {/* Article header */}
      <div
        className={`relative pt-[180px] sm:pt-[200px] pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br ${post.coverGradient}`}
      >
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-[#F8F8F0]/80 backdrop-blur-sm" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-body-color hover:text-black transition-colors mb-8"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to blog
            </Link>

            <div className="flex items-center gap-3 text-sm text-body-color mb-5">
              <span className="inline-flex items-center rounded-full bg-white/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-black">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="w-1 h-1 rounded-full bg-body-color/40" />
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-black leading-[1.15] tracking-tight">
              {post.title}
            </h1>

            <p className="mt-5 text-body-color text-lg leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <motion.article
        className="mx-auto max-w-3xl px-6 sm:px-8 py-12 sm:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {post.content.map((block, i) => (
          <ContentRenderer key={i} block={block} />
        ))}
      </motion.article>

      {/* Newsletter signup */}
      <NewsletterSignup />

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="border-t border-gray-200 bg-[#F8F8F0]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <h2 className="text-2xl font-light text-black mb-8">
              More articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-[0_8px_30px_rgba(9,14,52,0.08)] transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-xs text-body-color mb-3">
                    <span className="inline-flex items-center rounded-full bg-[#F8F8F0] px-2.5 py-0.5 text-xs font-medium">
                      {p.category}
                    </span>
                    <span>{p.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-medium text-black leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-body-color text-sm leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
