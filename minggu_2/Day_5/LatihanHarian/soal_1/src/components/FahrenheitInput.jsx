import React from "react";

export default function FahrenheitInput({ value, onTemperatureChange }) {
  return (
    <div>
      <h3>Input Fahrenheit</h3>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value, "F")}
        placeholder="Masukkan suhu °F"
      />
    </div>
  );
}
