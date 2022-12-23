import React from "react";
import {
  addPostActionCreator,
  updatNewPostTextActionCreator,
} from "../../state/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const addPost = () => {
    let id = new Date().getTime();
    props.dispatch(addPostActionCreator(id));
  };

  const onPostChange = (text) => {
    props.dispatch(updatNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      state={props.state}
    />
  );
};

export default MyPostsContainer;
