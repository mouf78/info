import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("🟢 Auth state changed:", firebaseUser);
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Send login link to email
  const sendLoginEmail = (userEmail) => {
    console.log("📧 Attempting to send login email to:", userEmail);

    if (!userEmail || !userEmail.includes("@")) {
      alert("Please enter a valid email address.");
      console.warn("⛔ Invalid email input:", userEmail);
      return;
    }

    const actionCodeSettings = {
      url: window.location.origin + "/finishSignIn",
      handleCodeInApp: true,
    };

    console.log("📨 Action Code Settings:", actionCodeSettings);

    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", userEmail);
        alert("Login link sent to your email!");
        console.log("✅ Email link sent successfully.");
      })
      .catch((error) => {
        console.error(
          "❌ Error sending email link:",
          error.code,
          error.message
        );
        alert("Failed to send login link. Check console for details.");
      });
  };

  // Handle login after clicking the link in email
  const completeSignIn = () => {
    const url = window.location.href;
    console.log("🔁 Checking if current URL is a sign-in link:", url);

    if (isSignInWithEmailLink(auth, url)) {
      let email = window.localStorage.getItem("emailForSignIn");

      if (!email) {
        email = window.prompt("Please enter your email to complete sign-in:");
      }

      if (!email || !email.includes("@")) {
        alert("Invalid email.");
        console.warn("⛔ Invalid email at sign-in:", email);
        return;
      }

      console.log("🔐 Completing sign-in for:", email);

      signInWithEmailLink(auth, email, url)
        .then((result) => {
          console.log("✅ Signed in successfully:", result.user);
          setUser(result.user);
          window.localStorage.removeItem("emailForSignIn");
          window.location.href = "/";
        })
        // .catch((error) => {
        //   console.error("❌ Error signing in:", error.code, error.message);
        //   alert("Sign-in failed. Please try again.");
        // });
    } else {
      console.log("⚠️ Not a valid sign-in link.");
    }
  };

  // Logout
  const logout = () => {
    console.log("🔒 Logging out...");
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("✅ Logged out successfully.");
      })
      .catch((error) => console.error("❌ Logout error:", error));
  };

  return (
    <AuthContext.Provider
      value={{ user, sendLoginEmail, completeSignIn, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
