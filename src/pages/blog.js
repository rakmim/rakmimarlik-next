import React from "react";
import BlogContainer from "@/container/BlogContainer";
import PageBanner from "@/components/PageBanner";
import SeoHead from "@/components/SeoHead";
import seoMeta from "@/data/seoMeta";
import { getBlogsFromNotion } from "@/lib/notion";

const BlogPage = ({ blogs }) => {
  return (
    <>
      <SeoHead {...seoMeta.blog} />
      <PageBanner activePage="Blog" />
      <BlogContainer blogs={blogs} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const blogs = await getBlogsFromNotion();

    return {
      props: { blogs },
      revalidate: 60, // Her 60 saniyede bir tekrar oluşturulabilir (ISR)
    };
  } catch (error) {
    console.error("❌ Blog verileri alınamadı:", error);

    return {
      props: { blogs: [] }, // Boş liste fallback
    };
  }
}

export default BlogPage;
