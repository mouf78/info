// components/FinishSignIn.jsx
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function FinishSignIn() {
  const { completeSignIn } = useAuth();

  useEffect(() => {
    completeSignIn();
  }, []);

  return <div>Signing you in...</div>;
}
