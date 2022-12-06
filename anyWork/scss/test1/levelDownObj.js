"use strict";



let magazin = {
  mango: {
    price: 10,
    score: 1,
  },
  banana: {
    price: 10,
    score: 2,
  },
};

let fetchObj = fetch("db.json")
  .then((response, reject) => {
    if (response.ok) {
      console.log("зашрузка прошла успешно");
      return response;
    } else {
      reject = new Error("Ошибка в процессе загрузки файла");
      console.log(reject.message);
    }
  })
  .then((response) => response.json())
  .then((response) => {  let obj = response;
    let newObj = Object.assign({}, obj, magazin);
    return newObj;
    
  })
  .then((newObj) => {
    level(newObj, "price", "score");
  })
  .catch(() => {})
  .finally(() => {
    console.log("работа Primise завершена");
  });

  

function level(obj, ...arg) {
  let sum = 0;
  let newArg = arg;

  // _________________________________________________
  // функция для подсчета значений в случае срабатывания рест оператора
  function calcSum(obj, arg) {
    if (arg.length > 0) {
      if (obj.score !== "undefined" && obj.price !== "undefined") {
        let testSum = obj.score * obj.price;
        if (isNaN(testSum)) {
          return;
        } else {
          sum += testSum;
        }
      }
    } else {
      return;
    }
  }

  // _________________________________________________
  // проверка уровня вложенности обьекта на основе замыкания
  for (let frute in obj) {
    console.log(frute);
    console.log(obj[frute]);

    calcSum(obj[frute], newArg);

    let level = obj[frute];
    levelDown(level);

    function levelDown(level) {
      for (let newFrute in level) {
        if (typeof level[newFrute] === "object") {
          console.log(newFrute);
          console.log(level[newFrute]);

          calcSum(obj[frute], newArg);
          levelDown(level[newFrute]);
        }
      }
    }
  }
  console.log(sum);
  // _________________________________________________
}
