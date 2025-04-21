import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "../../assets/css/style.css";
import Services from "../Services/Services";
// import NavbarLists from "../NavbarLists/NavbarLists";

const Home = () => {
  return (
    <div className="header">
      <Navbar />
      <Header />
      {/* <NavbarLists /> */}
      <Services />
    </div>
  );
};

export default Home;
