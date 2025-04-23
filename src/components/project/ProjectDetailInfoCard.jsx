import React from 'react';

const ProjectDetailInfoCard = ({
  name,
  architect,
  concept,
  date,
  location,
  shareUrl = "https://rakmimarlik.com"
}) => {
  return (
    <div className="sidebar">
      <div className="project-information">
        <h6 className="widget-title">
          Project Information
          <span className="title-line"></span>
        </h6>
        <ul>
          <li>
            <span className="data">Project Name:</span> <span className="value">{name}</span>
          </li>
          <li>
            <span className="data">Architect:</span> <span className="value">{architect}</span>
          </li>
          <li>
            <span className="data">Concept:</span> <span className="value">{concept}</span>
          </li>
          <li>
            <span className="data">Date:</span> <span className="value">{date}</span>
          </li>
          <li>
            <span className="data">Location:</span> <span className="value">{location}</span>
          </li>
        </ul>

        <div className="project-share">
          <ul className="social-links d-flex align-items-center gap-2 list-unstyled">
            <li><strong>Share:</strong></li>
            <li>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rakmimarlik" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@rakmimarlik" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
            <li>
              <a href={`https://www.pinterest.com/pin/create/button/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailInfoCard;
