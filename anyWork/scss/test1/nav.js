"use strict";

const nav = document.querySelectorAll(".nav"),
  spisok = document.querySelectorAll(".spisok"),
  position = document.querySelectorAll(".position");

let child = [nav, spisok, position];
let timerId;

for (let i = 0; i < child.length; i++) {
  child[i].forEach((et) => {
    et.addEventListener("mouseover", () => {
      console.log("over");

      let classList = et.classList.value.split(" ");
      let xNew = [];
      for (let x = 0; x < classList.length; x++) {
        xNew.push(`.${classList[x]}`);
      }
      console.log(xNew);
      try {
        document.querySelector(`${xNew.join("")} > .spisok`).style.display =
          "flex";
        clearTimeout(timerId);
      } catch (err) {
        return;
      }
    });

    et.addEventListener("mouseout", () => {
      let classList = et.classList.value.split(" ");
      let xNew = [];
      for (let x = 0; x < classList.length; x++) {
        xNew.push(`.${classList[x]}`);
      }

      console.log("live");
      timerId = setTimeout(() => {
        document.querySelectorAll(".spisok").forEach((e) => {
          e.style.display = "none";
        });
      }, 1500);
    });
  });
}
