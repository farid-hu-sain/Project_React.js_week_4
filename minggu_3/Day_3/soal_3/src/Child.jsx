import React from "react";

function Child({ onAction }) {
  console.log("🧒 Child dirender");

  return (
    <div style={{ marginTop: 20, padding: 10, border: "1px solid gray" }}>
      <button onClick={onAction}>Panggil Callback</button>
    </div>
  );
}

export default React.memo(Child);
