import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Fetch all products
export const fetchProducts = async () => {
  return axios.get(`${API_URL}/api/products`).then(res => res.data);
};

// Fetch featured products
export const fetchFeaturedProducts = async () => {
  return axios.get(`${API_URL}/api/products/featured`).then(res => res.data);
};

// Fetch products by price
export const fetchProductsByPrice = async (maxPrice) => {
  return axios.get(`${API_URL}/api/products/price/${maxPrice}`).then(res => res.data);
};

// Fetch products by rating
export const fetchProductsByRating = async (minRating) => {
  return axios.get(`${API_URL}/api/products/rating/${minRating}`).then(res => res.data);
};

// Add product (requires authentication)
export const addProduct = async (product) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User not authenticated");

  return axios.post(`${API_URL}/api/products`, product, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  }).then(res => res.data);
};

// User Registration
export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/api/auth/register`, userData).then(res => res.data);
};

// User Login
export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/api/auth/login`, userData).then(res => res.data);
};
