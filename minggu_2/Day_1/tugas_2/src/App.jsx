import React from "react";
import "./app.css";

export default function LinkPreventer() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Link diklik namun navigasi dicegah");
    alert("⚠️ WARNING: ANDA MENCOBA MENEKAN LINK JUDOL!");
  };

  const handleInputChange = (event) => {
    console.log("Nilai input:", event.target.value);
  };

  return (
    <div className="link-preventer-container">
      <h2>SyntheticEvent Objects</h2>

      <a href="https://planetbola77.net/" onClick={handleClick}>
        link kaya cepat dan instan
      </a>

      <br />

      <input
        type="text"
        onChange={handleInputChange}
        placeholder="masukkan teks..."
      />
    </div>
  );
}
