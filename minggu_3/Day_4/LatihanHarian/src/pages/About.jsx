export default function About() {
  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      padding: "3rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    }}>
      <h1 style={{ 
        fontSize: "2.5rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        👋 Tentang Kami
      </h1>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        <div style={{
          padding: "2rem",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white"
        }}>
          <h2>🎯 Misi Kami</h2>
          <p style={{ lineHeight: "1.8" }}>
            Memberikan solusi digital terbaik untuk setiap klien dengan fokus pada kualitas, kecepatan, dan kepuasan pelanggan.
          </p>
        </div>
        
        <div style={{
          padding: "2rem",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "white"
        }}>
          <h2>⚡ Keahlian Kami</h2>
          <ul style={{ lineHeight: "2" }}>
            <li>React.js & Modern Web Development</li>
            <li>Debugging & Code Optimization</li>
            <li>UI/UX Design</li>
            <li>Konsultasi Teknis</li>
          </ul>
        </div>
      </div>
      
      <div style={{ 
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "15px",
        background: "#f8f9fa"
      }}>
        <h2 style={{ color: "#333" }}>💼 Pengalaman</h2>
        <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem" }}>
          Dengan pengalaman lebih dari 5 tahun di industri pengembangan web, kami telah menangani berbagai proyek dari startup hingga perusahaan besar. Keahlian kami dalam React.js dan teknologi modern memastikan setiap proyek diselesaikan dengan standar tertinggi.
        </p>
      </div>
    </div>
  );
}