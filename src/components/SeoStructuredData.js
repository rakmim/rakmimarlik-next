import Head from 'next/head';

const SeoStructuredData = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RAK Mimarlık",
            "url": "https://rakmimarlik.com",
            "logo": "https://rakmimarlik.com/images/logo.png",
            "sameAs": [
              "https://www.instagram.com/rakmimarlik" // varsa diğer sosyal medya profilleri
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://rakmimarlik.com",
            "name": "RAK Mimarlık",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rakmimarlik.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Head>
  );
};

export default SeoStructuredData;
