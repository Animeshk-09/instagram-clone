import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLike = async (postId) => {
  await axios.put(`/api/posts/${postId}/like`, {
    userId: localStorage.getItem("userId")
  });

  window.location.reload(); // quick refresh
};

 return (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: "400px" }}>
      <h2>Feed</h2>

      {posts.map(post => (
        <div
          key={post._id}
          style={{
            border: "1px solid #dbdbdb",
            borderRadius: "8px",
            marginBottom: "20px",
            background: "#fff"
          }}
        >
          {post.image && (
  <img
    src={post.image}
    width="100%"
    onError={(e) => (e.target.style.display = "none")}
  />
)}

          <div style={{ padding: "10px" }}>
            <p>{post.caption}</p>

            <p>❤️ {post.likes.length} likes</p>

            <button onClick={() => handleLike(post._id)}>
              Like
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}