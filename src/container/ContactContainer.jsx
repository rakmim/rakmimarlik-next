import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapGoogle from "../components/contact/MapGoogle";

const Contact = () => {
  return (
    <main className="wrapper">

      <ContactInfo/>
      <section className="gmap box_padding">
        <div className="gmapbox">
          <div id="googleMap" className="map">
            <MapGoogle />
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Contact;
