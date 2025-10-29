import React from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import useAuth from '../hooks/useAuth'

export default function ProductDetail() {
  const { id } = useParams()
  const { products, addToCart } = useProducts()
  const { user } = useAuth()

  const product = products.find(p => String(p.id) === id)
  if (!product) return <div className="card">Produk tidak ditemukan</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card flex items-center justify-center">
        <img src={product.image} alt={product.title} className="max-h-80 object-contain" />
      </div>

      <div className="md:col-span-2 space-y-3">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p className="text-sm text-slate-500">{product.category}</p>
        <p className="text-xl font-bold">Rp {Math.round(product.price).toLocaleString('id-ID')}</p>
        <p className="text-sm text-slate-700">{product.description}</p>

        <div className="flex gap-2">
          {user?.role === 'user' && (
            <button onClick={() => addToCart(product)} className="px-3 py-1 rounded-md bg-green-600 text-white">Add to Cart</button>
          )}
          {user?.role === 'admin' && (
            <button className="px-3 py-1 rounded-md border">Edit</button>
          )}
        </div>
      </div>
    </div>
  )
}
