"use client";

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
};

const breadcrumbSchema = {
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
      name: "About",
      item: "https://www.accelar.io/about",
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

const JsonLd = () => {
  return (
    <>
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
};

export default JsonLd;
