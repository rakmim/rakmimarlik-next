import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "../components/aboutus/TeamCard";
import teamData from "@/data/teams";

const TeamContainer = () => {
  return (
    <section>
      <div className="container">
        <div className="section-header text-center has_line">
          <h1 className="text-white">Bizim takım</h1>
        </div>

        <div className="team_inner">
          <div className="swiper swiper_team">
            <Swiper
              modules={[Navigation, EffectFade, Pagination]}
              effect="slide"
              breakpoints={{
                600: { width: 600, slidesPerView: 2, spaceBetween: 30 },
                768: { width: 768, slidesPerView: 3, spaceBetween: 30 },
                992: { width: 992, slidesPerView: 3, spaceBetween: 65 },
              }}
              autoHeight={true}
              parallax={true}
              loop={true}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            >
              {teamData.map((member) => (
                <SwiperSlide key={member.id}>
                  <TeamCard data={member} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-navigation">
              <div className="swiper-button-prev">
                <i className="bi bi-arrow-left"></i>
              </div>
              <div className="swiper-button-next">
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContainer;
