const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  name: "Aleksey Flechin",
  urlAvatar: "./img/profileImg/avatar.png",
  urlMainPhoto: "./img/profileImg/profileMainImg.jpg",
  posts: [
    { id: 1, message: "hi" },
    { id: 2, message: "YO" },
    { id: 3, message: "Helloy" },
    { id: 4, message: "World" },
  ],
  newPostText: "hi",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({ id: action.id, message: state.newPostText });
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = (id) => {
  return {
    type: ADD_POST,
    id: id,
  };
};
export const updatNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
