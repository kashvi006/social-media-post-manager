import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");
  const dispatch = useDispatch();
 

const handleSubmit = (e) => {
  e.preventDefault();

  if (!title || !content) {
    alert("Please fill all fields");
    return;
  }

  const newPost = {
    id: Date.now(),
    title,
    content,
    platform,
  };

  dispatch(addPost(newPost));

  setTitle("");
  setContent("");
  setPlatform("LinkedIn");
};

  return (
    <div className="card">
      <h2>✍️ Create New Post</h2>

      <form onSubmit={handleSubmit}>

        <label>Post Title</label>

<input
  type="text"
  placeholder="Enter your post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <label>Content</label>

<textarea
  placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

     

       <label>Platform</label>

<select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>LinkedIn</option>
          <option>Instagram</option>
          <option>Twitter</option>
          <option>Facebook</option>
        </select>

        <select
  value={platform}
  onChange={(e) => setPlatform(e.target.value)}
>
  <option>LinkedIn</option>
  <option>Instagram</option>
  <option>Twitter</option>
  <option>Facebook</option>
</select>

<p
  style={{
    textAlign: "right",
    color: "#666",
    marginTop: "-10px",
    marginBottom: "15px",
    fontSize: "14px",
  }}
>
  {content.length}/280 Characters
</p>

<button type="submit">
  ➕ Add Post
</button> 

      </form>
    </div>
  );
}

export default AddPost;