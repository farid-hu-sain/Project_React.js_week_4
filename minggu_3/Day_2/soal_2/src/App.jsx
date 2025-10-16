import PostViewer from "./components/PostViewer.jsx";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#dcdde1",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#2f3640" }}>🪄 Demo Custom Hook useFetch</h1>
      <PostViewer />
    </div>
  );
}
