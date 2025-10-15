import { useTheme } from "../context/ThemeContext";

export default function ThemedText() {
  const { theme } = useTheme();

  const style = {
    color: theme === "light" ? "#333" : "#ddd",
    fontSize: "18px",
    textAlign: "center",
  };

  return <p style={style}>Ini adalah teks dengan tema {theme}.</p>;
}
