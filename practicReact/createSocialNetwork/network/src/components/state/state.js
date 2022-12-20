// ActionCreator Profile
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// ActionCreator Dialogs
const UPDATE_DIALOG_ID = "UPDATE-DIALOG-ID";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const store = {
  _callSubscriber: null,
  _dialogMessage: null,
  _state: {
    profile: {
      name: "Aleksey Flechin",
      urlAvatar: "./img/profileImg/avatar.png",
      urlMainPhoto: "./img/profileImg/profileMainImg.jpg",
      posts: ["hi", "my name", "Alex", "Yo"],
      newPostText: "hi",
    },
    dialogs: {
      newMessageBody: "123",
      dialogId: 0,
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
    },
    friends: [
      {
        name: "Ivan",
        url: "https://img.freepik.com/premium-psd/3d-illustration-smiling-mature-man-cartoon-close-up-portrait-standing-gray-hair-man-blue-background-3d-avatar-ui-ux_1020-5075.jpg?w=2000",
      },
      {
        name: "Kost",
        url: "https://img.freepik.com/premium-psd/3d-illustration-smiling-caucasian-man-cartoon-close-up-portrait-standing-caucasian-man-with-moustache-yellow-background-3d-avatar-ui-ux_1020-5070.jpg",
      },
      {
        name: "Ros",
        url: "https://img.freepik.com/premium-psd/3d-illustration-3d-cartoon-avatar-stylish-old-man-with-mustache-cartoon-close-up-portrait-gray-background-3d-avatar-ui-ux_1020-5088.jpg?w=360",
      },
    ],
  },

  getstate() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  showDialogMessage() {
    this._state.dialogs.message = this._state.dialogs.dialogs.find(
      (item) => item.id === this._state.dialogs.dialogId
    );
  },

  dispatch(action) {
    // dispatch Action Profile
    if (action.type === "ADD-POST") {
      this._state.profile.posts.push(this._state.profile.newPostText);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profile.newPostText = action.newText;
      this._callSubscriber(this._state);
      // dispatch Action Dialogs
    } else if (action.type === "UPDATE-DIALOG-ID") {
      this._state.dialogs.dialogId = action.id;
      this._state.dialogs.newMessageBody = "123";
      this.showDialogMessage();
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
      this._state.dialogs.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      if (this._state.dialogs.dialogId === 0) {
        return;
      } else {
        let body = this._state.dialogs.newMessageBody;
        //
        this._state.dialogs.dialogs[this._state.dialogs.dialogId].message.push({
          id: "me",
          message: body,
        });
        this._state.dialogs.newMessageBody = "123";
        //
        this._callSubscriber(this._state);
      }
    }
  },
};

// ActionCreator Profile
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updatNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
// ActionCreator Dialogs
export const updateDialogId = (id) => {
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

export default store;
