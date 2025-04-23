import React from 'react';
import { useRouter } from 'next/router';
import { EffectFade, Navigation } from 'swiper/modules';
import projects from '../../data/projects';
import ProjectDetailInfoCard from '../../components/project/ProjectDetailInfoCard';
import Head from 'next/head';
import StructuredData from '@/components/structuredData/StructuredData';

import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectDetailsSlider from '../../components/slider/ProjectDetailsSlider';
import PageBannerWithTwo from '../../components/PageBannerWithTwo';
import SeoHead from '@/components/SeoHead';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const generateImages = (number, max = 10) =>
  Array.from({ length: max }, (_, i) =>
    `/images/rak/${number}/${String(i + 1).padStart(2, '0')}.jpg`
  );

const ProjectDetails = () => {
  const { slug } = useRouter().query;
  const project = projects.find(p => p.slug === slug);

  if (!project) return <p>Proje bulunamadı.</p>;

  const generatedImages = generateImages(project.number, 10);

  // ✅ Use at least one default image if none exist
  const validImages = generatedImages.length > 0
    ? generatedImages
    : ["/images/default-project.jpg"];
  return (
    <><SeoHead
      title={project.title}
      description={project.summary}
      image={project.image}
      url={`https://rakmimarlik.com/project-details/${slug}`} />

      <StructuredData
        data={{
          title: project.title,
          summary: project.summary,
          architect: project.architect,
          date: project.date,
          location: project.location,
          url: `https://rakmimarlik.com/project-details/${slug}`,
          image: `/images/rak/${project.number}/01.jpg`
        }}
      />


      <section className="project-details">
        <PageBannerWithTwo activePage={project.title} previousPageUrl="/projects" previousPageTitle="Projeler" />
        <div className="container">
          {/* 🖼️ Swiper */}
          <Swiper
            modules={[EffectFade, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            effect="fade"
            slidesPerView={1}
            loop={true}
            autoHeight={true}
            navigation={true} // ✅ use this for default buttons
          >
            {validImages.map((img, index) => (
              <SwiperSlide key={index}>
                <ProjectDetailsSlider img={img} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ℹ️ Project Info */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="col-lg-6">
              <ProjectDetailInfoCard
                name={project.title}
                architect={project.architect}
                concept={project.concept}
                date={project.date}
                location={project.location}
                shareUrl={`https://rakmimarlik.com/project-details/${slug}`} />
            </div>
          </div>
        </div>
      </section></>
  );
};

export default ProjectDetails;