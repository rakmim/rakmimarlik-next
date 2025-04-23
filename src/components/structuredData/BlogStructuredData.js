import Head from 'next/head';

const BlogStructuredData = ({ blog }) => {
  const publishedDate = new Date(blog.date).toISOString();

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rakmimarlik.com/blog-detail/${blog.slug}`
            },
            "headline": blog.title,
            "description": blog.summary,
            "image": `https://rakmimarlik.com/images/blog/${blog.slug}.jpg`, // Varsa kapak görseli
            "author": {
              "@type": "Person",
              "name": blog.author || "Rak Mimarlık"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Rak Mimarlık",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rakmimarlik.com/images/logo.png"
              }
            },
            "datePublished": publishedDate,
            "dateModified": publishedDate
          })
        }}
      />
    </Head>
  );
};
