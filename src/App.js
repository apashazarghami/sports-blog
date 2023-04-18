import HomePage from "./components/Home/HomePage";
import AuthorPage from "./components/authors/AuthorPage";
import BlogPage from "./components/blogs/BlogPage";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
