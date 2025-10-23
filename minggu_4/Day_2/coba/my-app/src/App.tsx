import React, { useEffect } from "react";
import { UserCard } from "@/components/UserCard";
import { ProductList } from "@/components/ProductList";
import { ProductForm } from "@/components/ProductForm";
import useAsync from "@/hooks/useAsync";
import type { User, ProductPreview, Product } from "@/types";
import { isProduct } from "@/utils/typeGuards";

// Mock async data
async function fetchUsers(): Promise<User[]> {
  return [
    { id: 1, name: "Ayu", email: "ayu@example.com", isActive: true },
    { id: 2, name: "Budi", isActive: false },
  ];
}

async function fetchProducts(): Promise<ProductPreview[]> {
  return [
    { id: "p1", title: "Coffee", price: 3.5 },
    { id: "p2", title: "Tea", price: 2.0 },
  ];
}

export default function App() {
  const usersAsync = useAsync(fetchUsers);
  const productsAsync = useAsync(fetchProducts);

  useEffect(() => {
    usersAsync.execute();
    productsAsync.execute();
  }, []);

  const handleToggle = (id: User["id"], next: boolean) =>
    console.log("toggle", id, next);

  const handleAddToCart = (productId: Product["id"], qty: number) =>
    console.log("add", productId, qty);

  const handleSave = (payload: Partial<ProductPreview>) =>
    console.log("save", payload);

  useEffect(() => {
    const maybe: unknown = { id: "x", title: "x", price: 1, inStock: true };
    if (isProduct(maybe)) console.log("valid product", maybe.title);
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>🧱 Type-safe Components Demo</h1>

      <section>
        <h2>Users</h2>
        {usersAsync.status === "loading" && <p>Loading users…</p>}
        {usersAsync.status === "error" && <p>Error loading users</p>}
        {usersAsync.data?.map((u) => (
          <UserCard key={String(u.id)} user={u} onToggleActive={handleToggle} />
        ))}
      </section>

      <section>
        <h2>Products</h2>
        {productsAsync.status === "loading" && <p>Loading products…</p>}
        {productsAsync.status === "error" && <p>Error loading products</p>}
        {productsAsync.data && (
          <ProductList items={productsAsync.data} onAddToCart={handleAddToCart} />
        )}
      </section>

      <section>
        <h2>Create / Edit Product</h2>
        <ProductForm onSave={handleSave} />
      </section>
    </main>
  );
}
