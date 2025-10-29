import React from 'react'
import ProductCard from '../components/ProductCard'
import useProducts from '../hooks/useProducts'

export default function Products() {
  const { products, loading, error, fetchProducts, count } = useProducts()

  if (loading) return <div className="card">Loading products...</div>
  if (error) return (
    <div className="card">
      <p className="text-red-600">{error}</p>
      <div className="mt-3">
        <button onClick={() => void fetchProducts()} className="px-3 py-1 rounded-md border">Retry</button>
      </div>
    </div>
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Products <span className="text-sm text-slate-500">({count})</span></h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
