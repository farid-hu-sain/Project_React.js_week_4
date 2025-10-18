import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Jasa Debugging", price: 15000000, icon: "🐛" },
  { id: 2, name: "Pembuatan Website", price: 2000000, icon: "🌐" },
  { id: 3, name: "Konsultasi", price: 1000000, icon: "💡" },
];

export default function ProductList() {
  return (
    <div>
      <h1 style={{
        fontSize: "2.5rem",
        color: "white",
        textAlign: "center",
        marginBottom: "2rem",
        textShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}>
        🛍️ Layanan Kami
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {products.map((p) => (
          <Link 
            key={p.id}
            to={`/products/${p.id}`} 
            style={{ textDecoration: "none" }}
          >
            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              height: "100%"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            >
              <div style={{ fontSize: "4rem", textAlign: "center", marginBottom: "1rem" }}>
                {p.icon}
              </div>
              <h2 style={{
                color: "#333",
                textAlign: "center",
                marginBottom: "1rem"
              }}>
                {p.name}
              </h2>
              <div style={{
                textAlign: "center",
                padding: "1rem",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.3rem"
              }}>
                Rp {p.price.toLocaleString()}
              </div>
              <div style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#667eea",
                fontWeight: "bold"
              }}>
                Lihat Detail →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
