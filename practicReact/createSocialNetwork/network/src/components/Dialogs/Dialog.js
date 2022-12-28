import s from "./Dialogs.module.scss";

const Dialog = (props) => {
  const Message = () => {
    if (props.message.message === undefined || props.message.message.length === 0) {
      return <p>select dialog</p>;
    } else {
      const mes = props.message.message.message.map((item) => {
        let clName = item.id === "me" ? s.left : s.right;
        let foto =
          item.id === "me"
            ? "../../img/profileImg/avatar.png"
            : "https://img.freepik.com/premium-psd/3d-illustration-smiling-mature-man-cartoon-close-up-portrait-standing-gray-hair-man-blue-background-3d-avatar-ui-ux_1020-5075.jpg?w=2000";
        return (
          <>
            <div className={clName}>
              <img src={foto} alt="" />

              <p className={clName}>{item.message}</p>
            </div>
          </>
        );
      });
      return mes;
    }
  };

  return <Message />;
};

export default Dialog;
