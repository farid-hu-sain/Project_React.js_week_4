import CounterPanel from "./components/CounterPanel";

export default function App() {
  return (
    <div
      style={{
        background: "#dcdde1",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#2f3640" }}> Hooks Composition Demo</h1>
      <CounterPanel />
    </div>
  );
}
