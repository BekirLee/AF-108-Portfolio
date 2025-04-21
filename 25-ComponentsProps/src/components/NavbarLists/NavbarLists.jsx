import React from "react";

const NavbarLists = () => {
  const lists = ["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"];

  return (
    <ul>
      {lists.map((item, index) => (
        <a href="#">
          <li key={index}>{item}</li>
        </a>
      ))}
    </ul>
  );
};

export default NavbarLists;
