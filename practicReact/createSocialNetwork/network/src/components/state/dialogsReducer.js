const UPDATE_DIALOG_ID = "UPDATE-DIALOG-ID";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
const cloneDeep = require("lodash/cloneDeep");

let initialState = {
  newMessageBody: "123",
  dialogId: 1,
  message: [],
  dialogs: [
    {
      name: "",
      id: "0",
      message: [{ id: "me", message: "select dialog" }],
    },
    {
      name: "Ivan",
      id: "1",
      message: [
        { id: "me", message: "hi" },
        { id: "you", message: "hi Ivan" },
        { id: "me", message: "YO" },
        { id: "you", message: "hi Ros" },
        { id: "you", message: "React" },
      ],
    },
    {
      name: "Sau",
      id: "2",
      message: [
        { id: "me", message: "hi" },
        { id: "you", message: "hi Sau" },
        { id: "you", message: "hi Ros" },
        { id: "you", message: "React" },
      ],
    },
    {
      name: "Kost",
      id: "3",
      message: [
        { id: "me", message: "hi" },
        { id: "you", message: "hi Kost" },
        { id: "me", message: "YO" },
        { id: "me", message: "hi" },
        { id: "you", message: "hi Kost" },
        { id: "me", message: "YO" },
      ],
    },
    {
      name: "Ros",
      id: "4",
      message: [
        { id: "me", message: "hi" },
        { id: "you", message: "hi Ros" },
        { id: "you", message: "React" },
        { id: "me", message: "YO" },
      ],
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DIALOG_ID:
      state.dialogId = action.id;
      state.newMessageBody = "123";
      state.message = state.dialogs.find((item) => item.id === state.dialogId);

      return (state = cloneDeep(state));

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return (state = cloneDeep(state));

    case SEND_MESSAGE:
      if (state.dialogId === 0) {
        return state;
      } else {
        let body = state.newMessageBody;
        //
        state.dialogs[state.dialogId].message.push({
          id: "me",
          message: body,
        });
        state.newMessageBody = "123";
      }
      return (state = cloneDeep(state));

    default:
      return (state = cloneDeep(state));
  }
};

export default dialogsReducer;

export const updateDialogIdActionCreator = (id) => {
  return {
    type: UPDATE_DIALOG_ID,
    id: id,
  };
};
export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export const sendMessageActionCreator = (id) => {
  return {
    type: SEND_MESSAGE,
    // id: id,
  };
};
