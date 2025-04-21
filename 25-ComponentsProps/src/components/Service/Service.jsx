import React from "react";

const Service = ({ photo, name, desc }) => {
  return (
    <div>
      {photo}
      {name}
      {desc}
    </div>
  );
};

export default Service;
