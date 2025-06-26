import { useState } from "react";
import Header from "./Header";
import TopicContent from "./TopicContent";
import CreatorBox from "./CreatorBox";
import Footer from "./Footer";

export default function MainPage({ topicsData }) {
  const [searchQuery, setSearchQuery] = useState("");

  // ⛑️ Validate topicsData
  if (!Array.isArray(topicsData)) {
    console.warn("⚠️ topicsData is not available yet:", topicsData);
    return <div>Loading topics...</div>;
  }

  const trimmedQuery = searchQuery.trim().toLowerCase();

  const foundTopic = topicsData.find(
    (topic) =>
      topic.Keywords && topic.Keywords.toLowerCase().includes(trimmedQuery)
  );

  return (
    <div className="main-page">
      <Header />
      <input
        type="text"
        id="searchInput"
        placeholder="Type search topic"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div id="topicTitle" className="section-title">
        {foundTopic
          ? foundTopic.Title
          : trimmedQuery
          ? "No matching topic found"
          : "Title"}
      </div>

      <TopicContent topic={foundTopic} />
      <CreatorBox topic={foundTopic} />
      <Footer />
    </div>
  );
}
