import React from "react";
import {
  addPostActionCreator,
  updatNewPostTextActionCreator,
} from "../../state/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.dispatch(updatNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.state.posts}
    />
  );
};

export default MyPostsContainer;
