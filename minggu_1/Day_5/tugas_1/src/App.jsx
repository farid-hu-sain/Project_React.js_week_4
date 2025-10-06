import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333" }}>Aplikasi Counter Sederhana</h1>

      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Jumlah Counter : {counter}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={increment}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          +
        </button>

        <input
          type="text"
          value={counter}
          onChange={(event) => setCounter(Number(event.target.value))}
          style={{
            width: "80px",
            textAlign: "center",
            fontSize: "18px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <button
          onClick={decrement}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          -
        </button>
      </div>

      <button
        onClick={reset}
        style={{
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Reset
      </button>
    </main>
  );
}
