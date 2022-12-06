"use strict";

import { preload } from "./module/preload";
import { startAnimateText } from "./module/animatText";

window.onload = function () {
  preload(
    ".preload_animate",
    ".preload_animate_block",
    ".preload_animate_text"
  );
};

window.addEventListener("unload", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("DOMContentLoaded", function () {
  let textSlideOne = ["About  me"];
  startAnimateText(textSlideOne, ".slide__title_text", 3000);

  let text = ["JavaScript", "JQuery", "HTMLCSS", "ReactJS"];
  startAnimateText(text, ".textSlideOne", 800);
  startAnimateText(text, ".textSlideTwo", 800);
  startAnimateText(text, ".textSlideThree", 800);
  startAnimateText(text, ".textSlideFore", 800);
});
