import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FinishSignIn from "./components/FinishSignIn";
import MainPage from "./components/MainPage";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import { fetchTopics } from "./utils/api"; // adjust if needed

function AppRoutes() {
  const { user } = useAuth();
  const [topicsData, setTopicsData] = useState(null);
  const [loadingTopics, setLoadingTopics] = useState(true);

  useEffect(() => {
    if (user) {
      fetchTopics()
        .then((data) => {
          console.log("✅ Topics loaded:", data);
          setTopicsData(data);
        })
        .catch((err) => {
          console.error("❌ Error loading topics:", err);
        })
        .finally(() => {
          setLoadingTopics(false);
        });
    }
  }, [user]);

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/finishSignIn" element={<FinishSignIn />} />
      </Routes>
    );
  }

  if (loadingTopics) {
    return <div>⏳ Loading topics...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<MainPage topicsData={topicsData} />} />
      <Route path="/finishSignIn" element={<FinishSignIn />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
