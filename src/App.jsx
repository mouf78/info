import { useState, useEffect } from "react";
import { fetchTopics } from "./utils/api";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import "./styles/App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [topicsData, setTopicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchTopics();
        setTopicsData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data. Please try again later.</div>;

  return (
    <div className="app">
      {isLoggedIn ? (
        <MainPage topicsData={topicsData} />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}
