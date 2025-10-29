import React, { useState } from 'react'
import { useProducts } from '../contexts/ProductContext'

interface Props {
  onSuccess: () => void
}

export default function CheckoutForm({ onSuccess }: Props) {
  const { cart, clearCart } = useProducts()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !address) return alert('Semua field wajib diisi!')
    setLoading(true)
    setTimeout(() => {
      alert(`Terima kasih, ${name}! Pembelian senilai Rp ${Math.round(total).toLocaleString('id-ID')} berhasil.`)
      clearCart()
      setLoading(false)
      onSuccess()
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium">Nama Lengkap</label>
        <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full border rounded-md px-2 py-1" />
      </div>
      <div>
        <label className="block text-sm font-medium">Nomor Telepon</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 w-full border rounded-md px-2 py-1" />
      </div>
      <div>
        <label className="block text-sm font-medium">Alamat Pengiriman</label>
        <textarea value={address} onChange={e => setAddress(e.target.value)} className="mt-1 w-full border rounded-md px-2 py-1" />
      </div>
      <div className="text-right font-semibold">
        Total: Rp {Math.round(total).toLocaleString('id-ID')}
      </div>
      <div className="flex justify-end gap-2">
        <button type="submit" disabled={loading} className="px-4 py-2 rounded-md bg-blue-600 text-white">
          {loading ? 'Memproses...' : 'Bayar Sekarang'}
        </button>
      </div>
    </form>
  )
}
