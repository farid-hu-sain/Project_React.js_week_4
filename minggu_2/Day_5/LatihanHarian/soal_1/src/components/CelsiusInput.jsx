import React from "react";

export default function CelsiusInput({ value, onTemperatureChange }) {
  return (
    <div>
      <h3>Input Celsius</h3>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value, "C")}
        placeholder="Masukkan suhu °C"
      />
    </div>
  );
}
