import React from 'react';


const ProjectDetailsSlider = ({ img, index }) => {
  return (
    <div className="gallery-image ratio ratio-16x9">
      <img
        src={img}
        alt={`Slide ${index + 1}`}
        loading="lazy"
        className="img-fluid"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/rak/default-project.jpg";
        }}
      />
    </div>
  );
};

export default ProjectDetailsSlider;
