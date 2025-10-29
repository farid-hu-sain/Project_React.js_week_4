import React from 'react'
import useProducts from '../hooks/useProducts'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { Product } from 'type'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, removeProduct } = useProducts()
  const { user } = useAuth()

  return (
    <div className="product-card flex flex-col h-full">
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-3">
        <img src={product.image} alt={product.title} className="max-h-36 object-contain transition-transform duration-300" />
      </div>

      <div className="px-3 pb-3 flex flex-col flex-1">
        <h4 className="font-semibold text-sm leading-tight h-12 overflow-hidden mb-2">{product.title}</h4>
        <p className="price-tag text-lg font-bold mb-3">Rp {Math.round(product.price).toLocaleString('id-ID')}</p>

        <div className="mt-auto flex gap-2">
          <Link to={`/products/${product.id}`} className="btn-secondary text-sm flex-1 text-center">Detail</Link>

          {user?.role === 'user' && (
            <button 
              onClick={() => addToCart(product)} 
              className="btn-accent text-sm flex-1"
            >
              + Cart
            </button>
          )}

          {user?.role === 'admin' && (
            <button 
              onClick={() => removeProduct(product.id)} 
              className="btn-danger text-sm flex-1"
            >
              Hapus
            </button>
          )}
        </div>
      </div>
    </div>
  )
}