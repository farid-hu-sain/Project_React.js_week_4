import React from "react";
import { Toggle } from "./Toggle";

export default function AppToggle() {
  return (
    <Toggle
      render={({ on, toggle }) => (
        <div style={{ textAlign: "center" }}>
          <button onClick={toggle}>
            {on ? "Matikan Lampu 💡" : "Nyalakan Lampu 🔦"}
          </button>
          <p>Status: {on ? "Hidup 🔆" : "Mati 🌑"}</p>
        </div>
      )}
    />
  );
}

