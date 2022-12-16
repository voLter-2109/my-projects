const store = {
  _callSubscriber: null,
  _state: {
    profile: {
      name: "Aleksey Flechin",
      urlAvatar: "./img/profileImg/avatar.png",
      urlMainPhoto: "./img/profileImg/profileMainImg.jpg",
      posts: ["hi", "my name", "Alex", "Yo"],
      newPostText: "hi",
    },
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

    dialogId: "0",
  },

  getstate(){
    return this._state
  },

  addPost() {
    debugger;
    this._state.profile.posts.push(this._state.profile.newPostText);
    this._state.profile.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPost(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;