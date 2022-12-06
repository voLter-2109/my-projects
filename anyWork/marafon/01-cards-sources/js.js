"use strickt";

const slides = document.querySelectorAll(".slide");
const inputColor = document.querySelector(".inputColor");
const body = document.querySelector("body");

slides.forEach((item) => {
  item.addEventListener("click", () => {
    clearActiveClass();
    item.classList.add("active");
  });
});

function clearActiveClass() {
  slides.forEach(function (item) {
    item.classList.remove("active");
  });
}

// замена цвета body
inputColor.addEventListener("input", function () {
  let color = inputColor.value;
  body.style.backgroundColor = color;
});
