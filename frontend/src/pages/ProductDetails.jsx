import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Rating:</strong> {product.rating || "N/A"}</p>
      <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>
      <p><strong>Featured:</strong> {product.featured ? "Yes" : "No"}</p>
    </div>
  );
};

export default ProductDetails;
