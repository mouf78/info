export default function TopicContent({ topic }) {
  if (!topic) {
    return (
      <div className="content">
        <p>
          <strong>Process & Policy:</strong>
          <br />
          <span></span>
        </p>
        <p>
          <strong>Documents & Forms:</strong>
          <br />
          <span></span>
        </p>
        <p>
          <strong>Siebel:</strong>
          <br />
          <span></span>
        </p>
        <p>
          <strong>CCAT:</strong>
          <br />
          <span></span>
        </p>
        <p>
          <strong>Wincash:</strong>
          <br />
          <span></span>
        </p>
      </div>
    );
  }

  return (
    <div className="content">
      <p>
        <strong>Process & Policy:</strong>
        <br />
        <span>{topic.Process}</span>
      </p>
      <p>
        <strong>Documents & Forms:</strong>
        <br />
        <span>{topic.Documents}</span>
      </p>
      <p>
        <strong>Siebel:</strong>
        <br />
        <span>{topic.Siebel}</span>
      </p>
      <p>
        <strong>CCAT:</strong>
        <br />
        <span>{topic.CCAT}</span>
      </p>
      <p>
        <strong>Wincash:</strong>
        <br />
        <span>{topic.WinCash}</span>
      </p>
    </div>
  );
}
