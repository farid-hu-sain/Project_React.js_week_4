interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onAdd: () => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        background: "#fff",
      }}
    >
      <h3>{product.name}</h3>
      <p>Harga: Rp{product.price.toLocaleString()}</p>
      <button onClick={onAdd}>Tambah ke Keranjang</button>
    </div>
  );
}
