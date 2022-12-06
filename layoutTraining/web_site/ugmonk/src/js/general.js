"use strict";

import { createCardShop } from "./moduls/shop.js";
import { submitFormPost } from "./moduls/form.js";

window.addEventListener("DOMContentLoaded", function () {
  createCardShop();
  submitFormPost();
});
