import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <>
      <div>{props.message}</div>
    </>
  );
};

export default Post;
