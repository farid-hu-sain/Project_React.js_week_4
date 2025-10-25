import React, { useRef } from "react";

export default function InteractiveDomAccess() {
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();

      inputRef.current.style.transition = "box-shadow 0.3s ease";
      inputRef.current.style.boxShadow = "0 0 10px 2px rgba(59,130,246,0.7)";

      setTimeout(() => {
        if (inputRef.current)
          inputRef.current.style.boxShadow = "none";
      }, 200);
    }
  };

  const handleScroll = () => {
    if (boxRef.current) {
      boxRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

      boxRef.current.style.transition = "background-color 0.5s ease";
      boxRef.current.style.backgroundColor = "#22c55e"; 

      setTimeout(() => {
        if (boxRef.current)
          boxRef.current.style.backgroundColor = "#3b82f6"; 
      }, 1000);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">
        🧩 Interaktif DOM Manipulation dengan useRef
      </h2>

      <div className="flex flex-col items-center space-y-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Klik tombol untuk fokus"
          className="border border-gray-400 rounded p-2 w-64 text-center focus:outline-none"
        />

        <button
          onClick={handleFocus}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md"
        >
          🎯 Fokus ke Input
        </button>
      </div>

      <div className="border rounded-lg h-[350px] overflow-y-auto p-4 space-y-4 bg-gray-50 shadow-inner">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded shadow-sm">
            Konten {i + 1}
          </div>
        ))}

        <div
          ref={boxRef}
          className="p-6 bg-blue-500 text-white text-center rounded shadow-lg font-semibold"
        >
           Ini Kotak Target — Scroll ke sini pakai useRef!
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleScroll}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 shadow-md"
        >
           Scroll ke Kotak Biru
        </button>
      </div>
    </div>
  );
}
