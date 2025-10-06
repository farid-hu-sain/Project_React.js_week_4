import { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main>
      <h1>User Profile</h1>

      {isEditing ? (
        <div>
          <label htmlFor="username">Nama Pengguna</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Umur: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </main>
  );
}
