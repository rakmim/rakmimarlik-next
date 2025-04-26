import React from "react";
import Mission from "../components/aboutus/Mission";
import TeamContainer from "../container/TeamContainer";
import TextAbout from "../components/aboutus/TextAbout";
import SeoHead from "@/components/SeoHead";
import seoMeta from "@/data/seoMeta";
import { getTeamFromNotion } from "@/lib/notion";

export async function getStaticProps() {
  const teamData = await getTeamFromNotion();

  return {
    props: {
      teamData,
    },
    revalidate: 60,
  };
}

const AboutUs = ({ teamData }) => {

  return (
    
    <main className="wrapper">
      <SeoHead {...seoMeta.about} />
      <Mission />
      <TextAbout />
      <TeamContainer teamData={teamData} />
    </main>
  );
};

export default AboutUs;
