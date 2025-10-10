import { useEffect, useState } from "react";

function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Ukuran Jendela Browser</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );
}

function Application1() {
  const [showTracker, setShowTracker] = useState(true);

  return (
    <div>
      <h1>Aplikasi Pelacak Ukuran Jendela</h1>
      <button onClick={() => setShowTracker((prev) => !prev)}>
        {showTracker ? "Sembunyikan" : "Tampilkan"} Pelacak
      </button>
      {showTracker && <WindowSizeTracker />}
    </div>
  );
}

export default Application1;
