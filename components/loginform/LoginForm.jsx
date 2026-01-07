"use client";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleInsert = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Insert</h2>

      <input type="text" placeholder="Username"
        value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />

      <input type="password" placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

      <button onClick={handleInsert}>Save User</button>

      <p>{message}</p>
    </div>
  );
}
