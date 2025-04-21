import React from "react";
import img1 from "../../assets/imgs/1.jpg";
import img2 from "../../assets/imgs/2.jpg";
import img3 from "../../assets/imgs/3.jpg";
import img4 from "../../assets/imgs/4.jpg";
import img5 from "../../assets/imgs/5.jpg";
import img6 from "../../assets/imgs/6.jpg";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const items = [
  {
    id: 1,
    name: "Threads",
    img: img1,
    desc: "Illustration",
  },
  {
    id: 2,
    name: "Explore",
    img: img2,
    desc: "Graphic Design",
  },
  {
    id: 3,
    name: "Finish",
    img: img3,
    desc: "Identity",
  },
  {
    id: 4,
    name: "Lines",
    img: img4,
    desc: "Branding",
  },
  {
    id: 5,
    name: "Southwest",
    img: img5,
    desc: "Website Design",
  },
  {
    id: 6,
    name: "Window",
    img: img6,
    desc: "Photography",
  },
];
const Portfolio = () => {
  return (
    <div
      className="portfolio container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      {items.map((item) => (
        <PortfolioItem
          key={item.id}
          photo={item.img}
          desc={item.desc}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Portfolio;
