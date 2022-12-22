import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = (props) => {
  const postElement = props.posts.map((p) => {
    return <Post message={p} />;
  });

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    let text = e.currentTarget.value;
    props.updateNewPostText(text);
  };

  return (
    <>
      <div>New Post</div>
      <textarea value={props.newPostText} onChange={onPostChange} />
      <button onClick={addPost}>Post</button>
      <div>My Post</div>
      <div className={s.message}>{postElement}</div>
    </>
  );
};

export default MyPosts;
