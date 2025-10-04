import React from "react";
import AlertBox from "./AlertBox";

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <AlertBox type="success">Transaksi berhasil diproses!</AlertBox>
      <AlertBox type="warning">Perhatikan! Harga Btcoin turun 10%.</AlertBox>
      <AlertBox type="error">Gagal memproses transaksi.</AlertBox>
    </div>
  );
}

export default App;
