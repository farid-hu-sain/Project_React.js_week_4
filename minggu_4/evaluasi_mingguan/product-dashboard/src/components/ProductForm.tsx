import React, { useEffect, useState } from 'react'
import { Product } from 'type'


export default function ProductForm({ initial, onCancel, onSave }: {
  initial?: Partial<Product> | null
  onCancel: () => void
  onSave: (p: Omit<Product, 'id'> | Product) => void
}) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [price, setPrice] = useState<number>(initial?.price ?? 0)
  const [image, setImage] = useState(initial?.image ?? '')
  const [category, setCategory] = useState(initial?.category ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')

  useEffect(() => {
    if (initial) {
      setTitle(initial.title ?? '')
      setPrice(initial.price ?? 0)
      setImage(initial.image ?? '')
      setCategory(initial.category ?? '')
      setDescription(initial.description ?? '')
    }
  }, [initial])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return alert('Title wajib diisi')
    const payload = { title: title.trim(), price, image, category, description }
    if (initial && (initial as Product).id) {
      onSave({ ...(initial as Product), ...payload })
    } else {
      onSave(payload)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input className="mt-1 block w-full rounded-md border px-2 py-1" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input type="number" className="mt-1 block w-full rounded-md border px-2 py-1" value={price} onChange={e => setPrice(Number(e.target.value))} />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input className="mt-1 block w-full rounded-md border px-2 py-1" value={image} onChange={e => setImage(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <input className="mt-1 block w-full rounded-md border px-2 py-1" value={category} onChange={e => setCategory(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea className="mt-1 block w-full rounded-md border px-2 py-1" value={description} onChange={e => setDescription(e.target.value)} />
      </div>

      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-3 py-1 rounded-md border">Batal</button>
        <button type="submit" className="px-3 py-1 rounded-md bg-blue-600 text-white">Simpan</button>
      </div>
    </form>
  )
}
