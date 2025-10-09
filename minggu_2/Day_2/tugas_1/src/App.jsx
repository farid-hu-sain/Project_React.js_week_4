import React, { useState } from "react";

export default function ConditionalRendering() {
  const [isLogin, setIsLogin] = useState(false);

  let message;
  if (isLogin) {
    message = "Selamat datang";
  } else {
    message = "Silakan login dulu";
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}