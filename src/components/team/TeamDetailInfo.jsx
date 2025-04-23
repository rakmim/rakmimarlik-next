import React from "react";
import Bio from "../aboutus/Bio";

const TeamDetailInfo = ({ data }) => {
  const { name, designation, slug, bio } = data;
  const imagePath = `/images/team/${slug}.jpg`;
  const fallbackPath = `/images/team/default.jpg`;
  return (
    <main className="wrapper">
      <section className="team team-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 pe-lg-5">
              <div className="team-member-img">
              <img
        src={imagePath}
        alt={name}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop if fallback also fails
          e.target.src = fallbackPath;
        }}
      />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 ps-lg-0">
              <div className="team-member-information">
                <h5 className="name text-white">{name}</h5>
                <h6 className="designation text-olive">{designation}</h6>
                <Bio className="bio" text={bio} />
                {/* <SocialMedia /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamDetailInfo;