import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");  // ✅ Ensure token is cleared
    window.location.reload(); // ✅ Refresh the app to clear auth state
  };
  

  return (
    <nav className="p-5 bg-gray-200 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/" className="text-lg font-bold">Home</Link>
        {token && <Link to="/add-product" className="text-lg">Add Product</Link>}
      </div>
      <div className="space-x-4">
        {token ? (
          <button onClick={handleLogout} className="text-red-500 text-lg font-semibold">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="text-lg font-semibold">Login</Link>
            <Link to="/register" className="text-lg font-semibold">Register</Link>  {/* ✅ Register Link */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
