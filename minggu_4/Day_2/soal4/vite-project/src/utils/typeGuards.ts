export interface Product {
  id: number;
  name: string;
  price: number;
}

export function isProduct(obj: any): obj is Product {
  return typeof obj?.id === "number" && typeof obj?.name === "string" && typeof obj?.price === "number";
}
