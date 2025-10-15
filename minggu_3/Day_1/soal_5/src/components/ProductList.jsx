import { useCart } from "../context/CartContext";

export default function ProductList() {
  const { addItem } = useCart();

  const products = [
    { id: 1, name: "Kopi Arabica", price: 35000 },
    { id: 2, name: "Teh Hijau", price: 25000 },
    { id: 3, name: "Cokelat Panas", price: 40000 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2> Daftar Produk</h2>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#f5f5f5",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <span>
            {p.name} - Rp {p.price.toLocaleString()}
          </span>
          <button onClick={() => addItem(p)}>Tambah</button>
        </div>
      ))}
    </div>
  );
}
