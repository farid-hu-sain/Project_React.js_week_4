export default function Home() {
  return (
    <div style={{ 
      background: "white",
      borderRadius: "20px",
      padding: "3rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    }}>
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}>
          🚀 Solusi Digital Terbaik untuk Bisnis Anda
        </h1>
        <p style={{ 
          fontSize: "1.3rem", 
          color: "#555",
          lineHeight: "1.8",
          marginBottom: "2rem"
        }}>
          Kami adalah tim profesional yang siap membantu mengembangkan bisnis digital Anda dengan layanan berkualitas tinggi
        </p>
        
        <div style={{ 
          display: "flex", 
          gap: "1rem", 
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <a href="/products" style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
            transition: "transform 0.3s ease",
          }}>
            Lihat Layanan Kami
          </a>
          <a href="/contact" style={{
            background: "white",
            color: "#667eea",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            border: "2px solid #667eea",
            transition: "all 0.3s ease",
          }}>
            Hubungi Kami
          </a>
        </div>

        <div style={{ 
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { icon: "⚡", title: "Cepat", desc: "Pengerjaan maksimal 2 minggu" },
            { icon: "💎", title: "Berkualitas", desc: "Hasil kerja profesional" },
            { icon: "🎯", title: "Tepat", desc: "Sesuai kebutuhan Anda" }
          ].map((item, i) => (
            <div key={i} style={{
              padding: "1.5rem",
              borderRadius: "15px",
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            }}>
              <div style={{ fontSize: "3rem" }}>{item.icon}</div>
              <h3 style={{ color: "#333", margin: "0.5rem 0" }}>{item.title}</h3>
              <p style={{ color: "#666", fontSize: "0.9rem" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}