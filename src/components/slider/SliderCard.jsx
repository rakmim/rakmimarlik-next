import React from "react";
import Link from "next/link";

const SliderCard = ({ path, bgImg, title }) => {
  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="slide_content">
        <div className="slide_content_wrapper mb-0 bg-dark-100">
          <div className="slide_content_inner">
            <div className="meta m-0">
              <div className="category text-olive text-uppercase">
                MİMARİ TASARIM VE PROJELENDİRME
              </div>
            </div>
            <h4>
              <Link href={path}>
                <span className="text-white">{title}</span>
              </Link>
            </h4>
            <div className="details_link">
              <Link href={path}>
                <div className="details_link_inner">
                  <span className="link_text">Detayları göster</span>
                  <span className="link_icon">
                    <span className="line"></span>
                    <span className="circle"></span>
                    <span className="dot"></span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
