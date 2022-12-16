import s from "./Post.module.scss";

const Post = (props) => {

  const { messages } = props;
  let messageId = 0;
  const message = messages.map((m) => {
    messageId++;
    return (
      <div className={s.message} key={messageId}>
        {m}
      </div>
    );
  });
  return message;
};

export default Post;
