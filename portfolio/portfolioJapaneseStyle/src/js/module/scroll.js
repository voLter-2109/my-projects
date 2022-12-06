"use strict";

function scroll(parentSelector, mathSelector, clas, classActive) {
  const parent = document.querySelector(parentSelector),
    math = document.querySelectorAll(mathSelector);

  let nav = [
    ["A","<br>","B", "<br>","O","<br>","U","<br>","T","<br>"," ","<br>","M","<br>","E","<br>"],
    ["S", "<br>", "K", "<br>", "I", "<br>", "L", "<br>", "L", "<br>", "S"],
    ["T", "<br>", "A", "<br>", "B", "<br>", "S"],
    ["C","<br>","O","<br>", "N","<br>", "T", "<br>","A","<br>", "C", "<br>","T",],
  ];

  for (let i = 0; i < math.length; i++) {
    let block = document.createElement("div");
    block.classList.add(clas);
    block.innerHTML = `
    <div class="class"></div>
    <div>${nav[i].join(" ")}</div>`;

    block.dataset.number = `${i + 1}`;
    if (i === 0) {
      block.classList.add(classActive, clas);
    }
    parent.append(block);
  }

  const heightParent = document
      .querySelector(parentSelector)
      .getBoundingClientRect().height,
    heightWindow = document
      .querySelector(mathSelector)
      .getBoundingClientRect().height;

  parent.style.top = `${heightWindow / 2 - heightParent / 2}px`;
}

export { scroll };
