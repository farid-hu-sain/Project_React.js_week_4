import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang disubmit:", formData);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #dff1ff, #f8e8ff)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          width: "350px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Formulir Kontak
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "12px" }}>
            <label>Nama Depan</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Masukkan nama depan"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "4px",
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label>Nama Belakang</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Masukkan nama belakang"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "4px",
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "4px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#4a90e2",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3b7ed0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            Kirim
          </button>
        </form>
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            backgroundColor: "#f7f9fc",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Data yang Sedang Diinput:</h3>
          <p>
            <strong>Nama Depan:</strong>{" "}
            <span style={{ color: "#4a90e2" }}>
              {formData.firstName}
            </span>
          </p>
          <p>
            <strong>Nama Belakang:</strong>{" "}
            <span style={{ color: "#4a90e2" }}>
              {formData.lastName}
            </span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span style={{ color: "#4a90e2" }}>{formData.email}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
