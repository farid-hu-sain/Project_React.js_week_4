import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const activeStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        background: "rgba(0, 0, 0, 0.3)",
        padding: "1rem 2rem",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        end
      >
        🏠 Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        👋 About
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        🛍️ Products
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        📞 Contact
      </NavLink>

      <NavLink
        to="/dashboard"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        📊 Dashboard
      </NavLink>
    </nav>
  );
}
