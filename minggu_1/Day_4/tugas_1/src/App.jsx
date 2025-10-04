import Tony from "./assets/tony_stark.webp"

function App() {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "350px",
    width: "100%",
  };

  const nameStyle = {
    color: "black",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const roleStyle = {
    color: "black",
    fontSize: "22px",
    fontStyle: "italic",
    margin: "5px 0",
  };

  const companyStyle = {
    color: "#27ae60",
    fontSize: "20px",
    marginTop: "8px",
    fontStyle: "italic",
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5"
    }}>
      <div style={cardStyle}>
        <img 
          style={{ width: "100%", borderRadius: "12px" }} 
          src={Tony} 
          alt="Tony Stark" 
        />
        <h2 style={nameStyle}>Tony Stark</h2>
        <p style={roleStyle}>aka Iron Man</p>
        <p style={companyStyle}>CEO of Stark Industries</p>
      </div>
    </div>
  )
}

export default App;
