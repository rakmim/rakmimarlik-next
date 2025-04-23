import React from "react";

const SocialMediaInfo = () => {
  return (
    <div className="social_sites">
      <ul className="d-flex align-items-center justify-content-center">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rakmimarlik/"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/rak-architecture-design/posts/?feedView=all"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaInfo;
