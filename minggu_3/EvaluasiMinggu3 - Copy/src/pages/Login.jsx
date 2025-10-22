import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name || "User");
    navigate(from, { replace: true });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nama" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
