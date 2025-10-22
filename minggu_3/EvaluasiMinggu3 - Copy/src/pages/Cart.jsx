import React from "react";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { items, removeItem, total, totalCount } = useCart();

  if (!items.length) return <p>Keranjang kosong</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart ({totalCount} items)</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <img src={item.image} alt={item.title} style={{ width: 60, height: 60, objectFit: "contain" }} />
            <div style={{ flex: 1 }}>
              <div>{item.title}</div>
              <div>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
