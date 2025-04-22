import React from "react";
import { Link } from "react-router-dom";
import style from "../../assets/css/style.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Navbar } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <nav
        className={style.navBar}
        // style={style.navbar}
      >
        {/* style={{
            //   textAlign: "center",
            //   backgroundColor: "green",
            //   height: "60px",
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "space-around",
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: "26px",
          }} */}
        {/* <Link to="/" className={style.links}>
          Home
        </Link>
        <Link to="/contact" className={style.links}>
          Contact
        </Link>
        <Link to="/about" className={style.links}>
          About
        </Link>
        <Link to="/about" className={style.links}>
          Services
        </Link> */}
        <Navbar />
      </nav>
    </>
  );
};

export default Header;
