import React from "react";
import ContactContainer from "../container/ContactContainer";
import PageBanner from "../components/PageBanner";
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

const Contact = () => {
  return (
    <>
    <SeoHead {...seoMeta.contact} />

      <PageBanner
        pageTitle="Sayfalar"
        title="İletişim"
        activePage="İletişim"
      ></PageBanner>
      <ContactContainer />
    </>
  );
};

export default Contact;
