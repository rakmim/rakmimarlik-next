import React from "react";
import { useRouter } from "next/router";
import PageBannerWithTwo from "@/components/PageBannerWithTwo";
import TeamDetailInfo from "@/components/team/TeamDetailInfo";
import SeoHead from "@/components/SeoHead";
import { getTeamFromNotion } from "@/lib/notion";
import Head from "next/head"; // Structured Data için ekledik

const TeamDetailsPage = ({ member }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center text-white p-5">Yükleniyor...</div>;
  }

  if (!member) {
    return <div className="text-center text-white p-5">Kişi bulunamadı.</div>;
  }

  const canonicalUrl = `https://rakmimarlik.com/team-detail/${member.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.designation,
    "description": member.bio,
    "url": canonicalUrl,
    "image": `https://rakmimarlik.com/images/team/${member.slug}.jpg`,
    "worksFor": {
      "@type": "Organization",
      "name": "RAK Mimarlık"
    }
  };

  return (
    <>
      <SeoHead
        title={`${member.name} | RAK Mimarlık`}
        description={`${member.name} - ${member.designation}`}
        url={canonicalUrl}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <PageBannerWithTwo
        activePage={member.name}
        previousPageUrl="/about"
        previousPageTitle="Hakkımızda"
      />
      <TeamDetailInfo data={member} />
    </>
  );
};

export async function getStaticPaths() {
  const team = await getTeamFromNotion();

  const paths = team.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const team = await getTeamFromNotion();
  const member = team.find((item) => item.slug === params.slug) || null;

  return {
    props: { member },
    revalidate: 60,
  };
}

export default TeamDetailsPage;
