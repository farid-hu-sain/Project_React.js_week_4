import React, { useState } from "react";
import FastComponent from "./components/FastComponent";
import MediumComponent from "./components/MediumComponent";
import SlowComponent from "./components/SlowComponent";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("App render");

  return (
    <div style={{ padding: 20 }}>
      <h1>Performance Profiling Demo</h1>
      <button onClick={() => setCount(count + 1)}>Tambah Count: {count}</button>

      <hr />
      <FastComponent />
      <MediumComponent />
      <SlowComponent />
    </div>
  );
}
