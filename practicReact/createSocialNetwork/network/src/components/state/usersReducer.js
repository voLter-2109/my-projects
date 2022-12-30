const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Sausan",
      followed: false,
      fotoUrl:
        "https://img.freepik.com/premium-psd/3d-illustration-3d-cartoon-avatar-stylish-old-man-with-mustache-cartoon-close-up-portrait-gray-background-3d-avatar-ui-ux_1020-5088.jpg?w=360",
      status: "Helloy",
      location: { city: "Sant", country: "Russia" },
    },
    {
      id: 2,
      fullName: "Kost",
      followed: false,
      fotoUrl:
        "https://img.freepik.com/premium-psd/3d-illustration-smiling-caucasian-man-cartoon-close-up-portrait-standing-caucasian-man-with-moustache-yellow-background-3d-avatar-ui-ux_1020-5070.jpg",
      status: "Hi",
      location: { city: "Mosk", country: "Russia" },
    },
    {
      id: 3,
      fullName: "Alex",
      followed: true,
      fotoUrl:
        "https://img.freepik.com/premium-psd/3d-illustration-smiling-mature-man-cartoon-close-up-portrait-standing-gray-hair-man-blue-background-3d-avatar-ui-ux_1020-5075.jpg?w=2000",
      status: "Yo",
      location: { city: "King", country: "Russia" },
    },
  ],
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
        users: [...state.users, ...action.users],
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
