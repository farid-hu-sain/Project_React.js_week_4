// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/syntaxLengkap.jsx"; // import komponen App
import Ekspresi from "./Component/embeddingExpressions.jsx";
import JSXExpressionDemo from "./Component/JSX_expressions.jsx";

function Baru() {
  return (
    <>
      <App />
      <hr />
      <Ekspresi />
      <hr />
      <JSXExpressionDemo />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Baru />
  </React.StrictMode>
);

