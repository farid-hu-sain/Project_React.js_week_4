import { useState, useEffect } from "react";
import axios from "axios";

// Komponen: Manipulasi Data JSON
export default function UserListManipulated() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        // Manipulasi data JSON:
        // 1️⃣ Ambil hanya id, name, email, dan city
        // 2️⃣ Filter hanya yang kota-nya "South Elvis"
        const processedUsers = response.data
          .map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
          }))
          .filter((user) => user.city === "South Elvis");

        setUsers(processedUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Tampilan
  if (loading) return <p>Memuat data pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (users.length === 0) return <p> Tidak ada pengguna yang cocok.</p>;

  return (
    <div>
      <h2>📋 Daftar Pengguna (Manipulasi Data)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) — {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
