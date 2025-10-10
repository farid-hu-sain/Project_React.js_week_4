import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Mode Saat Ini: {theme.toUpperCase()}</h1>
      <button onClick={toggleTheme}>
        Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <p>
        Ini area konten. Tema aktif:{" "}
        <strong>{theme === "light" ? "Cerah" : "Gelap"}</strong>
      </p>
    </main>
  );
}

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer>
      <small> Tema saat ini: {theme}</small>
    </footer>
  );
}

export default function Application3() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}
