import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <div>My Post</div>
      <div>New Post</div>
      <div className={s.message}>
          <Post message="hi" />
          <Post message="fine" />
          <Post message="fine" />
          <Post message="fine" />

 
      </div>
    </>
  );
};

export default MyPosts;
