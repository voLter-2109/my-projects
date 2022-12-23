import s from "./Dialogs.module.scss";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
  updateDialogIdActionCreator,
} from "../state/dialogsReducer";

import DialogName from "./DialogsName";

import { Outlet } from "react-router-dom";
import React from "react";

const DialogsContainer = (props) => {
  const updateDialogId = (id) => {
    props.dispatch(updateDialogIdActionCreator(id));
  };

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        <DialogName
          dialogs={props.dialogs.dialogs}
          updateDialogId={updateDialogId}
        />
      </div>
      <div className={s.dialog}>
        <Outlet />
      </div>
      <div className={s.newmessage}>
        <textarea
          value={props.dialogs.newMessageBody}
          onChange={onNewMessageChange}
          placeholder="write new post"
        ></textarea>
        <button onClick={onSendMessageClick}>Post</button>
      </div>
    </div>
  );
};

export default DialogsContainer;
