import { useAuth } from "../contexts/AuthContext"; // 👈 Adjust path if needed

export default function Footer() {
  const { logout } = useAuth(); // 👈 use logout from context

  return (
    <footer>
      ❤ <span>Alex Lageteeh Store</span> ❤
      <div className="logo-title">
        <div style={{ textAlign: "right", margin: "10px 20px" }}>
          <button
            onClick={logout}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          >
            🔒 Logout
          </button>
        </div>
      </div>
    </footer>
  );
}
