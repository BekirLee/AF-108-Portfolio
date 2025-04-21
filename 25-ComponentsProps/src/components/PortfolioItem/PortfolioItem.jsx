import React from "react";

const PortfolioItem = ({ photo, name, desc }) => {
  return (
    <div
      className="portfilio-item"
      style={{
        boxShadow: " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        maxWidth: "26rem",
        borderRadius: "5px",
        // gap: "30px",
        // margin: "20px 20px",
      }}
    >
      <div
        className=""
        style={{
          //   backgroundColor: "#ffc800",
          //   borderRadius: "50%",
          //   padding: "0 20px",
          //   width: "100%",
          //   height: "100px",
          //   textAlign: "center",
          margin: "auto",
          display: "flex",
        }}
      >
        <div className="portfolioHover">
          <div className="hover-content">
            <svg
              class="svg-inline--fa fa-plus fa-3x"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
              bis_size='{"x":1366,"y":1742,"w":52,"h":60,"abs_x":1366,"abs_y":1742}'
              width={40}
              height={40}
            >
              <path
                fill="currentColor"
                d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
                bis_size='{"x":1366,"y":1747,"w":48,"h":48,"abs_x":1366,"abs_y":1747}'
              ></path>
            </svg>
          </div>
          <img
            src={photo}
            alt="name"
            className="portfolioImg"
            style={{ width: "100%", height: "356px", objectFit: "cover" }}
          />
        </div>
      </div>
      <h3 style={{ color: "#242424" }}>{name}</h3>
      <p style={{ color: "#242424" }}>{desc}</p>
    </div>
  );
};

export default PortfolioItem;
