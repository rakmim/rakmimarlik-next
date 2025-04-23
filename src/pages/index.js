import React from "react";
import SeoHead from "@/components/SeoHead";
import seoMeta from "@/data/seoMeta";
import SliderContainer from "@/container/SliderContainer";
import { getSliderProjectsFromNotion } from "@/lib/notion";

const HomePage = ({ sliderProjects }) => {
  return (
    <>
      <SeoHead {...seoMeta.home} />
      <SliderContainer slides={sliderProjects} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const sliderProjects = await getSliderProjectsFromNotion();
    return {
      props: { sliderProjects },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Slider verisi alınamadı:", error);
    return {
      props: { sliderProjects: [] },
    };
  }
}

export default HomePage;
