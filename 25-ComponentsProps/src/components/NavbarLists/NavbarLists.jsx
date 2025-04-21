import React from "react";

const NavbarLists = () => {
  const lists = ["Services", "Portfolio", "About", "Team", "Contact"];

  return (
    <ul>
      {lists.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default NavbarLists;
