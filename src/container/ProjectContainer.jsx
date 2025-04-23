import React from "react";
import ProjectCard from "../components/project/ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <section className="services bg-dark-100 pb-0">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4" key={project.slug}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
