import useFetch from "../hooks/useFetch";

export default function PostViewer() {
    const {data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  if (loading) return <p style={{ color: "#718093" }}>⏳ Sedang memuat data...</p>;
  if (error) return <p style={{ color: "#e84118" }}>❌ {error}</p>;

    return (
    <div
      style={{
        margin: "30px auto",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        background: "#f5f6fa",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#2f3640" }}>{data.title}</h2>
      <p style={{ color: "#353b48" }}>{data.body}</p>
      <small style={{ color: "#718093" }}>Post ID: {data.id}</small>
    </div>
  );
}
