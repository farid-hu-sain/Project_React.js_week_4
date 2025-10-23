import UserCard from "../components/UserCard";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Home</h1>
      <UserCard name="Jason" age={22} active={true} />
    </div>
  );
}
