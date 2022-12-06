"use strict";

function createCardShop() {
  async function getResource(url) {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }

  getResource("http://localhost:3002/shop").then((data) => {
    console.log(data);
    createPageNumber(data.length);
    selectPageNumber(data);
  });

  let numberOfCardsPerPage = 10;

  const selectPageNumber = function (data) {
    let arr = [0, numberOfCardsPerPage];
    for (let i = arr[0]; i < arr[1]; i++) {
      let card = new Card(data[i]);
      card.reduce();
    }

    const btnPageNumber = document.querySelectorAll(".pageNumber__select");
    btnPageNumber.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();

        let test = document.querySelector(".enterShop");
        console.log(test.offsetTop);
        window.scroll({
          top: test.offsetTop,
          behavior: "smooth",
        });

        btnPageNumber.forEach((btnRemove) => {
          btnRemove.classList.remove("active");
        });

        ev.target.classList.add("active");

        arr = [];

        let commonBlock = document.querySelector(".shop__main");
        commonBlock.innerHTML = "";

        arr.push((ev.target.dataset.page - 1) * numberOfCardsPerPage);
        arr.push(ev.target.dataset.page * numberOfCardsPerPage);

        for (let i = arr[0]; i < arr[1]; i++) {
          let card = new Card(data[i]);
          card.reduce();
        }
      });
    });
  };

  function createPageNumber(data) {
    const parent = document.querySelector(".pageNumber");

    for (let i = 0; i < Math.ceil(data / numberOfCardsPerPage); i++) {
      const divNumber = document.createElement("button");
      divNumber.classList.add("pageNumber__select");
      if (i === 0) {
        divNumber.classList.add("active");
      }
      divNumber.dataset.page = `${i + 1}`;
      divNumber.textContent = `${i + 1}`;
      parent.append(divNumber);
    }
  }

  class Card {
    constructor(...arg) {
      this.card = arg[0];
      this.card.name ? (this.name = this.card.name) : (this.name = "Noname");
      this.addition = this.card.addition;
      this.prise = this.card.prise;
      this.discount = this.card.discount;
      this.img = this.card.img;
      this.card.keywords
        ? (this.keywords = this.card.keywords)
        : (this.keywords = null);
      this.parent = document.querySelector(".shop__main");
    }
    reduce() {
      this.createCard(
        this.name,
        this.addition,
        this.prise,
        this.discount,
        this.img,
        this.parent
      );
    }

    createCard(name, addition, prise, discount, img, parent) {
      const prouctCard = document.createElement("div");
      prouctCard.classList.add("cardProduct");

      const imgCard = document.createElement("img");
      imgCard.classList.add("cardProduct--img");
      imgCard.src = `./img/${img}`;
      imgCard.setAttribute("onerror", 'this.src = "./img/imgError.webp"');
      prouctCard.append(imgCard);

      const nameProduct = document.createElement("div");
      nameProduct.classList.add("cardProduct__nameProduct");
      prouctCard.append(nameProduct);

      const nameMainProduct = document.createElement("span");
      nameMainProduct.classList.add("cardProduct__nameProduct--main");
      nameMainProduct.textContent = `${name}`;
      nameProduct.append(nameMainProduct);

      if (addition) {
        const nameAltProduct = document.createElement("span");
        nameAltProduct.classList.add("cardProduct__nameProduct--alternative");
        nameAltProduct.textContent = `${addition}`;
        nameProduct.append(nameAltProduct);
      }

      const priseProduct = document.createElement("div");
      priseProduct.classList.add("cardProduct__priceProduct");
      prouctCard.append(priseProduct);

      if (prise && !discount) {
        const mainPriseProduct = document.createElement("span");
        mainPriseProduct.classList.add("cardProduct__priceProduct--main");
        mainPriseProduct.textContent = `$${prise}`;
        priseProduct.append(mainPriseProduct);
      } else {
        const del = document.createElement("del");
        priseProduct.append(del);

        const mainPriseProduct = document.createElement("span");
        mainPriseProduct.classList.add(
          "cardProduct__priceProduct--mainDiscount"
        );
        mainPriseProduct.textContent = `$${prise}`;
        del.append(mainPriseProduct);

        const priseAltProduct = document.createElement("span");
        priseAltProduct.classList.add("cardProduct__priceProduct--alternative");
        priseAltProduct.textContent = `$${discount}`;
        priseProduct.append(priseAltProduct);
      }

      parent.append(prouctCard);
    }
  }
}

export { createCardShop };
