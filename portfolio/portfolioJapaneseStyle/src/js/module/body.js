"use strict";

function body(
  parantSelector,
  childSelector,
  linkSelector,
  scrollBlock,
  activeClass
) {
  const parent = document.querySelector(parantSelector),
    child = document.querySelectorAll(childSelector),
    link = document.querySelectorAll(linkSelector),
    scroll = document.querySelectorAll(scrollBlock);

  let windowHeight = window.innerHeight;
  parent.style.height = `${windowHeight * child.length}`;

  link.forEach(function (a, i) {
    a.dataset.number = `${i + 1}`;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      let numberData = e.target.dataset;
      let x = +numberData.number * windowHeight;
      if (numberData.number === "4") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        clearActive(scroll);
        scroll[0].classList.add(activeClass);
      } else {
        window.scrollTo({
          top: +x,
          behavior: "smooth",
        });
        clearActive(scroll);
        scroll[+numberData.number].classList.add(activeClass);
      }
    });
  });

  scroll.forEach(function (item) {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("scrollBlock")) {
        let numberData = e.target.dataset;

        clearActive(scroll);
        e.target.classList.add("scrollBlockActive");
        let x = (+numberData.number - 1) * windowHeight;

        window.scrollTo({
          top: +x,
          behavior: "smooth",
        });
      }
    });
  });

  function clearActive(scroll) {
    scroll.forEach((e) => e.classList.remove(activeClass));
  }

  window.addEventListener("scroll", (e) => {
    e.preventDefault();
  });
}

export { body };
