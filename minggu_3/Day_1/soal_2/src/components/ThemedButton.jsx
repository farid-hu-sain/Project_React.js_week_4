import { useTheme } from "../context/ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  const style = {
    backgroundColor: theme === "light" ? "#007bff" : "#444",
    color: theme === "light" ? "white" : "lightgray",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return <button style={style} onClick={toggleTheme}>Ubah ke {theme === "light" ? "Dark" : "Light"} Mode</button>;
}
