import React from "react";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Ecommerce",
      img: "",
      desc: "lorem1 dwaxiqdciuhowdm 3ei23qne qdnoi",
    },
    {
      id: 2,
      name: "Responsive desig",
      img: "",
      desc: "lorem1 dwaxiqdciuhowdm 3ei23qne qdnoi",
    },
    {
      id: 3,
      name: "Webb security",
      img: "",
      desc: "lorem1 dwaxiqdciuhowdm 3ei23qne qdnoi",
    },
  ];
  return (
    <div className="services">
      <h1 className="title">Services</h1>
      <p className="titleP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, expedita.
      </p>

      {services.map((item, index) => {
        <Service
          key={item.id}
          photo={item.img}
          desc={item.desc}
          name={item.name}
        />;
      })}
    </div>
  );
};

export default Services;
