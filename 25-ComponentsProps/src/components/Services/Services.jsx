import React from "react";
import Service from "../Service/Service";
import { TbBasketFilled } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Ecommerce",
      img: <TbBasketFilled />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      id: 2,
      name: "Responsive design",
      img: <MdComputer />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      id: 3,
      name: "Web security",
      img: <FaLock />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
  ];

  return (
    <div className="services">
      <h1 className="title">Services</h1>
      <p className="titleP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, expedita.
      </p>

      <div
        className="services-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "50px",
        }}
      >
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
