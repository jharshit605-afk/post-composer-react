import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const limit = platform === "Twitter" ? 280 : 3000;

  return (
    <div className="container">
      <h1>Post Composer</h1>

      <label>Select Platform: </label>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <br /><br />

      <textarea
        rows="8"
        cols="50"
        placeholder="Write your post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <p>
        Character Count: {post.length} / {limit}
      </p>

      {post.length > limit && (
        <p className="error">
          Error: Your post exceeds the {platform} character limit.
        </p>
      )}
    </div>
  );
}

export default App;