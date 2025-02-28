import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";  // ✅ Register Page
import ProductDetails from "./pages/ProductDetails";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  {/* ✅ Register Route */}
          <Route path="/products/:id" element={<ProductDetails />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
