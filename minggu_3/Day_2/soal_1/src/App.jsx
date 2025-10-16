import ToggleButton from "./components/ToggleButton";
import SwitchComponent from "./components/SwitchComponent";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#2f3640" }}> Demo Custom Hook useToggle</h1>
      <ToggleButton />
      <SwitchComponent />
    </div>
  );
}
