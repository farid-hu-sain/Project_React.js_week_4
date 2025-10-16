import useLocalStorage from "../hooks/useLocalStorage.js";

export default function ThemePreference() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [name, setName] = useLocalStorage("username", "");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const containerStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "2rem",
    textAlign: "center",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <h1>Preferensi User</h1>
      <p>Tema saat ini: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <br /><br />
      <input
        type="text"
        placeholder="Masukkan nama kamu"
        value={name}
        onChange={handleNameChange}
      />
      <p>Halo, {name || "Tampaknya kamu belum memasukkan nama"} </p>
    </div>
  );
}
