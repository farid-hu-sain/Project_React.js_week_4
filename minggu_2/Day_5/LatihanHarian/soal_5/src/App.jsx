import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemedButton from "./components/ThemedButton.jsx";
import ThemedCard from "./components/ThemedCard.jsx";

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center" }}>
        <h2>Contoh Context API Sederhana</h2>
        <ThemedButton />
        <ThemedCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
