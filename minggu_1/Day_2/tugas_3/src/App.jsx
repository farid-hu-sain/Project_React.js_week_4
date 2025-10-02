// ConditionalDemo.jsx
import React from "react";

function ConditionalDemo() {
  const isLoggedIn = true; 
  const unreadMessages = 3;

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Conditional Rendering Demo</h2>

      <p>
        {isLoggedIn ? "Selamat datang kembali, Tuan Muda!" : "Silakan login dulu."}
      </p>

      {unreadMessages > 0 && (
        <p>
          Kamu punya <strong>{unreadMessages}</strong> pesan yang belum dibaca 📩
        </p>
      )}
    </div>
  );
}

export default ConditionalDemo;
