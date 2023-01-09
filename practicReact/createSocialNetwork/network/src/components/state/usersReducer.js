const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              return { ...user, followed: true };
            }
            return user;
          }),
        ],
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              return { ...user, followed: false };
            }
            return user;
          }),
        ],
      };

    case SET_USERS:
      return {
        ...state,
        // users: [...state.users, ...action.users],
        users: [...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (id) => {
  return {
    type: FOLLOW,
    userId: id,
  };
};
export const unFollowAC = (id) => {
  return {
    type: UNFOLLOW,
    userId: id,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export default userReducer;
