/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
// my______________________________
// 'use strict';
// // 1
// let promo = document.querySelectorAll("div.promo__adv img");
// promo.forEach(item => {
//     item.remove();
// });

// // 2

// let text = document.querySelector(".promo__genre");
// text.remove();

// let promoBg = document.querySelector(".promo__bg");
// let promoText = document.createElement("div");
// promoText.classList.add("promo__genre");
// promoBg.prepend(promoText);
// promoText.textContent = "драма";

// // 3

// promoBg.style.cssText = `background: url(/img/bg.jpg) center center/cover no-repeat`;

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// let film = document.querySelectorAll(".promo__interactive-item");
// film.forEach(item => {
//     item.remove();
// });

// movieDB.movies.sort().forEach(function(item, i ){
//     console.log(`${i+1}. ${item}`);
//     });

// for ( let i = 0; i < movieDB.movies.length; i++) {
//     let filmUl = document.querySelector(".promo__interactive-list");
//     let filmLi = document.createElement("li");
// filmLi.classList.add("promo__interactive-item");
// filmUl.append(filmLi);
// filmLi.textContent = `${i+1}. ${movieDB.movies[i]}`;
// let filmDelete = document.createElement("div");
// filmDelete.classList.add("delete");
// filmLi.prepend(filmDelete);
// }

// lesson_______________________________________________
// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list');

// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = 'драма';

// poster.style.backgroundImage = 'url("img/bg.jpg")';

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1}: ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
// my_________________________________________________________________

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ],
//     sortirovka: function(){
//         if (input.value.length > 21) {
//             input.value = input.value.slice(0, 21) + `${"..."}`;
//         }
//     },
//     like: function (){
//         let a = document.querySelector('input[type="checkbox"]');
//         if (a.checked){
//             console.log("фильм добавлен в любимое!")
//         }
//     },
//     newFilm: function() {
//         movieDB.like();
//         movieDB.sortirovka();
//                 let a = input.value;
//         movieDB.movies[movieDB.movies.length] = a;
//         movieDB.movies.sort();
//         filmUl.innerHTML += `
//             <li class="promo__interactive-item">${movieDB.movies.length}: ${a}
//                 <div class="delete"></div>
//              </li>
//          `;
//         console.log(movieDB.movies);
//           },
//     createList: function(){
//             for ( let i = 0; i < movieDB.movies.length; i++){
//                 movieDB.movies.sort();
//                 let filmLi = document.createElement("li");
//             filmLi.classList.add("promo__interactive-item");
//             filmUl.append(filmLi);
//             filmLi.textContent = `${i+1}. ${movieDB.movies[i]}`;
//             let filmDelete = document.createElement("div");
//             filmDelete.classList.add("delete");
//             filmLi.prepend(filmDelete);
//                 }

//             },
// };

// let btn = document.querySelector('.add button'),
//     input = document.querySelector(".adding__input"),
//     form = document.querySelector(".add"),
//     filmUl = document.querySelector(".promo__interactive-list"),
//     inputFilm = document.querySelector(".adding__input");

//     // удалить старый список фильмов
// let film = document.querySelectorAll(".promo__interactive-item");
// film.forEach(item => {
//     item.remove();
// });

// // отмена перезагрузки при нажатии на кнопку
// form.onsubmit =('click', function(evt) {
//     evt.preventDefault();
//   });

// let klick = function(){
//     movieDB.newFilm();
//     film = document.querySelectorAll(".promo__interactive-item");
//         film.forEach(item => {
//         item.remove();
//             });
//     movieDB.createList();
//         };

//     input.addEventListener('keydown', function(e) {
//       if (e.keyCode === 13) {
//         klick();
//         input.value = "";
//       }});

// movieDB.createList();
// btn.addEventListener('click', klick);

// let deleteDiv_All = document.querySelectorAll(".delete");

// let divDel = deleteDiv_All.forEach((item, i) => {
//     console.log(item);
//     console.log(i);
// });

// lesson __________________________________________________

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";
// данный обработчик нужен, что бы скрипт загрузился только после
// всего дерева страницы
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = addForm.querySelector('[type="ckeckbox"]'),
    btn = document.querySelector(".add button");

  btn.addEventListener("click", (event) => {
    event.preventDefault(); //   отмена перезагрузки страницы
    let newFilm = addInput.value;

    addInput.value = "";

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      let a = document.querySelector('input[type="checkbox"]');
      if (a.checked) {
        console.log("фильм добавлен в любимое!");
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма";

    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(movieDB.movies);

    films.forEach((film, i) => {
      parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((item, i) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(movieDB.movies, movieList);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});

