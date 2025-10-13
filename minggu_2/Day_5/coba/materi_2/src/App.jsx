import React from "react";
import Toolbar from "./components/Toolbar.jsx";

function App() {
  const user = {name: "alice" , theme: "light"}
  return (
 <Toolbar user={user}/>

  )
  
}
export default App;