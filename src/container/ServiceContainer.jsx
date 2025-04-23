import React from "react";
import ServiceCard from "../components/service/ServiceCard";
import services from "../data/services";

const ServiceContainer = () => {
  return (
    <section className="services bg-dark-100 pb-0">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
