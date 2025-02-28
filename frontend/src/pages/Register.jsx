import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert("Registration Successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Error: " + error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          required
        />
        <button className="p-2 bg-green-500 text-white rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
