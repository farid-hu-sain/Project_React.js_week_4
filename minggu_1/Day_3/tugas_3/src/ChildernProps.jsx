import React from "react";

function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      maxWidth: "300px"
    }}>
      {children}
    </div>
  );
}
export default Card;
    
