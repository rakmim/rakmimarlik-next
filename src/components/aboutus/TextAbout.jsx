import React from "react";

const TextAbout = () => {
  return (
    <section className="highlight_banner bg-dark-200">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 p-lg-0">
            <p className="about_para text-center">
                Bir binanın netliği <span>
                 <a href="#">detaylarındadır</a>
                 </span>{" "}
                . Tasarımda basitlik, detaylardaki rafine edilmişlik meselesidir.
              </p>
              <p className="about_para text-center"><span>
                <a href="#">Richard Meier</a>
              </span>{" "}

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAbout;
