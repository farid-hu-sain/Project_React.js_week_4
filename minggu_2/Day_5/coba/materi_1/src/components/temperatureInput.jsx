import React from "react";

export default function TemperatureInput({ temperature, onTemperatureChange, scale }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  return (
    <fieldset style={{ marginBottom: "1rem" }}>
      <legend>Masukkan suhu dalam {scaleNames[scale]}:</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value, scale)}
      />
    </fieldset>
  );
}
