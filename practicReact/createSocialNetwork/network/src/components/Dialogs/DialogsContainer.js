import s from "./Dialogs.module.scss";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
  updateDialogIdActionCreator,
} from "../state/dialogsReducer";
import Dialog from "./Dialog";
import DialogName from "./DialogsName";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React from "react";

const DialogsContainer = (props) => {
  const onNewMessageBody = (e) => {
    let body = e.target.value;
    props.onNewMessageBody(body);
  };
  
  const clickSendMessage = () => {
    props.onSendMessageClick();
  };

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        <DialogName
          dialogs={props.dialogs.dialogs}
          updateDialogId={props.updateDialogId}
        />
      </div>
      <div className={s.dialog}>
        <Dialog message={props.dialogs} />
      </div>
      <div className={s.newmessage}>
        <textarea
          value={props.dialogs.newMessageBody}
          onChange={onNewMessageBody}
          placeholder="write new post"
        ></textarea>
        <button onClick={clickSendMessage}>Post</button>
      </div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    dialogs: store.dialogs,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateDialogId: bindActionCreators(updateDialogIdActionCreator, dispatch),
    onSendMessageClick: bindActionCreators(sendMessageActionCreator, dispatch),
    onNewMessageBody: bindActionCreators(
      updateNewMessageBodyActionCreator,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
