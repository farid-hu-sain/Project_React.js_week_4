import { useProducts } from '../contexts/ProductContext'
import { useMemo } from 'react'

export default function useProductsMemoized() {
  const ctx = useProducts()
  const count = useMemo(() => ctx.products.length, [ctx.products])
  return { ...ctx, count }
}
