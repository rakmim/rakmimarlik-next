import React from "react";
import ProjectContainer from "../container/ProjectContainer";
import PageBanner from "../components/PageBanner";
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

import { getProjectsFromNotion } from "@/lib/notion"; // Notion'dan verileri çeker
import fallbackProjects from "@/data/projects";        // Yerel fallback verisi

const ProjectsAll = ({ projects }) => {
  return (
    <>
      <SeoHead {...seoMeta.projects} />
      <PageBanner activePage="Projelerimiz" />
      <ProjectContainer projects={projects} />
    </>
  );
};

export async function getStaticProps() {
  let projects = [];

  try {
    projects = await getProjectsFromNotion();

    if (!projects || projects.length === 0) {
      console.warn("Notion veri tabanı boş geldi, fallback veriler kullanılacak.");
      projects = fallbackProjects;
    }
  } catch (err) {
    console.error("Notion'dan veri alınamadı. Fallback projeleri kullanılacak:", err);
    projects = fallbackProjects;
  }

  return {
    props: { projects },
    revalidate: 30, // 30 saniyede bir yeniden oluşturulabilir
  };
}

export default ProjectsAll;
