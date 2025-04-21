import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "../../assets/css/style.css";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
// import NavbarLists from "../NavbarLists/NavbarLists";

const Home = () => {
  return (
    <div className="header">
      <Navbar />
      <Header />
      {/* <NavbarLists /> */}
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
