import { useMemo } from "react";
import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(100000000)

  const heavyCalculator = (num) => {
    console.log("Perhitungan berat dijalankan");
    let result = 0;
    for (let i = 0; i < num; i++){
        result += Math.sqrt(i)    }
    
    return result.toFixed(2)
}

const computedValue = useMemo(() => heavyCalculator(number), [number])

console.log("Komponen telah dirender");

return (
  <div style={{ padding: 20 }}>
    <h1>Optimasi dengan userMemo</h1>

    <p>count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Tambah</button>
    <hr />

    <p>Nilai Number: {number.toLocaleString()}</p>
    <button onClick={() => setNumber(number + 10000000)}>
      Tambah Number
    </button>

      <h3>Hasil Perhitungan Berat:</h3>
      <p>{computedValue}</p>
  </div>
)
}

