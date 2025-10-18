export default function Contact() {
  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      padding: "3rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      maxWidth: "600px",
      margin: "0 auto"
    }}>
      <h1 style={{ 
        fontSize: "2.5rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textAlign: "center"
      }}>
        📞 Hubungi Kami
      </h1>
      
      <div style={{
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "15px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💬</div>
        <h2>WhatsApp</h2>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>
          081284390784
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
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }}
        >
          💬 Chat via WhatsApp
        </a>
      </div>

      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        borderRadius: "15px",
        background: "#f8f9fa"
      }}>
        <h3 style={{ color: "#333", marginBottom: "1rem" }}>⏰ Jam Operasional</h3>
        <p style={{ color: "#666", lineHeight: "1.8" }}>
          Senin - Jumat: 09.00 - 17.00 WIB<br />
          Sabtu: 09.00 - 14.00 WIB<br />
          Minggu & Libur: Tutup
        </p>
      </div>

      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        borderRadius: "15px",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <p style={{ fontSize: "1.1rem", margin: 0 }}>
          ⚡ Respon cepat dalam 1-2 jam kerja
        </p>
      </div>
    </div>
  );
}