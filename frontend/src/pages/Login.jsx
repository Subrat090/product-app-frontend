import React, { useState } from "react";
import { loginUser } from "../api";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(form);
    localStorage.setItem("token", data.token);
    alert("Login Successful!");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="username" placeholder="Username" className="p-2 border rounded w-full" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="p-2 border rounded w-full" onChange={handleChange} />
        <button className="p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
