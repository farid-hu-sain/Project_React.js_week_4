import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "8px",
  };

  return (
    <div style={cardStyle}>
      <h3>Ini {theme === "light" ? "tema terang" : "tema gelap"}</h3>
      <p>Komponen ini berubah sesuai tema yang aktif.</p>
    </div>
  );
}

export default ThemedCard;
