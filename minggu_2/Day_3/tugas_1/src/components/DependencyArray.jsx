import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Terjadi kesalahan:", error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Memuat data pengguna...</p>;
  if (!user) return <p>Pengguna tidak ditemukan.</p>;

  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Alamat: {user.address.street}, {user.address.city}</p>
    </div>
  );
}

function Application() {
  const [currentUserId, setCurrentUserId] = useState(1);

  return (
    <>
      <h2>Aplikasi Profil Pengguna</h2>
      <UserProfile userId={currentUserId} />
      <button onClick={() => setCurrentUserId(prevId => prevId + 1)}>
        Lihat Pengguna Berikutnya
      </button>
    </>
  );
}

export default Application;
