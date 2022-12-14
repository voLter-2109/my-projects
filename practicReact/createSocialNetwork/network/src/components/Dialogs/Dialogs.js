import s from "./Dialogs.module.scss";

import { NavLink, Outlet } from "react-router-dom";
import React from "react";

const Dialogs = (props) => {
  let netMessageElement = React.createRef();

  let activeClass = {
    color: "black",
    backgroundColor: "rgb(197, 118, 118)",
    boxShadow: "2px 2px 10px rgb(0, 0, 0, .2)",
    textDecoration: "none",
  };

  const onDialogId = (e) => {
    const id = e.target.getAttribute("data-id");
    props.onDialogId(id);
  };

  const onNewMessage = () => {
    let text = netMessageElement.current.value;
    console.log(text);
  };

  const DialogName = () => {
    const dialog = props.data.dialogs.map((item) => {
      return (
        <NavLink
          style={({ isActive }) => (isActive ? activeClass : undefined)}
          data-id={item.id}
          key={item.id}
          to={`/dialogs/${item.id}`}
          onClick={onDialogId}
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
      <div className={s.newpost}>
        <textarea
          ref={netMessageElement}
          placeholder="write new post"
        ></textarea>
        <button onClick={onNewMessage}>Post</button>
      </div>
    </div>
  );
};

export default Dialogs;
