import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../blog";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <ArticleList posts={blog.posts} />
      </main>

      <aside>
        <About />
      </aside>
    </div>
  );
}

export default App;
