import React from 'react';
import SectionGridLines from '../section/SectionGridLines';
import SocialMediaInfo from '../socialmedia/SocialMediaInfo';

const ContactInfo = () => {
    return (
        <section className="contact_us bg-dark-200">
            <div className="container align-items-center justify-content-center">
                    <div className="col-lg-18">
                        <div>
                           <h1 className="text-white text-uppercase mb-4">RAK Mimarlık</h1>
                           <p>Camikebir Mah. Rıhtım Cad. Pak-Ekizceli İş Merkezi B Blok
                                          Kat:3 Ofis No:325 Merkez / DÜZCE </p>
                           <p><a href="tel:+905316813919">+90 531 681 39 19</a></p>
                           <p> info@rakmimarlik.com</p>
                        </div>    

                        <SocialMediaInfo />

                </div>
            </div>

            <SectionGridLines />
        </section>
    );
};

export default ContactInfo;