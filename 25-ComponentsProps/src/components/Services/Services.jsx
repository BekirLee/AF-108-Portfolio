import React from "react";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Ecommerce",
      img: "", // Buraya gerçek bir resim URL'si eklemelisiniz
      desc: "lorem1 dwaxiqdciuhowdm 3ei23qne qdnoi",
    },
    {
      id: 2,
      name: "Responsive design",
      img: "", // Buraya gerçek bir resim URL'si eklemelisiniz
      desc: "lorem1 dwaxiqdciuhowdm 3ei23qne qdnoi",
    },
    {
      id: 3,
      name: "Web security",
      img: "", // Buraya gerçek bir resim URL'si eklemelisiniz
      desc: "lorem1 dwaxiqdciuhowdm 3ei23qne qdnoi",
    },
  ];

  return (
    <div className="services">
      <h1 className="title">Services</h1>
      <p className="titleP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, expedita.
      </p>

      <div className="services-container">
        {services.map((item) => (
          <Service
            key={item.id}
            photo={item.img}
            desc={item.desc}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
