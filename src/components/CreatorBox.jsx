export default function CreatorBox({ topic }) {
  const username = topic?.["Creator username"]?.replace("@", "").trim();
  const avatarSrc = username
    ? `/img/${username}.png`
    : "/img/vodafone-logo1.png";

  return (
    <div className="creator-box">
      <div className="creator-details">
        <div className="name">
          {topic ? `By: ${topic["Creator name"]}` : "By: Creator Name"}
        </div>
        <div className="username">
          {username ? `@${username}` : "@username"}
        </div>
      </div>
      <img
        src={avatarSrc}
        alt="Creator Avatar"
        onError={(e) => {
          e.target.src = "/img/vodafone-logo1.png";
        }}
      />
    </div>
  );
}
