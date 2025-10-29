import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useProducts } from '../contexts/ProductContext'
import CheckoutForm from '../components/CheckoutForm'

export default function Cart() {
  const { user } = useAuth()
  const { cart, removeFromCart, clearCart } = useProducts()
  const [checkout, setCheckout] = useState(false)

  if (!user) return <div className="card">Silakan login untuk melihat keranjang.</div>
  if (user.role === 'admin') return <div className="card">Admin tidak memiliki keranjang.</div>

  if (cart.length === 0)
    return <div className="card">Keranjang kosong 😢</div>

  if (checkout)
    return (
      <div className="card max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-3">Form Checkout</h3>
        <CheckoutForm onSuccess={() => setCheckout(false)} />
      </div>
    )

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Keranjang Belanja</h2>

      <div className="space-y-3">
        {cart.map(item => (
          <div key={item.id} className="card flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-slate-500">Qty: {item.qty}</div>
                <div className="text-sm font-medium">Rp {(item.price * item.qty).toLocaleString('id-ID')}</div>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 rounded-md bg-red-600 text-white">Hapus</button>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <button onClick={clearCart} className="px-3 py-1 rounded-md border">Kosongkan</button>
        <button onClick={() => setCheckout(true)} className="px-3 py-1 rounded-md bg-green-600 text-white">Checkout</button>
      </div>
    </div>
  )
}
