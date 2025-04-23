import Head from 'next/head';

export default function SeoHead({
  title = 'RAK Mimarlık',
  description = 'RAK Mimarlık, estetik ve işlevselliği birleştiren mimari projeler sunar.',
  image = '/images/seo/default.jpg',
  url = 'https://rakmimarlik.com',
  keywords = 'mimarlık, iç mimarlık, tasarım, projeler',
}) {
  const fullTitle = `${title} | RAK Mimarlık`;

  return (
    <Head>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="RAK Mimarlık" />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
