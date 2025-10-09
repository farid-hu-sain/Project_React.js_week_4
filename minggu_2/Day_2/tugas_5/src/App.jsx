import React from "react";
import "./App.css"; // pastikan path-nya sesuai

function MenuList({ menu }) {
  return (
    <div>
      <h2>Daftar Menu</h2>
      {menu.length > 0 ? (
        <ul>
          {menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada menu yang tersedia.</p>
      )}
    </div>
  );
}

function App() {
  const menuAvailable = [
    { id: 1, name: "Nasi Goreng" },
    { id: 2, name: "Mie Ayam" },
    { id: 3, name: "Sate Ayam" },
  ];

  const menuUnavailable = [];

  return (
    <div>
      <MenuList menu={menuAvailable} />
      <MenuList menu={menuUnavailable} />
    </div>
  );
}

export default App;
