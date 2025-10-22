import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        marginTop: "100px",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>404 🚧</h1>
      <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
        Halaman yang kamu cari tidak ditemukan.
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "12px 24px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "0 6px 20px rgba(102, 126, 234, 0.5)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow =
            "0 8px 25px rgba(102, 126, 234, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 6px 20px rgba(102, 126, 234, 0.5)";
        }}
      >
        🔙 Kembali ke Home
      </button>
    </div>
  );
}
