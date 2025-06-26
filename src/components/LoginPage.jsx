import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter both username and password!");
    }
  };

  return (
    <div className="login-page">
      <img src="/img/vodafone-logo1.png" alt="Logo" className="logo" />
      <h2>Retail Guide</h2>
      <input
        type="text"
        id="username"
        placeholder="User name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="credit">
        <h4>❤ Info By Alex Lageteeh Staff ❤</h4>
        <h4>❤ App By Mohamed Ouf ❤</h4>
      </div>
    </div>
  );
}
