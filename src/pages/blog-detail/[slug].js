import React from "react";
import { useRouter } from "next/router";
import PageBannerWithTwo from "@/components/PageBannerWithTwo";
import BlogDetailContainer from "@/container/BlogDetailContainer";
import SeoHead from "@/components/SeoHead";
import BlogStructuredData from "@/components/structuredData/BlogStructuredData";
import { getBlogsFromNotion } from "@/lib/notion";

const BlogDetailPage = ({ blog }) => {
  const router = useRouter();

  // Fallback gösterimi
  if (router.isFallback) {
    return <div className="text-center text-white p-5">Yükleniyor...</div>;
  }

  if (!blog) {
    return <div className="text-center text-white p-5">Blog yazısı bulunamadı.</div>;
  }

  return (
    <>
      <SeoHead
        title={blog.title}
        description={blog.summary}
        url={`https://rakmimarlik.com/blog-detail/${blog.slug}`} />
      <BlogStructuredData blog={blog} />

      <PageBannerWithTwo
        activePage={blog.title}
        previousPageUrl="/blog"
        previousPageTitle="Blog"
      />
      <BlogDetailContainer blog={blog} />
    </>
  );
};

export async function getStaticPaths() {
  const blogs = await getBlogsFromNotion();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: true, // fallback: 'blocking' da olabilir
  };
}

export async function getStaticProps({ params }) {
  const blogs = await getBlogsFromNotion();
  const blog = blogs.find((item) => item.slug === params.slug) || null;

  return {
    props: {
      blog,
    },
    revalidate: 60, // 1 dakikada bir yeniden oluşturulabilir
  };
}

export default BlogDetailPage;
