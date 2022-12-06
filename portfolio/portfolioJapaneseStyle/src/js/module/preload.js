"use strict";

import { scroll } from "./scroll";
import { body } from "./body";

function preload(preloadBlock, animateBlock, animeteText) {
  let preloadAnimate = document.querySelector(preloadBlock);
  let preloadAnimateBlock = document.querySelector(animateBlock);
  let preloadAnimateText = document.querySelector(animeteText);
  let widthPreloadAnimateBlock = getComputedStyle(preloadAnimate)
    .width.match(/\d/g)
    .join("");
  let widthOneProcent = +widthPreloadAnimateBlock / 100;
  let widthBlock = 0;
  let textBlock = 0;
  preloadAnimateText.textContent = "0%";

  function preloadLoading(animateBlock) {
    if (widthBlock >= widthPreloadAnimateBlock) {
      clearInterval(time);
      setTimeout(() => {
        document.querySelector(".preload_main").remove();
        document.querySelector(".wrapper").style.display = "block";
      }, 1000);
      setTimeout(() => {
        scroll(
          ".scrollAllBlock",
          ".container",
          "scrollBlock",
          "scrollBlockActive"
        );
        body(
          ".wrapper",
          ".container",
          ".container__moveImg",
          ".scrollBlock",
          "scrollBlockActive"
        );
      }, 30);
    }
    widthBlock = widthOneProcent + widthBlock;
    animateBlock.style.width = `${widthBlock}px`;
    preloadAnimateText.textContent = `${textBlock}%`;
    textBlock++;
  }
  let time = setInterval(() => {
    preloadLoading(preloadAnimateBlock);
  }, 40);
}

export { preload };
