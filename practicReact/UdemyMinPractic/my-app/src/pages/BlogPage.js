import { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Link key={post.id} {...post} to={`/blog/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
      ;
    </div>
  );
};

export default Blog;
