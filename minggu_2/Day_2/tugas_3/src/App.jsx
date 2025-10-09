import React from "react";
import "./App.css";

function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }

  return <div className="warning">⚠️ Peringatan!</div>;
}


function PageStatus({ status }) {
  let content;
  switch (status) {
    case "loading":
      content = <p>Memuat data ...</p>;
      break;
    case "loading again":
      content = <p>Dikit lagi ...</p>;
      break;
    case "success":
      content = <p> Berhasil!</p>;
      break;
    default:
      content = <p> Error: Status tidak dikenal</p>;
      break;
  }
  return <div className="status">{content}</div>;
}


function App() {
  const [showWarning, setShowWarning] = React.useState(true);
  const [dataStatus, setDataStatus] = React.useState("loading");

  const toggleWarning = () => {
    setShowWarning((prev) => !prev);
  };

  const changeStatus = () => {
    const statuses = ["loading", "loading again", "success"];
    const index = statuses.indexOf(dataStatus);
    const nextStatus = statuses[(index + 1) % statuses.length];
    setDataStatus(nextStatus);
  };

  return (
    <div className="app-container">
      <h2>Conditional Rendering dengan Switch Statement</h2>

      <WarningBanner warn={showWarning} />
      <button onClick={toggleWarning}>
        {showWarning ? "Sembunyikan" : "Tampilkan"} Peringatan
      </button>

      <hr />

      <h3>Status Data:</h3>
      <PageStatus status={dataStatus} />
      <button onClick={changeStatus}>Ubah Status</button>
    </div>
  );
}


export default App;
