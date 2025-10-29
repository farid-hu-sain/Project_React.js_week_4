import React, { useCallback, useState } from 'react'
import ProductForm from '../components/ProductForm'
import useProducts from '../hooks/useProducts'
import useAuth from '../hooks/useAuth'

export default function Dashboard() {
  const { products, addProduct, updateProduct, removeProduct } = useProducts()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [editing, setEditing] = useState<any | null>(null)

  const onAdd = useCallback(() => { setEditing(null); setIsOpen(true) }, [])
  const onEdit = useCallback((p: any) => { setEditing(p); setIsOpen(true) }, [])

  const onSave = useCallback((payload: any) => {
    if (editing && editing.id) {
      updateProduct(editing.id, payload)
    } else {
      addProduct(payload)
    }
    setIsOpen(false)
  }, [addProduct, updateProduct, editing])

  const onDelete = useCallback((id: number) => {
    if (!confirm('Hapus produk ini?')) return
    removeProduct(id)
  }, [removeProduct])

  if (user?.role !== 'admin') return <div className="card">Hanya admin yang dapat mengakses dashboard.</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div>
          <button className="px-3 py-1 rounded-md border" onClick={onAdd}>Tambah Produk</button>
        </div>
      </div>

      <div className="space-y-3">
        {products.map(p => (
          <div key={p.id} className="card flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={p.image} alt={p.title} className="w-16 h-16 object-contain" />
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-slate-500">Rp {Math.round(p.price).toLocaleString('id-ID')}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => onEdit(p)} className="px-3 py-1 rounded-md border">Edit</button>
              <button onClick={() => onDelete(p.id)} className="px-3 py-1 rounded-md bg-red-600 text-white">Hapus</button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl p-4 w-full max-w-lg">
            <h4 className="text-lg font-semibold mb-2">{editing ? 'Edit Produk' : 'Tambah Produk'}</h4>
            <ProductForm initial={editing} onCancel={() => setIsOpen(false)} onSave={onSave} />
          </div>
        </div>
      )}
    </div>
  )
}
