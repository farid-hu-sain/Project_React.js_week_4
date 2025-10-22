import React from "react";
import useCart from "../hooks/useCart";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, total } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleFinish = () => {
    alert(`Terima kasih, ${user?.name}. Pesanan diterima! Total: $${total.toFixed(2)}`);
    navigate("/products");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>
      <p>Nama: {user?.name}</p>
      <ul>
        {items.map(i => <li key={i.id}>{i.title} x {i.quantity} = ${(i.price * i.quantity).toFixed(2)}</li>)}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={handleFinish}>Place Order</button>
      <button onClick={() => { logout(); navigate("/products"); }} style={{ marginLeft: 8 }}>Logout</button>
    </div>
  );
}
