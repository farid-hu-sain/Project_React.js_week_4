import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("halo dari child");

  console.log("🔁 Parent telah dirender");

  const handleClick = useCallback(() => {
    console.log(" Fungsi dari parent dijalankan");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Optimasi dengan useCallback</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Tambah Count</button>
      <hr />

      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

    
      <Child onAction={handleClick} />
    </div>
  );
}
