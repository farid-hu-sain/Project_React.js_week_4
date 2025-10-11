// Mengambil Data dari API dengan Fetch API
// Buatlah komponen React yang mengambil data dari API publik (misal: https://jsonplaceholder.typicode.com/posts/1) menggunakan Fetch API.
// Tampilkan data yang diambil di UI.

import React, { useState, useEffect } from "react";

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p> Memuat data...</p>;
  if (error) return <p> Terjadi kesalahan: {error.message}</p>;

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2> Data dari Fetch API</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export default FetchDataComponent;


                
   