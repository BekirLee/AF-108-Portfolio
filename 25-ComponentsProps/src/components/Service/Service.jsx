import React from "react";

const Service = ({ photo, name, desc }) => {
  return (
    <div className="service">
      <img src={photo} alt="slm"/>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Service;
