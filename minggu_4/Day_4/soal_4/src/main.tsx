import React from "react";
import ReactDOM from "react-dom/client";
import AppMouse from "./components/AppMouse";
import AppToggle from "./components/AppToggle";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <h1 style={{ textAlign: "center" }}>🧩 Render Props Demo</h1>
    <AppMouse />
    <AppToggle />
  </React.StrictMode>
);
