import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
  };

  return (
    <>
      <div>New Post</div>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addPost}>Post</button>
      <div>My Post</div>
      <div className={s.message}>
        <Post messages={props.data} />
      </div>
    </>
  );
};

export default MyPosts;
