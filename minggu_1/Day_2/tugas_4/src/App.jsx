// FruitList.jsx
import React from "react";

function FruitList() {
  const fruits = ["Apel", "Jeruk", "Mangga", "Pisang", "Semangka"];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Daftar Buah 🍎🍌🍊</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
 