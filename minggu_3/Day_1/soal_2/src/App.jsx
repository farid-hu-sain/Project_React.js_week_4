import { ThemeProvider } from "./context/ThemeContext";
import ThemedButton from "./components/ThemedButton";
import ThemedCard from "./components/ThemedCard";
import ThemedText from "./components/ThemedText";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1> Aplikasi Tema</h1>
        <ThemedButton />
        <ThemedCard />
        <ThemedText />
      </div>
    </ThemeProvider>
  );
}
