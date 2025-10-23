import { Product } from "@/types";

export function isProduct(value: unknown): value is Product {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Product;
  return (
    (typeof v.id === "string" || typeof v.id === "number") &&
    typeof v.title === "string" &&
    typeof v.price === "number" &&
    typeof v.inStock === "boolean"
  );
}

export function assertIsProduct(value: unknown): asserts value is Product {
  if (!isProduct(value)) throw new TypeError("Value is not a Product");
}
