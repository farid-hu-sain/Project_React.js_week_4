import { CartProvider } from "./context/CartContext.jsx";
import ProductList from "./components/ProductList.jsx";
import CartDisplay from "./components/CartDisplay.jsx";

export default function App() {
  return (
    <CartProvider>
      <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
        <h1>🛍️ Toko Kopi Tuan Muda</h1>
        <ProductList />
        <CartDisplay />
      </div>
    </CartProvider>
  );
}
