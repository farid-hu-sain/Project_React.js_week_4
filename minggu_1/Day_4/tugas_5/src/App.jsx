import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.box}>
      <h2>Kotak Responsif (CSS Module)</h2>
      <p>Ukuran layar: {width}px</p>
      <p>{width <= 600 ? " Mobile Mode" : " Desktop Mode"}</p>
    </div>
  );
}

export default App;
