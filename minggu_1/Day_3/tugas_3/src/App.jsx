import Card from "./ChildernProps";
import React from "react";
import JokoImg from "./assets/joko.jpg";


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card>
        <h2>Joko Widodo</h2>
        <p>Joko Widodo, yang akrab disapa Jokowi, adalah Presiden ke-7 Republik Indonesia. Ia lahir di Surakarta (Solo), Jawa Tengah, pada 21 Juni 1961. Jokowi dikenal sebagai sosok sederhana yang dekat dengan rakyat. Masa kecilnya dilalui dengan kehidupan yang cukup sulit, bahkan pernah merasakan pindah rumah karena digusur.
        </p>
      </Card>

      <Card>
        <img 
          src={JokoImg} 
          alt="President" 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
      </Card>

      <Card>
        <h3>Aksi</h3>
        <button 
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer"
          }}
        >
          Klik Saya
        </button>
      </Card>
    </div>
  );
}

export default App;
