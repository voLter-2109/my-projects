import { Component } from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SinglPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {/* найти что это значит */}
      {post && (
        <>
          <h1>{post.title}</h1>

          <p>{post.body}</p>
          <Link to={`/blog/${id}/edit`}>Edit post</Link>
        </>
      )}
    </div>
  );
};

export default SinglPage;
