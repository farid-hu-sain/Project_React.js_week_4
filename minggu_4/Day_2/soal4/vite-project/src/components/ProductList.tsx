import { useAsync } from "../hooks/useAsync";
import { isProduct } from "../utils/typeGuards";
import { Product } from "../utils/typeGuards";

export default function ProductList() {
  const { data, loading, error } = useAsync<Product[]>(async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const json = await res.json();
    return json.map((p: any) => ({
      id: p.id,
      name: p.title,
      price: p.price,
    }));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data?.length) return <p>No products</p>;

  return (
    <div>
      {data.filter(isProduct).map((p) => (
        <div key={p.id} style={{ marginBottom: "1rem" }}>
          <strong>{p.name}</strong> - Rp{p.price.toLocaleString()}
        </div>
      ))}
    </div>
  );
}
