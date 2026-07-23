import "./App.css";

import AddPost from "./components/AddPost";
import PlatformFilter from "./components/PlatformFilter";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>🚀 Social Post Composer</h1>
        <p>Create • Manage • Share</p>
      </header>

      <AddPost />

      <PlatformFilter />

      <PostList />

    </div>
  );
}

export default App;