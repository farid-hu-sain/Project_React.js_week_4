import React from "react";
import "./App.css";

export default function SiswaList() {
  const ujianAkhir = [
    { id: 1, nama: "Ucup", asal: "Tanggerang", nilai: 101 },
    { id: 2, nama: "Irgi", asal: "Banyuwangi", nilai: 99 },
    { id: 3, nama: "Xena", asal: "Ponorogo", nilai: 89 },
  ];

  return (
    <>
      <h2>Daftar Nilai Siswa</h2>
      <ul>
        {ujianAkhir.map((siswa) => (
          <li key={siswa.id}>
            <span>{siswa.nama}</span>
            <span>{siswa.nilai}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
