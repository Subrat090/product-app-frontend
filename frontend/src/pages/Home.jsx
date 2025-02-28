import React, { useEffect, useState } from "react";
import { fetchProducts, fetchFeaturedProducts, fetchProductsByPrice, fetchProductsByRating } from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadProducts();
  }, [filter]);

  const loadProducts = async () => {
    let data;
    if (filter === "featured") {
      data = await fetchFeaturedProducts();
    } else if (filter.startsWith("price")) {
      const maxPrice = filter.split("-")[1];
      data = await fetchProductsByPrice(maxPrice);
    } else if (filter.startsWith("rating")) {
      const minRating = filter.split("-")[1];
      data = await fetchProductsByRating(minRating);
    } else {
      data = await fetchProducts();
    }
    setProducts(data);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-4">
        <button className="p-2 bg-blue-500 text-white mr-2" onClick={() => setFilter("")}>All</button>
        <button className="p-2 bg-green-500 text-white mr-2" onClick={() => setFilter("featured")}>Featured</button>
        <button className="p-2 bg-yellow-500 text-white mr-2" onClick={() => setFilter("price-500")}>Price &lt; 500</button>
        <button className="p-2 bg-red-500 text-white" onClick={() => setFilter("rating-4")}>Rating &gt; 4</button>
      </div>
      <ul>
      {products.map((product) => (
  <li key={product._id} className="p-4 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-lg transition">
    <Link to={`/products/${product._id}`} className="text-blue-600 font-bold hover:underline">
      {product.name}
    </Link>
    <p className="text-gray-700">💰 Price: ${product.price}</p>
  </li>
))}

      </ul>
    </div>
  );
};

export default Home;
