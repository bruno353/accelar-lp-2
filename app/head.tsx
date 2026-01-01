export default function Head() {
  return (
    <>
      <title>Accelar</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Accelar" />
      <link rel="icon" href="/images/new-logo.svg" />

      {/* Open Graph / Google Search - usar imagem quadrada com fundo transparente */}
      <meta property="og:image" content="/images/og-logo.svg" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:type" content="image/svg+xml" />

      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" href="/images/og-logo.svg" />
    </>
  );
}
