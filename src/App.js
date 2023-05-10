import HomePage from "./components/Home/HomePage";
import AuthorPage from "./components/authors/AuthorPage";
import BlogPage from "./components/blogs/BlogPage";
import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import BlogPageInfo from "./components/blogs/BlogPageInfo";
import AuthorPageInfo from "./components/authors/AuthorsPageInfo";

function App() {
  return (
    <div>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPageInfo />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors" element={<AuthorPageInfo />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
