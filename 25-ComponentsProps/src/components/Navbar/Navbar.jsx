import React from "react";
import NavbarBrand from "../../components/NavbarBrand/NavbarBrand.jsx";
import NavbarLists from "../NavbarLists/NavbarLists.jsx";

const Navbar = () => {
  return (
    <>
      <div className="container fixed-top">
        <NavbarBrand />
        <NavbarLists />
      </div>
    </>
  );
};

export default Navbar;
