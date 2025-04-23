import React from "react";

const TeamCard = ({ data }) => {
  const { slug, name, designation } = data;
  const imagePath = `/images/team/${slug}.jpg`;
  const fallbackPath = `/images/team/default.jpg`;

  return (
    <div className="team-block">
      <img
        src={imagePath}
        alt={name}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop if fallback also fails
          e.target.src = fallbackPath;
        }}
      />
      <h5 className="text-white">
        <a href={`/team-detail/${slug}`}>{name}</a>
      </h5>
      <h6 className="text-uppercase text-olive">{designation}</h6>
    </div>
  );
};

export default TeamCard;
