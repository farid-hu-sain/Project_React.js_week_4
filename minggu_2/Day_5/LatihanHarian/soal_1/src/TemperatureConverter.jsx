import React, { useState } from "react";
import CelsiusInput from "./components/CelsiusInput.jsx";
import FahrenheitInput from "./components/FahrenheitInput.jsx";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("C");

  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const handleTemperatureChange = (value, scaleType) => {
    setTemperature(value);
    setScale(scaleType);
  };

  const celsius =
    scale === "F" ? toCelsius(parseFloat(temperature)) || "" : temperature;
  const fahrenheit =
    scale === "C" ? toFahrenheit(parseFloat(temperature)) || "" : temperature;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lifting State Up — Konversi Suhu</h2>
      <CelsiusInput value={celsius} onTemperatureChange={handleTemperatureChange} />
      <FahrenheitInput
        value={fahrenheit}
        onTemperatureChange={handleTemperatureChange}
      />
      <p>
        {celsius !== "" && fahrenheit !== ""
          ? ` ${celsius}°C = ${fahrenheit}°F`
          : "Masukkan suhu di salah satu input"}
      </p>
    </div>
  );
}

export default TemperatureConverter;
