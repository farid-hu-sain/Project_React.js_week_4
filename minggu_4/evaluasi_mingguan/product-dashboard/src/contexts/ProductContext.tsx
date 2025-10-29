import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'

import { useAuth } from './AuthContext'
import { Product } from 'type'

interface ProductContextType {
  products: Product[]
  loading: boolean
  error: string | null
  cart: (Product & { qty: number })[]
  fetchProducts: () => Promise<void>
  addProduct: (p: Omit<Product, 'id'>) => void
  updateProduct: (id: number, patch: Partial<Product>) => void
  removeProduct: (id: number) => void
  addToCart: (p: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cart, setCart] = useState<(Product & { qty: number })[]>([])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
      const data: Product[] = await res.json()
      setProducts(data)
    } catch (e: any) {
      setError(e?.message ?? 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchProducts()
  }, [fetchProducts])

  // ADMIN CRUD
  const addProduct = useCallback((p: Omit<Product, 'id'>) => {
    if (user?.role !== 'admin') return alert('🚫 Hanya admin yang bisa menambah produk.')
    setProducts(prev => [{ ...p, id: prev.length ? Math.max(...prev.map(x => x.id)) + 1 : 1 }, ...prev])
  }, [user])

  const updateProduct = useCallback((id: number, patch: Partial<Product>) => {
    if (user?.role !== 'admin') return alert('🚫 Hanya admin yang bisa mengedit produk.')
    setProducts(prev => prev.map(prod => (prod.id === id ? { ...prod, ...patch } : prod)))
  }, [user])

  const removeProduct = useCallback((id: number) => {
    if (user?.role !== 'admin') return alert('🚫 Hanya admin yang bisa menghapus produk.')
    setProducts(prev => prev.filter(p => p.id !== id))
  }, [user])

  // USER CART
  const addToCart = useCallback((p: Product) => {
    if (user?.role === 'admin') return alert('Admin tidak dapat menambahkan item ke keranjang.')
    setCart(prev => {
      const exist = prev.find(x => x.id === p.id)
      if (exist) return prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
      return [...prev, { ...p, qty: 1 }]
    })
  }, [user])

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  return (
    <ProductContext.Provider value={{
      products, loading, error,
      cart, fetchProducts,
      addProduct, updateProduct, removeProduct,
      addToCart, removeFromCart, clearCart
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProducts must be used within ProductProvider')
  return ctx
}
