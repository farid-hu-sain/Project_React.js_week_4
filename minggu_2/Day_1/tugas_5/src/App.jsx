import React, { useState } from "react";
import "./App.css";



export default function ValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!newEmail.includes("@")) {
      setEmailError('email harus mengandung karakter "@"');
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("password harus memiliki minimal 8 karakter");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = email.includes("@gmail.com");
    const passwordValid = password.length >= 8;

    if (!emailValid) setEmailError('email harus mengandung karakter "@gmail.com"');
    if (!passwordValid) setPasswordError("password harus memiliki minimal 8 karakter");

    if (emailValid && passwordValid) {
      alert("Formulir berhasil disubmit!");
      console.log({ email, password });
    } else {
      alert("Formulir tidak valid.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulir dengan Validasi</h2>
      <div>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        {emailError && <p style={{ color: "red", fontSize: "0.8em" }}>{emailError}</p>}
      </div>

      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {passwordError && <p style={{ color: "red", fontSize: "0.8em" }}>{passwordError}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
