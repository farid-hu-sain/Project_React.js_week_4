import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Cannot load product");
        return res.json();
      })
      .then(setProduct)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!product) return null;

  return (
    <div style={{ padding: 20 }}>
      <img src={product.image} alt={product.title} style={{ width: 200, height: 200, objectFit: "contain" }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addItem({ id: product.id, title: product.title, price: product.price, image: product.image })}>
        Add to Cart
      </button>
    </div>
  );
}
