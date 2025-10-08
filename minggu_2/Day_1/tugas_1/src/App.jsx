import React from "react";

export default function ButtonClicker() {
  const handleClick = () => {
    alert("Tobmol diklik")
  }

  const handleMouseEnter = () => {
    alert("Mouse masuk ke area tombol")
  }

  const handleMouseLeave =() => {
    alert ("Mouse keluar dari area tombol")
  }

  return (
    <div>
      <h2>Event Handling Sederhana</h2>
      <button onClick={handleClick}>
        Onclick
      </button>

      <button onMouseEnter={handleMouseEnter}>
        Enter Area
      </button>

      <button onMouseLeave={handleMouseLeave}>
        Get out of Area
      </button>
    </div>
  )
}