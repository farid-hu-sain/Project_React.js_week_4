import { useState } from "react";
import Child from "./Child";

export default function App() {
    const [count, setCount] = useState(0)
    const [text] = useState("halo dari child")

    return(
      <div style={{padding: 20}}>
        <h1>React.memo demo</h1>
        <p>count: {count}</p>
        <button 
        onClick={() => setCount(count + 1)}>
          tambah
        </button>
        <Child text={text} />
      </div>

    )
}

// React.memo adalah fungsi pembungkus (higher-order component) dari React yang digunakan untuk mencegah komponen anak di-render ulang kalau props-nya tidak berubah.