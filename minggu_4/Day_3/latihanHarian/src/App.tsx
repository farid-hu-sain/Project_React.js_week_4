import React from "react";
import Counter from "./components/Counter";
import Users from "./components/Users";

export default function App() {
  return (
    <div className="p-6 font-sans space-y-4">
      <h1 className="text-2xl font-bold text-center">Evaluasi Harian Redux Toolkit</h1>
      <Counter />
      <Users />
    </div>
  );
}
