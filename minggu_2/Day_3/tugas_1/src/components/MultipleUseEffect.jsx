import { useEffect, useState } from "react";

export default function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");


  useEffect(() => {
    document.title = `Klik: ${count}`;
  }, [count]);

  useEffect(() => {
    if (name !== "") {
      console.log(`Nama sekarang: ${name}`);
    }
  }, [name]);

  return (
    <div>
      <h1>Contoh Multiple useEffect</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>

      <div>
        <input
          type="text"
          placeholder="Ketik nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
