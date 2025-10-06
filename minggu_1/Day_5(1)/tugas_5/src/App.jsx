import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

 
  const reset = () => {
    setCount(0);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4ff, #e8f7f2)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "280px",
        }}
      >
        <h2>Counter</h2>
        <h1 style={{ fontSize: "3rem", margin: "20px 0", color: "#4a90e2" }}>
          {count}
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            onClick={decrement}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#ff7f7f",
              color: "white",
              cursor: "pointer",
            }}
          >
            −
          </button>
          <button
            onClick={reset}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#ccc",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
          <button
            onClick={increment}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#4a90e2",
              color: "white",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
