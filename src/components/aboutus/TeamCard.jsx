import React, { useState } from "react";
import Link from "next/link";

const TeamCard = ({ data }) => {
  const { slug, name, designation, img } = data;
  const fallbackPath = `/images/team/default.jpg`;

  // fallback için state tutuyoruz
  const [imageSrc, setImageSrc] = useState(img || fallbackPath);

  const handleImageError = () => {
    setImageSrc(fallbackPath);
  };

  return (
    <div className="team-block">
      <img
        src={imageSrc}
        alt={name}
        onError={handleImageError}
      />
      <h5 className="text-white">
        <Link href={`/team-detail/${slug}`}>
          {name}
        </Link>
      </h5>
      <h6 className="text-uppercase text-olive">{designation}</h6>
    </div>
  );
};

export default TeamCard;
