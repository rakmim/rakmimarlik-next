import React from "react";
import ServiceContainer from "../container/ServiceContainer";
import PageBanner from "../components/PageBanner";
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

const OurServices = () => {
  return (

    <>
    <SeoHead {...seoMeta.services} />

      <PageBanner activePage="Hizmetlerimiz" />
      <ServiceContainer />
    </>
  );
};

export default OurServices;
