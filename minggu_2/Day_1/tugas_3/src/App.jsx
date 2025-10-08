import React, { useState } from "react";

export default function () {
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Nama yang di submit: " + name)
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component</h2>
      <label>
        Nama:
        <input type="text" value={name} onChange={handleChange}/>
      </label>

      <p>anda mengetik: {name}</p>
      <button type="submit">Submit</button>

    </form> 
  )
}