"use strict";
// Делегирование событий

let wrapper = document.querySelector(".wrapper");
let coobs = document.querySelectorAll(".coob");

function removeClass() {
  coobs.forEach(function (item) {
    item.classList.remove("grey");
  });
}

wrapper.addEventListener("click", function (event) {
  if (event.target && event.target.className == "coob") {
    removeClass();
  }
  if (event.target && event.target.className == "coob") {
    event.target.classList.add("grey");
  }
});

// перебор обьекта

// let student = {
//     js: [{
//       name: "john",
//       progress: 100
//     }, {
//       name: "Ivan",
//       progress: 60
//     }],
//     html : {
//       basic: [{
//         name: "Peter",
//         progress: 20
//       }, {
//         name: "Ann",
//         progress: 18
//       }],

//       pro: [{
//         name: "Sam",
//         progress: 10
//       }],
//       semi: {
//         student: [{
//           name: "test",
//           progress: 100
//         }]
//       }
//     }
//   };

// function getTatolPrograssByRecursin(data){
//     // база рекурсси
//     if (Array.isArray(data)) {
//       let total = 0;

//       for ( let i = 0 ; i < data.length; i++ ) {
//         total += data[i].progress;
//       }

//       return [total, data.length];
//       // условие углубление
//     } else {
//       let total = [0,0];

//       for ( let subData of Object.values(data)) {
//         let subDataArr = getTatolPrograssByRecursin(subData);
//         total[0] += subDataArr[0];
//         total[1] += subDataArr[1];
//       }

//       return total;
//     }

// }

// let result = getTatolPrograssByRecursin(student);

// console.log(result[0]/ result[1]);

//  анимация
let position = 0;
document.querySelector(".block").addEventListener("click", function () {
  animation();
});

function recountAnimation() {
  position++;
  if (position > 90.1) {
    return;
  }
  document.querySelector(".block").style.left = position + "%";

  animation();
}
function animation() {
  setTimeout(recountAnimation, 10);
}
// _____________________методы сортировки массива

let test = [
  { id: 1, test: 100, name: "Иван" },
  { id: 2, test: 200, name: "Олег" },
  { id: 3, test: 300, name: "Виталий" },
  { id: 4, test: 400, name: "Аркадий" },
];

let filterItems = test.filter((item) => {
  return item.name === "Иван";
});
console.log("filter:");
console.log(filterItems);

let mapFilter = test.map((item) => {
  return item.id;
});
console.log("map:");
console.log(mapFilter);

let findFilter = test.find((item) => {
  return item.id === 1;
});
console.log("find:");
console.log(findFilter);

console.log("forEach:");
let forEachFilter = test.forEach((item, i) => {
  return console.log(`${i} ${item.name}`);
});

let someFilter = test.some((item) => {
  return item.test < 200;
});
console.log("some:");
console.log(someFilter);

let reduceFilter = test.reduce((totalSum, item) => {
  return item.test + totalSum;
}, 0);
console.log("reduce:");
console.log(reduceFilter);

// _________________________________________________________________________
const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  let sum = arr.filter((item) => {
    return item.rating >= 8;
  });
  console.log(sum);
}
showGoodFilms(films);

function showListOfFilms(arr) {
  let name = [];
  arr.forEach((item) => {
    name.push(item.name);
  });
  return name.join(",");
}
showListOfFilms(films);

function setFilmsIds(arr) {
  let x = [];
  arr.forEach(function (item, i) {
    item.id = i;
    x.push(item);
  });
  return x;
}

const tranformedArray = setFilmsIds(films);
console.log(tranformedArray);

function checkFilms(arr) {
  let lengtArr = 0;
  let lengtObj = 0;
  arr.forEach((item) => {
    lengtArr++;
    for (let key in item) {
      if (key === "id") {
        lengtObj++;
      }
    }
  });
  if (lengtArr === lengtObj) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}


checkFilms(x);

// const funds = [
//   {amount: -1400},
//   {amount: 2400},
//   {amount: -1000},
//   {amount: 500},
//   {amount: 10400},
//   {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//     data.filter((item) => {
//     return +Object.values(item) > 0;
//   })
//   .reduce ((firsNum, item) => {
//     return  +Object.values(item) + firsNum;
//   }, 0);
// };
// getPositiveIncomeAmount(funds);

// const getTotalIncomeAmount = (data) => {
//   if (data.some(item => Object.values(item) < 0)) {
//     data.reduce ((firsNum, item) => {
//       return Number(Object.values(item)) + firsNum;
//     }, 0);
//   } else {
//     getPositiveIncomeAmount(data);
//   }

// };

// getTotalIncomeAmount(funds);
