import React from "react";

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission_top_part">
          <div className="section-header text-center">
            <h5 className="text-white">RAK</h5>
            <p className="text-gray-600">
              RAK Mimarlık olarak Mimari Proje ve diğer proje hizmetlerini uzman Mimar ve Mühendis kadromuzla sorunsuz ve eksiksiz olarak yerine getirmekteyiz. Mimari Proje ve diğer proje hizmetlerinin yanı sıra iç mimari, dekorasyon ve diğer mimari tasarım ve uygulama hizmetlerini de vermekteyiz.
            </p>
          </div>
          <div className="has_line"></div>
          <img src="images/bg/about_bg.jpg" alt="" />
        </div>

        <div className="mission_top_part">
          <div className="row justify-content-center">
            <div className="col-lg-16 pe-lg-16">
              <div className="section-header">
                <p className="text-gray-600">
                  RAK Mimarlık, 2023 yılında kurulmuş olup, mimarlık, inşaat ve iç mimari dekorasyon alanlarında uzmanlaşmış bir firmadır. Kuruluşumuzdan bu yana, estetik ve işlevselliği bir araya getirerek konut, ticari, otel ve karma kullanımlı yapılar tasarlamaya odaklanmaktayız. Ayrıca, endüstriyel mimari alanda da geniş bir uzmanlığa sahibiz ve fabrika, depo gibi yapılar için özel çözümler sunmaktayız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
