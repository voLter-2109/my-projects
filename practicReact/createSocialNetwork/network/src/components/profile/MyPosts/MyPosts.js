import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
 
  return (
    <>
      <div>My Post</div>
      <div>New Post</div>
      <div className={s.message}>
        <Post messages={props.data} />
      </div>
    </>
  );
};

export default MyPosts;
