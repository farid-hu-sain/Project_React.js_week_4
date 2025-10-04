import React from "react";
import Button from "./Button";

function App() {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "20px" }}>
      <Button type="default">Default Button</Button>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;

