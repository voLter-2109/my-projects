import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <div>My Post</div>
      <div>New Post</div>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}

export default MyPosts;
