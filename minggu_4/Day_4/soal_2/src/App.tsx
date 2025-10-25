import React, { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">🚀 Demo React Portal Modal</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Buka Modal
      </button>

     
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Ini adalah konten dari modal yang telah dibuka</p>
      </Modal>
    </div>
  );
}
