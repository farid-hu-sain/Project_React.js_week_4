import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Tambahkan useLocation
  const currentPath = location.pathname; // Ambil path aktif

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "3rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "3rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
          }}
        >
          🚀 Solusi Digital Terbaik untuk Bisnis Anda
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          Kami adalah tim profesional yang siap membantu mengembangkan bisnis
          digital Anda dengan layanan berkualitas tinggi
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/products")}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
              transition: "transform 0.3s ease",
            }}
          >
            Lihat Layanan Kami
          </button>

          <button
            onClick={() => navigate("/contact")}
            style={{
              background: "white",
              color: "#667eea",
              padding: "1rem 2rem",
              borderRadius: "50px",
              fontWeight: "bold",
              border: "2px solid #667eea",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Hubungi Kami
          </button>
        </div>

        {/* ✅ Menampilkan path aktif */}
        <p style={{ marginTop: "2rem", color: "#777" }}>
          Path saat ini: <b>{currentPath}</b>
        </p>
      </div>
    </div>
  );
}
