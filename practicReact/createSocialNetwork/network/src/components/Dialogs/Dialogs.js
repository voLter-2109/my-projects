import s from "./Dialogs.module.scss";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
  updateDialogId,
} from "../state/dialogsReducer";

import { NavLink, Outlet } from "react-router-dom";
import React from "react";

let activeClass = {
  color: "black",
  backgroundColor: "rgb(197, 118, 118)",
  boxShadow: "2px 2px 10px rgb(0, 0, 0, .2)",
  textDecoration: "none",
};

const Dialogs = (props) => {
  const onUpdateDialogId = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    props.dispatch(updateDialogId(id));
  };

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };

  const DialogName = () => {
    const dialog = props.dialogs.dialogs.map((item) => {
      return (
        <NavLink
          style={({ isActive }) => (isActive ? activeClass : undefined)}
          data-id={item.id}
          key={item.id}
          to={`/dialogs/${item.id}`}
          onClick={onUpdateDialogId}
        >
          {item.name}
        </NavLink>
      );
    });
    return dialog;
  };

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        <DialogName />
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

export default Dialogs;
