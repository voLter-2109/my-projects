"use strict";

// задание 1
let postTask1 = document.querySelector(".postTask1"),
  get1Task1 = document.querySelector(".get1Task1"),
  get2Task2 = document.querySelector(".get2Task1"),
  btnTask1 = document.querySelector(".btnTask1");

btnTask1.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(1);

  if (+postTask1.value % 2 === 0) {
    get1Task1.value = `число четное ${postTask1.value}`;
  } else {
    get1Task1.value = `число нечетное ${postTask1.value}`;
  }

  if (+postTask1.value % 3 === 0 && +postTask1.value % 6 === 0) {
    get2Task2.value = "делиться на 3 и 6";
  } else {
    get2Task2.value = "не делиться на 3 и 6";
  }
});

// задание 2
let post1Task2 = document.querySelector(".post1Task2"),
  post2Task2 = document.querySelector(".post2Task2"),
  getTask2 = document.querySelector(".getTask2"),
  btnTask2 = document.querySelector(".btnTask2");

btnTask2.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(2);

  if (+post1Task2.value < +post2Task2.value) {
    getTask2.value = `сумма ${+post1Task2.value + +post2Task2.value}`;
  } else {
    getTask2.value = `разность ${+post1Task2.value - +post2Task2.value}`;
  }
});

// задание 3
let postTask3 = document.querySelector(".postTask3"),
  getTask3 = document.querySelector(".getTask3"),
  btnTask3 = document.querySelector(".btnTask3");

btnTask3.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(3);

  if (+postTask3.value >= 28 && +postTask3.value <= 30) {
    getTask3.value = "попал";
  } else {
    getTask3.value = "не попал";
  }
});
