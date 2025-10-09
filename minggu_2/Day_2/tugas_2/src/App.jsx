import React from "react";
import "./App.css"; // 👉 impor file CSS terpisah

function UserGreeting() {
  return <h1 className="greeting user">Selamat Datang</h1>;
}

function GuestGreeting() {
  return <h1 className="greeting guest">Silakan Masuk</h1>;
}

function Greeting({ isLoggedIn }) {
  return (
    <div className="card">
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {isLoggedIn && <p className="message">Anda berhasil login!</p>}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h2 className="title">
        Conditional Rendering dengan if/else menggunakan Operasi Ternary
      </h2>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
