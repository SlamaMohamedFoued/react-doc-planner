import "./service.css";
import React from "react";

function Service({ service }) {
  return (
    <div className="">
      <div className={service.type}>
        <h6 className="a">{service.target}</h6>
        <p className="a">{service.serviceDesc}</p>
        <div className="select-image">
          {service.target === "For patients" ? (
            <div className="select">
              <select className="custom-select" id="inputGroupSelect01">
                <option>Choose country</option>
                <option value="1">Tunisia</option>
                <option value="2">France</option>
                <option value="3">England</option>
              </select>
            </div>
          ) : (
            <div className="select"></div>
          )}
          <img data-aos="fade-right" src={service.image} height="250" />
        </div>
      </div>
    </div>
  );
}

const Services = ({ services }) => {
  return services.map((service, i) => (
    <div key={i}>
      <Service service={service} />
    </div>
  ));
};

export default Services;
