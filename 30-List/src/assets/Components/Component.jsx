import React, { useState } from "react";

function Component(products) {
//   const [newProductName, setNewProductName] = useState("");
//   const [products, setProducts] = useState([]);

  return (
    <>
      <div className="">
        <input
          type="text"
          value={newProductName}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </div>
      <ul>
        {products.map((product) => {
          <li style={{ color: "#000" }}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Component;
