export type ID = string | number;

export interface User {
  id: ID;
  name: string;
  email?: string;
  isActive: boolean;
  metadata?: Record<string, unknown>;
}

export interface Product {
  id: ID;
  title: string;
  price: number;
  tags?: string[];
  inStock: boolean;
}

// Utility Types
export type ProductPreview = Pick<Product, "id" | "title" | "price">;
export type ProductUpdate = Partial<Omit<Product, "id">>;
