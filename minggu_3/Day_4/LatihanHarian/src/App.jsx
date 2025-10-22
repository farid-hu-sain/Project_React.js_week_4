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
import PrivateRoute from "./routes/PrivateRoute";
import LoginForm from "./pages/LoginForm";
import NotFound from "./pages/NotFound"; // ✅ Tambahan baru

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Routes>
          {/* Halaman publik */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Halaman privat */}
          <Route element={<PrivateRoute />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetail />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                index
                element={
                  <div style={{ color: "#333", fontSize: "1.2rem" }}>
                    📊 Selamat datang di Dashboard
                  </div>
                }
              />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
