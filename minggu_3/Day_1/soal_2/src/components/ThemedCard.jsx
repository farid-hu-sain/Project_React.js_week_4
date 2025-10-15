import { useTheme } from "../context/ThemeContext";

export default function ThemedCard() {
  const { theme } = useTheme();

  const style = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: theme === "light" ? "0 2px 6px rgba(0,0,0,0.2)" : "0 2px 6px rgba(255,255,255,0.1)",
    margin: "20px 0"
  };

  return (
    <div style={style}>
      <h3>Kartu Tema</h3>
      <p>Mode saat ini: {theme.toUpperCase()}</p>
    </div>
  );
}
