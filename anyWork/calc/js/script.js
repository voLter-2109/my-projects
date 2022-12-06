'use strict';

let inputRub = document.querySelector("#rub");
let inputUsd = document.querySelector("#usd"); 

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  request.open("GET","js/current.json");
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.readyState === 4 && request.status === 200 ) {
      console.log(request.response);

      let date = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / date.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });
});