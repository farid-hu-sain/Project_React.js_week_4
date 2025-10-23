import React from "react";
import type { Product, ProductPreview } from "@/types";

export interface ProductListProps {
  items: ProductPreview[];
  onAddToCart: (productId: Product["id"], qty: number) => void;
}

export function ProductList({ items, onAddToCart }: ProductListProps) {
  return (
    <section>
      <h2>Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={String(item.id)} style={{ marginBottom: 12 }}>
            <strong>{item.title}</strong> — ${item.price.toFixed(2)}{" "}
            <button onClick={() => onAddToCart(item.id, 1)}>Add</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
