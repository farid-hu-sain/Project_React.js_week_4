import { useCart } from "../context/CartContext";

export default function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useCart();

  return (
    <div style={{ padding: "20px", background: "#fafafa" }}>
      <h2>🛒 Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p>Keranjang masih kosong.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} — {item.quantity}x (Rp {item.price.toLocaleString()}){" "}
              <button onClick={() => removeItem(item.id)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rp {total.toLocaleString()}</h3>
      {cart.length > 0 && (
        <button onClick={clearCart}>Kosongkan Keranjang</button>
      )}
    </div>
  );
}
