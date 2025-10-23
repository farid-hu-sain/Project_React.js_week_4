interface UserProps {
  name: string;
  age: number;
  active: boolean;
}

export default function UserCard({ name, age, active }: UserProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: 8 }}>
      <h3>{name}</h3>
      <p>Umur: {age}</p>
      <p>Status: {active ? "Aktif" : "Tidak Aktif"}</p>
    </div>
  );
}
