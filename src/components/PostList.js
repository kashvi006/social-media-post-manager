import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  editPost,
} from "../features/posts/postsSlice";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const selectedPlatform = useSelector(
    (state) => state.platforms.selectedPlatform
  );

  const filteredPosts =
    selectedPlatform === "All"
      ? posts
      : posts.filter(
          (post) => post.platform === selectedPlatform
        );

  const handleEdit = (post) => {
    const newTitle = prompt("Enter new title", post.title);
    const newContent = prompt("Enter new content", post.content);

    if (newTitle && newContent) {
      dispatch(
        editPost({
          id: post.id,
          title: newTitle,
          content: newContent,
        })
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📰 Recent Posts</h2>

      {filteredPosts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        filteredPosts.map((post) => (
          <div key={post.id} className="post-card">
            {/* Avatar + Title + Date */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background: "#6366f1",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {post.title.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3>{post.title}</h3>

                <p
                  style={{
                    color: "#888",
                    fontSize: "14px",
                  }}
                >
                  🕒 {post.date}
                </p>
              </div>
            </div>

            {/* Content */}
            <p>{post.content}</p>

            {/* Platform */}
            <div className="platform">
              {post.platform === "LinkedIn"
                ? "💼 LinkedIn"
                : post.platform === "Instagram"
                ? "📸 Instagram"
                : post.platform === "Twitter"
                ? "🐦 Twitter"
                : "👥 Facebook"}
            </div>

            {/* Action Buttons */}
            <div className="actions">
              <button
                className="edit"
                onClick={() => handleEdit(post)}
              >
                ✏️ Edit
              </button>

              <button
                className="delete"
                onClick={() => dispatch(deletePost(post.id))}
              >
                🗑 Delete
              </button>
            </div>

            <hr />

            {/* Social Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "15px",
              }}
            >
              <button
                style={{
                  background: "#f3f4f6",
                  color: "#333",
                }}
              >
                ❤️ Like
              </button>

              <button
                style={{
                  background: "#f3f4f6",
                  color: "#333",
                }}
              >
                💬 Comment
              </button>

              <button
                style={{
                  background: "#f3f4f6",
                  color: "#333",
                }}
              >
                📤 Share
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;