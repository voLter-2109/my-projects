"use strict";

document.addEventListener("DOMContentLoaded", () => {
  try {
    //
    const btn = document.querySelector(".mainWindow__one__imgScroll"),
      one = document.querySelector(".mainWindow__one");

    btn.addEventListener("click", () => {
      one.style.animationPlayState = "running";
      btn.style.opacity = "0";
      setTimeout(() => {
        btn.style.display = "none";
      }, 300);
    });
    //
    const link = document.querySelector("#linkDarkMode"),
      input = document.querySelector("#darkmode-toggle"),
      avatar = document.querySelector("#avatar");
      console.log(avatar);

    input.addEventListener("click", () => {
      if (input.checked === true) {
        link.href = "./style/dark-mode.css";
        avatar.src = "./img/avatar.webp";
      } else {
        link.href = "./style/lite-mode.css";
        avatar.src = "./img/whiteAvatar.webp";
      }
    });
  } catch (er) {
    console.log(er);
  }
});
