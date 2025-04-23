import React from "react";
import FaqContainer from "../container/FaqContainer";
import PageBanner from "../components/PageBanner";
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

const FrequentlyAskedQuestions = () => {
  return (
    <>
    <SeoHead {...seoMeta.faq} />

    <PageBanner activePage="SSS"/>
      <FaqContainer />
    </>
  );
};

export default FrequentlyAskedQuestions;
