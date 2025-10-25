import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import { withLoading } from "./components/hoc/withLoading";

const UserCardWithLoading = withLoading(UserCard);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: "Alexder Jason ", email: "jasonahliit@robux.dev" });
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">
      <h1 className="text-2xl font-bold">🚀 Custom HOC Example</h1>
      <UserCardWithLoading loading={loading} name={user.name} email={user.email} />
    </div>
  );
}
