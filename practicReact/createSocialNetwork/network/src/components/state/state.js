const state = {
  profile: {
    name: "Aleksey Flechin",
    urlAvatar: "./img/profileImg/avatar.png",
    urlMainPhoto: "./img/profileImg/profileMainImg.jpg",
    posts: ["hi", "my name", "Alex", "Yo"],
  },
  dialogs: [
    {
      name: "",
      id: "0",
      message: ["hi", "hi Ivan"],
      url: "",
    },
    { name: "Ivan", id: "1", message: ["hi", "hi Ivan"], url: "" },
    { name: "Sau", id: "2", message: ["hi", "hi Sau"], url: "" },
    { name: "Kost", id: "3", message: ["hi", "hi Kost"], url: "" },
    { name: "Ros", id: "4", message: ["hi", "hi Ros"], url: "" },
  ],

  dialogId: "0",
};

export default state;
