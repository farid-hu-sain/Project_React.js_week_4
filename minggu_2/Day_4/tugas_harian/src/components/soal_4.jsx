import { useState, useEffect } from "react";

function AbortFetchComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          { signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("🛑 Fetch dibatalkan");
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // 🔥 Cleanup — batalkan request jika komponen di-unmount
    return () => {
      abortController.abort();
      console.log("🧹 Permintaan dibatalkan saat cleanup");
    };
  }, []);

  if (loading) return <p>⏳ Memuat data (dengan pembatalan)...</p>;
  if (error) return <p>❌ Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <h2>📦 Data dari Fetch API (dengan AbortController)</h2>
      <h3>{data?.title}</h3>
      <p>{data?.body}</p>
    </div>
  );
}

export default AbortFetchComponent;
