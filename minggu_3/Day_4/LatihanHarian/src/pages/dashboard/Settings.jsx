export default function Settings() {
  return (
    <div style={{
      background: "white",
      borderRadius: "15px",
      padding: "2rem",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{
        color: "#333",
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }}>
        ⚙️ Pengaturan Akun
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {[
          { 
            icon: "🔔", 
            title: "Notifikasi", 
            desc: "Kelola preferensi notifikasi Anda",
            color: "#667eea"
          },
          { 
            icon: "🔒", 
            title: "Keamanan", 
            desc: "Update password dan keamanan akun",
            color: "#764ba2"
          },
          { 
            icon: "🌍", 
            title: "Bahasa & Region", 
            desc: "Pilih bahasa dan zona waktu",
            color: "#f093fb"
          },
          { 
            icon: "🎨", 
            title: "Tampilan", 
            desc: "Customize tema dan layout",
            color: "#f5576c"
          }
        ].map((setting, i) => (
          <div key={i} style={{
            padding: "1.5rem",
            borderRadius: "12px",
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            border: "2px solid transparent"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = setting.color;
            e.currentTarget.style.transform = "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.transform = "translateX(0)";
          }}>
            <div style={{
              fontSize: "2.5rem",
              width: "60px",
              height: "60px",
              background: `linear-gradient(135deg, ${setting.color}, ${setting.color}dd)`,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {setting.icon}
            </div>
            <div>
              <h3 style={{ color: "#333", margin: "0 0 0.5rem 0" }}>{setting.title}</h3>
              <p style={{ color: "#666", margin: 0, fontSize: "0.9rem" }}>{setting.desc}</p>
            </div>
            <div style={{ marginLeft: "auto", color: setting.color, fontSize: "1.5rem" }}>→</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <p style={{ margin: 0, fontSize: "1.1rem" }}>
          💾 Perubahan disimpan secara otomatis
        </p>
      </div>
    </div>
  );
}