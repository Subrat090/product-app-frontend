import React, { useState } from "react";
import { addProduct } from "../api";

const AddProduct = () => {
  const [form, setForm] = useState({
    productId: "",
    name: "",
    price: "",
    featured: false,
    rating: "",
    company: "",
    createdAt: new Date().toISOString(), // ✅ Ensure createdAt is sent
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...form,
        price: parseFloat(form.price), // Ensure price is a number
        rating: form.rating ? parseFloat(form.rating) : undefined, // Convert rating to number
        createdAt: new Date().toISOString(), // ✅ Set createdAt field
      };
      await addProduct(productData);
      alert("Product Added Successfully!");
    } catch (error) {
      alert("Error: " + error.response?.data?.message || "Something went wrong");
      console.error("Error details:", error.response?.data);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="productId" placeholder="Product ID" className="p-2 border rounded w-full" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Product Name" className="p-2 border rounded w-full" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" className="p-2 border rounded w-full" onChange={handleChange} required />
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="featured" onChange={handleChange} />
          <span>Featured</span>
        </label>
        <input type="number" step="0.1" name="rating" placeholder="Rating (optional)" className="p-2 border rounded w-full" onChange={handleChange} />
        <input type="text" name="company" placeholder="Company" className="p-2 border rounded w-full" onChange={handleChange} required />
        <button className="p-2 bg-blue-500 text-white rounded w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
