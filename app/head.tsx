export default function Head() {
  return (
    <>
      <title>Accelar | Enterprise Software Infrastructure & AI Solutions</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8V8ST6GR8N"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8V8ST6GR8N', { page_path: window.location.pathname });
          `,
        }}
      />
      <meta
        name="description"
        content="Accelar builds enterprise-grade blockchain infrastructure and AI-driven software solutions for the next generation of intelligent assets."
      />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://www.accelar.io" />
      <link rel="icon" href="/images/new-logo.svg" />
      <link rel="apple-touch-icon" href="/images/og-logo.svg" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Accelar" />
      <meta
        property="og:title"
        content="Accelar | Enterprise Software Infrastructure & AI Solutions"
      />
      <meta
        property="og:description"
        content="Accelar builds enterprise-grade software infrastructure and AI-driven software solutions for the next generation of intelligent assets."
      />
      <meta property="og:url" content="https://www.accelar.io" />
      <meta property="og:image" content="https://www.accelar.io/images/og-logo.svg" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Accelar | Enterprise Software Infrastructure & AI Solutions"
      />
      <meta
        name="twitter:description"
        content="Accelar builds enterprise-grade blockchain infrastructure and AI-driven software solutions for the next generation of intelligent assets."
      />
      <meta name="twitter:image" content="https://www.accelar.io/images/og-logo.svg" />
      <meta name="twitter:site" content="@accelarlabs" />
    </>
  );
}
