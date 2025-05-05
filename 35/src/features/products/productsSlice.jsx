// features/products/productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Ürünleri almayı sağlamak için önceki fetchProducts kodu burada
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data;
  }
);

// Ürün eklemek için Thunk
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    return data;
  }
);

// Ürün silmek için Thunk
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    });
    return productId; // Silinen ürünün ID'sini döndürüyoruz.
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload); // Yeni ürünü ekliyoruz
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product.id !== action.payload); // Silinen ürünü listeden çıkarıyoruz
      });
  },
});

export default productSlice.reducer;
