import useCounterWithToggle from "../hooks/useCounterWithToggle.js";

export default function CounterPanel() {
  const { count, increment, decrement, reset, value, toggle } = useCounterWithToggle(0);

  return (
    <div
      style={{
        margin: "40px auto",
        width: "350px",
        background: "#f5f6fa",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ color: "#2f3640" }}>Counter with Toggle</h2>

      <button
        onClick={toggle}
        style={{
          background: value ? "#e84118" : "#44bd32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 18px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
      >
        {value ? "Sembunyikan Counter" : "Tampilkan Counter"}
      </button>

      {value && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#273c75" }}>{count}</h3>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={increment}
              style={{
                marginRight: "10px",
                padding: "8px 14px",
                border: "none",
                background: "#487eb0",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              + Tambah
            </button>
            <button
              onClick={decrement}
              style={{
                marginRight: "10px",
                padding: "8px 14px",
                border: "none",
                background: "#8c7ae6",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              - Kurang
            </button>
            <button
              onClick={reset}
              style={{
                padding: "8px 14px",
                border: "none",
                background: "#718093",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              🔄 Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
