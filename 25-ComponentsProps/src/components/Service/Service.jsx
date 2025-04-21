import React from "react";

const Service = ({ photo, name, desc }) => {
  return (
    <div className="service">
      <div
        className=""
        style={{
          backgroundColor: "#ffc800",
          borderRadius: "50%",
          padding: "20px",
          width: "100px",
          height: "100px",
          margin: "auto",
        }}
      >
        {photo}
      </div>
      <h3 style={{ color: "#212529" }}>{name}</h3>
      <p style={{ color: "#6c757d ", width: "400px" }}>{desc}</p>
    </div>
  );
};

export default Service;
