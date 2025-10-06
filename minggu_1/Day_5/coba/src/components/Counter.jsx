import { useState } from 'react'

export default function App() {
  
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };


  return (
    <>
      <main>
        <h1>Aplikasi Counter sederhana</h1>

        <p>Jumlah Counter : {counter}</p>

        <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
        <button
          onClick={increment} >+</button>

        <input 
        type="text" 
        value={counter} 
        onChange={(event) => {
          setCounter(event.target.value)
        }} />

        <button
          onClick={decrement}>-</button>
        </div>
        
      <button onClick={reset}>Reset</button>
      </main>
    </>
  )
}