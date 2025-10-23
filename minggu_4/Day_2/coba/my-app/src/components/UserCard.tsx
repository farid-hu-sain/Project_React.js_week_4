
import React from "react";
import type { User } from "@/types";

export interface UserCardProps {
  user: User;
  onToggleActive?: (id: User["id"], next: boolean) => void;
}

export function UserCard({ user, onToggleActive }: UserCardProps) {
  const handleClick = () => {
    const next = !user.isActive;
    onToggleActive?.(user.id, next);
  };

  return (
    <article style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3>{user.name}</h3>
      <p>{user.email ?? "— no email —"}</p>
      <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
      <button onClick={handleClick}>Toggle active</button>
    </article>
  );
}
