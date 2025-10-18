import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/dashBoard/Dashboard";
import Profile from "./pages/dashBoard/Profile";
import Settings from "./pages/dashBoard/Settings";

export default function App() {
  return (
    <div style={{ 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }}>
      <Navbar />
      <div style={{ 
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          
          {/* ✅ FIXED: Properly nested dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<div style={{ color: "#333", fontSize: "1.2rem" }}>📊 Selamat datang di Dashboard</div>} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}