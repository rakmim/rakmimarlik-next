import React from "react";
import SocialMediaInfo from "../socialmedia/SocialMediaInfo"

const AsideInfo = () => {
  return (
    <div className="aside_info_wrapper">
      <button className="aside_close">
        <i className="bi bi-x-lg"></i>
      </button>
      <div className="aside_logo">
        <a href="/" className="light_logo">
          <img src="images/logo-light-lg.png" alt="logo" />
        </a>
        <a href="/" className="dark_logo">
          <img src="images/logo-dark-lg.png" alt="logo" />
        </a>
      </div>
      <div className="aside_info_inner">
        <p>
          RAK, mimarlık ve tasarım fikirlerini, kültürel devamlılık çerçevesinde
          kurgulayarak insanı önde tutan projeler üreten mimarlık ofisidir.
        </p>

        <div className="aside_info_inner_box">
          <h5>İletişim</h5>
          <p><a href="tel:+905316813919">+90 531 681 39 19</a></p>
          <p>
            Camikebir Mah. Rıhtım Cad. Pak-Ekizceli İş Merkezi <br /> B Blok
            Kat:3 Ofis No:325 Merkez / DÜZCE
          </p>
          <p> info@rakmimarlik.com</p>

        </div>
        <SocialMediaInfo />
      </div>
    </div>
  );
};

export default AsideInfo;
