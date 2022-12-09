const Dialog = (props) => {
  let key = 0;
  const Message = () => {
    const message = props.data.message.map((item) => {
      key++;
      return <p key={key}>{item}</p>;
    });

    return message;
  };

  return <Message />;
};

export default Dialog;
