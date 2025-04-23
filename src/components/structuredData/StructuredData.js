// src/components/StructuredData.js
import Head from 'next/head';

const StructuredData = ({ data }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": data.title,
    "description": data.summary,
    "creator": {
      "@type": "Person",
      "name": data.architect
    },
    "dateCreated": data.date,
    "locationCreated": {
      "@type": "Place",
      "name": data.location
    },
    "url": data.url,
    "image": data.image || "https://rakmimarlik.com/images/default-project.jpg"
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
};

export default StructuredData;
