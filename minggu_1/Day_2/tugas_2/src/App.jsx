import React from 'react'


function Expressions() {

const nama = "Soekarno"
const harga = 10000
const diskon = 0.2

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(angka)
}

return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>   
    <h2>Halo, {nama}</h2>

    <p>
    Harga Asli: <strong>{formatRupiah(harga)}</strong>
    </p>

    <p>
    Harga Setelah Diskon: <strong>{diskon * 100}%</strong>
    </p>

    <p>
    Harga setelah diskon: {" "} 
    <strong>{formatRupiah(harga - (harga * diskon))}</strong>
    </p>


    <p>
        Panjang nama kamu adalah: <strong>{nama.length}</strong> karakter
    </p>

    </div>
    )
}




export default Expressions;