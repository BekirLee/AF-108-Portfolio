import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProductName, setEditingProductName] = useState("");

  // Məhsulları gətirmək üçün API çağırışı
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Yeni məhsul əlavə etmək
  const addProduct = () => {
    const newProduct = {
      name: newProductName,
    };

    fetch("https://northwind.vercel.app/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setProducts([...products, data]);
        setNewProductName("");
      });
  };

  // Məhsul silmək
  const deleteProduct = (id) => {
    fetch(`https://northwind.vercel.app/api/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      const index = products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
      }
    });
  };

  const updateProduct = (id) => {
    const updatedProduct = {
      name: editingProductName,
    };

    fetch(`https://northwind.vercel.app/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          products.map((product) =>
            product.id === id
              ? { ...product, name: editingProductName }
              : product
          )
        );
        setEditingProductId(null);
        setEditingProductName("");
      });
  };

  return (
    <div>
      <h1>Nihads Products</h1>

      {/* Yeni məhsul əlavə et */}
      <div>
        <input
          type="text"
          placeholder="Yeni məhsul adı"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editingProductId === product.id ? (
              <div>
                <input
                  type="text"
                  value={editingProductName}
                  onChange={(e) => setEditingProductName(e.target.value)}
                />
                <button onClick={() => updateProduct(product.id)}>
                  Update
                </button>
                <button onClick={() => setEditingProductId(null)}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                {product.name}
                <button
                  onClick={() =>
                    setEditingProductId(product.id) &&
                    setEditingProductName(product.name)
                  }
                >
                  Edit
                </button>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
