import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(setProducts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = useCallback(product => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  }, [addItem]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: 16 }}>
      {products.map(p => (
        <div key={p.id}>
          <ProductCard product={p} onAdd={handleAdd} />
          <Link to={`/products/${p.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}
