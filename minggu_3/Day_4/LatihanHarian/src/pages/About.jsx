import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "3rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        👋 Tentang Kami
      </h1>

       <p
          style={{
            fontSize: "1.3rem",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >kami adalah Programmer yang paling handal seantero dunia</p>

      <p style={{ color: "#777" }}>
        (Anda berada di: <strong>{location.pathname}</strong>)
      </p>

      {/* ...kode lainnya tetap */}
    </div>
  );
}
