import React from "react";
import Mission from "../components/aboutus/Mission";
import TeamContainer from "../container/TeamContainer";
import TextAbout from "../components/aboutus/TextAbout";
import SeoHead from "@/components/SeoHead";
import seoMeta from "@/data/seoMeta";

const AboutUs = () => {

  return (
    
    <main className="wrapper">
      <SeoHead {...seoMeta.about} />
      <Mission />
      <TextAbout />
      <TeamContainer />
    </main>
  );
};

export default AboutUs;
