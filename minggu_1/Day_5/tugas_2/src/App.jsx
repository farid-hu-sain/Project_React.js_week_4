import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9fafb",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const labelStyle = {
    display: "block",
    marginTop: "10px",
    fontWeight: "bold",
    textAlign: "left",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isEditing ? "#4CAF50" : "#007BFF",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <main style={containerStyle}>
      <h1>User Profile</h1>

      {isEditing ? (
        <div>
          <label htmlFor="username" style={labelStyle}>
            Nama Pengguna
          </label>
          <input
            type="text"
            id="username"
            style={inputStyle}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="age" style={labelStyle}>
            Umur
          </label>
          <input
            type="number"
            id="age"
            style={inputStyle}
            value={age}
            onChange={(event) => setAge(Number(event.target.value))}
          />

          <button style={buttonStyle} onClick={() => setIsEditing(false)}>
            Simpan
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Nama:</strong> {name || "Belum diisi"}
          </p>
          <p>
            <strong>Umur:</strong> {age || "Belum diisi"}
          </p>
          <button style={buttonStyle} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </main>
  );
}
