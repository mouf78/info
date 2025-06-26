import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const { sendLoginEmail } = useAuth(); // from AuthContext

  return (
    <div className="login-page">
      <img src="/img/vodafone-logo1.png" alt="Logo" className="logo" />
      <h2>Retail Guide</h2>

      <input
        type="email"
        id="email"
        placeholder="Enter Vodafone Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <button onClick={() => sendLoginEmail(email)}>Send Login Link</button>

      <div className="credit">
        <h4>❤ Info By Alex Lageteeh Staff ❤</h4>
        <h4>❤ App By Mohamed Ouf ❤</h4>
      </div>
    </div>
  );
}
