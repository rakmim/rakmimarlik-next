import React from "react";
import { useRouter } from "next/router";
import PageBannerWithTwo from "@/components/PageBannerWithTwo";
import TeamDetailInfo from "@/components/team/TeamDetailInfo";
import SeoHead from "@/components/SeoHead";
import seoMeta from "@/data/seoMeta";
import teams from "@/data/teams";

const TeamDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const member = teams.find((item) => item.slug === slug);

  if (!member) {
    return <div className="text-center text-white p-5">Kişi bulunamadı.</div>;
  }

  return (
    <>
      <SeoHead {...seoMeta.team} />
      <PageBannerWithTwo
        activePage={member.name}
        previousPageUrl="/about"
        previousPageTitle="Hakkımızda"
      />
      <TeamDetailInfo data={member} />
    </>
  );
};

export default TeamDetailsPage;
