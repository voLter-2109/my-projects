import { Component } from "react";

//
import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage";
import Blog from "./pages/BlogPage";
import CreatePost from "./pages/CreatePost";
import SinglPage from "./pages/SinglPage";
import EditBlog from "./pages/EditPage";
import Home from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layaout";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*  */}
          {/* index первая станица которая отрисовывается   */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SinglPage />} />
          <Route path="blog/:id/edit" element={<EditBlog />} />
          <Route path="blog/new" element={<CreatePost />} />
          <Route path="*" element={<NotFoundPage />} />
          {/*  */}
        </Route>
      </Routes>
    );
  }
}
