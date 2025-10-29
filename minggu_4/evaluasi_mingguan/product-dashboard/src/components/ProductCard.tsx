import React from 'react'
import useProducts from '../hooks/useProducts'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { Product } from 'type'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, removeProduct } = useProducts()
  const { user } = useAuth()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const handleRemoveProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (window.confirm(`Hapus produk "${product.title}"?`)) {
      removeProduct(product.id)
    }
  }

  return (
    <div className="product-card flex flex-col h-full">
      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-3">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-36 object-contain transition-transform duration-300" 
        />
      </div>

      {/* Product Info */}
      <div className="px-3 pb-3 flex flex-col flex-1">
        {/* Product Title */}
        <h4 className="font-semibold text-sm leading-tight h-12 overflow-hidden mb-2 line-clamp-2">
          {product.title}
        </h4>

        {/* Product Category */}
        <p className="text-xs text-gray-500 mb-1 capitalize">
          {product.category}
        </p>

        {/* Product Price */}
        <p className="price-tag text-lg font-bold mb-3">
          Rp {Math.round(product.price).toLocaleString('id-ID')}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-2">
          {/* Detail Button */}
          <Link 
            to={`/products/${product.id}`} 
            className="btn-secondary text-sm flex-1 text-center py-2"
            onClick={(e) => e.stopPropagation()}
          >
            Detail
          </Link>

          {/* User: Add to Cart Button */}
          {user?.role === 'user' && (
            <button 
              onClick={handleAddToCart}
              className="btn-accent text-sm flex-1 py-2"
            >
              + Cart
            </button>
          )}

          {/* Admin: Delete Button */}
          {user?.role === 'admin' && (
            <button 
              onClick={handleRemoveProduct}
              className="btn-danger text-sm flex-1 py-2"
            >
              Hapus
            </button>
          )}

          {/* No User: Show Login Prompt */}
          {!user && (
            <Link 
              to="/login" 
              className="btn-accent text-sm flex-1 text-center py-2"
              onClick={(e) => e.stopPropagation()}
            >
              Login to Buy
            </Link>
          )}
        </div>

        {/* Stock Indicator */}
        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
          <span className="badge badge-primary">
            {product.category}
          </span>
          <span>⭐ {product.rating?.rate || '4.5'}</span>
        </div>
      </div>
    </div>
  )
}