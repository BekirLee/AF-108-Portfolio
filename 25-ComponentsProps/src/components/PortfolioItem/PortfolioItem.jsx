import React from "react";

const PortfolioItem = ({ photo, name, desc }) => {
  return (
    <div className="portfilio-item">
      <div
        className=""
        style={{
          //   backgroundColor: "#ffc800",
          borderRadius: "50%",
          padding: "20px",
          //   width: "100%",
          //   height: "100px",
          //   textAlign: "center",
          margin: "auto",
          display: "flex",
          oxShadow: " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <img
          src={photo}
          alt="name"
          style={{ width: "100%", height: "356px", objectFit: "cover" }}
        />
      </div>
      <h3 style={{ color: "#242424" }}>{name}</h3>
      <p style={{ color: "#242424" }}>{desc}</p>
    </div>
  );
};

export default PortfolioItem;
