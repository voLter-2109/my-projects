import React from "react";
import {
  addPostActionCreator,
  updatNewPostTextActionCreator,
} from "../../state/state";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatNewPostTextActionCreator (text));
  };

  return (
    <>
      <div>New Post</div>
      <textarea
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={addPost}>Post</button>
      <div>My Post</div>
      <div className={s.message}>
        <Post messages={props.posts} />
      </div>
    </>
  );
};

export default MyPosts;
