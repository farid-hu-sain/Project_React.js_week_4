import { useNavigate, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const currentPath = location.pathname; 

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const activeStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2rem",
        }}
      >
        📊 Dashboard
      </h1>

      <nav
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2rem",
          background: "#f8f9fa",
          padding: "1rem",
          borderRadius: "15px",
        }}
      >
        <button
          onClick={() => navigate("profile")}
          style={
            currentPath.endsWith("profile")
              ? { ...linkStyle, ...activeStyle }
              : linkStyle
          }
        >
          👤 Profile
        </button>
        <button
          onClick={() => navigate("settings")}
          style={
            currentPath.endsWith("settings")
              ? { ...linkStyle, ...activeStyle }
              : linkStyle
          }
        >
          ⚙️ Settings
        </button>
      </nav>

      {/* ✅ Menampilkan path aktif */}
      <p style={{ fontStyle: "italic", color: "#666", marginBottom: "1rem" }}>
        Path saat ini: <b>{currentPath}</b>
      </p>

      <div
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "2rem",
          borderRadius: "15px",
          minHeight: "200px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
