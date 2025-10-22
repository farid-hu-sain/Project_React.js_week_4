import { useNavigate, useLocation } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();

  // Bisa dipakai untuk debug atau logika kondisi
  console.log("📍 Lokasi saat ini:", location);

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "3rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        📞 Hubungi Kami
      </h1>

      {/* Lokasi saat ini */}
      <p style={{ textAlign: "center", color: "#888", marginBottom: "1rem" }}>
        📍 Kamu sedang di: <strong>{location.pathname}</strong>
      </p>

      {/* 🔹 Kartu WhatsApp */}
      <div
        style={{
          marginTop: "2rem",
          padding: "2rem",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💬</div>
        <h2>WhatsApp</h2>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>
          0812-8439-0784
        </p>
        <a
          href="https://wa.me/6281284390784"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "white",
            color: "#667eea",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "1rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          💬 Chat via WhatsApp
        </a>
      </div>

      {/* 🔹 Jam Operasional */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: "15px",
          background: "#f8f9fa",
        }}
      >
        <h3 style={{ color: "#333", marginBottom: "1rem" }}>⏰ Jam Operasional</h3>
        <p style={{ color: "#666", lineHeight: "1.8" }}>
          Senin - Jumat: 09.00 - 17.00 WIB <br />
          Sabtu: 09.00 - 14.00 WIB <br />
          Minggu & Libur: Tutup
        </p>
      </div>

      {/* 🔹 Catatan */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.1rem", margin: 0 }}>
          ⚡ Respon cepat dalam 1-2 jam kerja
        </p>
      </div>

      {/* 🔹 Tombol Navigasi Balik */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ⬅️ Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
