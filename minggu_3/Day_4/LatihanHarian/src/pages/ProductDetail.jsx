import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Jasa Debugging",
    price: 15000000,
    desc: "Dapat menemukan bug sekecil dan sedetail apapun serta menjelaskan kesalahan dari tiap bug yang ditemukan.",
    icon: "🐛",
    features: ["Analisis kode mendalam", "Dokumentasi bug detail", "Solusi optimal", "Garansi 30 hari"]
  },
  {
    id: 2,
    name: "Pembuatan Website",
    price: 2000000,
    desc: "Ahli dalam pembuatan website dengan deskripsi yang detail tanpa cacat, dan dapat direvisi hingga 5 kali.",
    icon: "🌐",
    features: ["Design modern", "Responsive mobile", "5x revisi gratis", "SEO friendly"]
  },
  {
    id: 3,
    name: "Konsultasi",
    price: 1000000,
    desc: "Melakukan coaching dan mengajarkan setiap materi yang ditanyakan.",
    icon: "💡",
    features: ["1-on-1 mentoring", "Materi customize", "Video recording", "Support via chat"]
  },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div style={{
        background: "white",
        borderRadius: "20px",
        padding: "3rem",
        textAlign: "center",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}>
        <div style={{ fontSize: "5rem" }}>😢</div>
        <h1>Produk tidak ditemukan</h1>
        <Link to="/products" style={{
          display: "inline-block",
          marginTop: "2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          ← Kembali ke daftar produk
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      padding: "3rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "5rem" }}>{product.icon}</div>
        <h1 style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          {product.name}
        </h1>
      </div>

      <div style={{
        padding: "2rem",
        borderRadius: "15px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textAlign: "center",
        marginBottom: "2rem"
      }}>
        <div style={{ fontSize: "1rem", opacity: 0.9 }}>Harga</div>
        <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Rp {product.price.toLocaleString()}
        </div>
      </div>

      <div style={{
        padding: "2rem",
        borderRadius: "15px",
        background: "#f8f9fa",
        marginBottom: "2rem"
      }}>
        <h3 style={{ color: "#333", marginBottom: "1rem" }}>📝 Deskripsi</h3>
        <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem" }}>
          {product.desc}
        </p>
      </div>

      <div style={{
        padding: "2rem",
        borderRadius: "15px",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "white",
        marginBottom: "2rem"
      }}>
        <h3 style={{ marginBottom: "1rem" }}>✨ Fitur Unggulan</h3>
        <ul style={{ lineHeight: "2", fontSize: "1.1rem" }}>
          {product.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      <div style={{ 
        display: "flex", 
        gap: "1rem",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        <Link to="/products" style={{
          background: "white",
          color: "#667eea",
          padding: "1rem 2rem",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          border: "2px solid #667eea"
        }}>
          ← Kembali
        </Link>
        <a href="/contact" style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
        }}>
          Pesan Sekarang →
        </a>
      </div>
    </div>
  );
}
