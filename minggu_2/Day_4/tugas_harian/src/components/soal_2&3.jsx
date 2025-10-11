// Mengambil Data dari API dengan Axios
// Buatlah komponen yang mengambil data pengguna dari API publik (misal: https://jsonplaceholder.typicode.com/users/1) menggunakan Axios.
// Tampilkan nama, email, dan nomor telepon pengguna.

// Mengelola Loading State dan Error Handling
// Tambahkan state untuk loading dan error pada salah satu komponen di atas.
// Tampilkan pesan loading saat data sedang diambil, dan tampilkan pesan error jika terjadi kesalahan.

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function AxiosDataComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get ('https://jsonplaceholder.typicode.com/users/1');
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    },[])

if (loading) return <p>Memuat data pengguna...</p>
if (error) return <p>Terjadi kesalahan: {error.message}</p>

return (
    <>
    <h2>Data dari Axios</h2>
    <h3>{data.name}</h3>
    <p>Email: {data.email}</p>
    <p>Telepon: {data.phone}</p>
    </>
    )
}