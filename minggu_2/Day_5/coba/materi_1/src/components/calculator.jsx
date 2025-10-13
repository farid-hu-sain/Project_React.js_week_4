import React, { useState } from "react";

import { toCelsius, toFahrenheit, tryConvert } from "./utils/conversions.js";
import TemperatureInput from "./temperatureInput.jsx";

export default function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Kalkulator Suhu (Lifting State Up)</h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <p>Suhu dalam Celsius: {celsius}</p>
      <p>Suhu dalam Fahrenheit: {fahrenheit}</p>
    </div>
  );
}
