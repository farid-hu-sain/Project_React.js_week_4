import React, { useState, FormEvent } from "react";
import type { ProductPreview, ProductUpdate } from "@/types";

export interface ProductFormProps {
  initial?: ProductPreview | null;
  onSave: (payload: ProductUpdate) => void;
}

export function ProductForm({ initial, onSave }: ProductFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [price, setPrice] = useState<string>(
    initial ? String(initial.price) : "0"
  );
  const [inStock, setInStock] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload: ProductUpdate = {
      title,
      price: Number(price),
      inStock,
    };
    onSave(payload);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label>
        Price
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>

      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />{" "}
        In stock
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
