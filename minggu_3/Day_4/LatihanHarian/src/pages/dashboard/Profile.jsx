export default function Profile() {
  return (
    <div style={{
      background: "white",
      borderRadius: "15px",
      padding: "2rem",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          margin: "0 auto 1rem"
        }}>
          👤
        </div>
        <h2 style={{ color: "#333", marginBottom: "0.5rem" }}>Jason Developer</h2>
        <p style={{
          color: "white",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "inline-block",
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          fontWeight: "bold"
        }}>
          Programmer
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "1rem"
      }}>
        {[
          { label: "Email", value: "jason@dev.com", icon: "📧" },
          { label: "Phone", value: "+62 812-3456-7890", icon: "📱" },
          { label: "Joined", value: "January 2023", icon: "📅" },
          { label: "Projects", value: "47 Completed", icon: "✅" }
        ].map((item, i) => (
          <div key={i} style={{
            padding: "1rem",
            borderRadius: "10px",
            background: "#f8f9fa"
          }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>{item.label}</div>
            <div style={{ fontWeight: "bold", color: "#333" }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}