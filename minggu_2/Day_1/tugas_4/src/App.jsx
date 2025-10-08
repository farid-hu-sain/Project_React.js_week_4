import React, { useState } from "react";
import "./app.css";


export default function () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Pendaftaran berhasil! untuk username" + username)
    setUsername("")
    setPassword("")
  }

  return (
    <form onSubmit={handleSubmit}>
    <h2>Formulir Pendaftaran</h2>  
    <div>
      <label>
        Username: 
        <input 
            type="text" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)}/>
      </label>
    </div>
    <div>
      <label>
        Password: 
        <input 
            type="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}/>
      </label>
    </div>
    <button type="submit">SUBMIT</button>
    </form>
  )

}

