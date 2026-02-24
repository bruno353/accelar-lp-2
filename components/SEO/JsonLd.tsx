"use client";

import { usePathname } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/posts";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Accelar",
  url: "https://www.accelar.io",
  logo: "https://www.accelar.io/images/new-logo.svg",
  description:
    "Enterprise-grade blockchain infrastructure and AI-driven software solutions for the next generation of intelligent assets.",
  email: "contact@accelar.io",
  sameAs: [
    "https://github.com/Accelar-labs",
    "https://twitter.com/accelarlabs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@accelar.io",
    contactType: "customer support",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Accelar",
  url: "https://www.accelar.io",
  description:
    "Enterprise-grade blockchain infrastructure and AI-driven software solutions.",
  publisher: {
    "@type": "Organization",
    name: "Accelar",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.accelar.io/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbHomeSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.accelar.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.accelar.io/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: "https://www.accelar.io/contact",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Privacy Policy",
      item: "https://www.accelar.io/privacy-policy",
    },
  ],
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Navigation",
  url: "https://www.accelar.io",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Blog",
      url: "https://www.accelar.io/blog",
    },
    {
      "@type": "WebPage",
      name: "Contact",
      url: "https://www.accelar.io/contact",
    },
    ...BLOG_POSTS.slice(0, 6).map((post) => ({
      "@type": "WebPage",
      name: post.title.length > 60 ? post.title.slice(0, 57) + "..." : post.title,
      url: `https://www.accelar.io/blog/${post.slug}`,
    })),
  ],
};

function buildBlogListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accelar Blog - Engineering Insights",
    url: "https://www.accelar.io/blog",
    description:
      "Deep technical guides on AI, blockchain infrastructure, distributed systems, and execution strategy.",
    publisher: {
      "@type": "Organization",
      name: "Accelar",
      logo: {
        "@type": "ImageObject",
        url: "https://www.accelar.io/images/new-logo.svg",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.accelar.io/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

function buildBlogPostSchema(slug: string) {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const wordCount = post.content
    .filter((b) => b.type === "paragraph")
    .reduce((acc, b) => acc + (b as { text: string }).text.split(/\s+/).length, 0);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Accelar",
      url: "https://www.accelar.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Accelar",
      logo: {
        "@type": "ImageObject",
        url: "https://www.accelar.io/images/new-logo.svg",
      },
    },
    image: `https://www.accelar.io${post.coverImage}`,
    url: `https://www.accelar.io/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.accelar.io/blog/${post.slug}`,
    },
    wordCount,
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

function buildBlogPostBreadcrumb(slug: string) {
  const post = getPostBySlug(slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.accelar.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.accelar.io/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.accelar.io/blog/${post.slug}`,
      },
    ],
  };
}

const JsonLd = () => {
  const pathname = usePathname();
  const isBlogList = pathname === "/blog";
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";
  const slug = isBlogPost ? pathname.split("/").pop() || "" : "";

  return (
    <>
      {/* Global schemas - always present */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationSchema),
        }}
      />

      {/* Homepage breadcrumb */}
      {!isBlogList && !isBlogPost && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbHomeSchema),
          }}
        />
      )}

      {/* Blog list page */}
      {isBlogList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBlogListSchema()),
          }}
        />
      )}

      {/* Blog post page */}
      {isBlogPost && slug && (
        <>
          {buildBlogPostSchema(slug) && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(buildBlogPostSchema(slug)),
              }}
            />
          )}
          {buildBlogPostBreadcrumb(slug) && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(buildBlogPostBreadcrumb(slug)),
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default JsonLd;
