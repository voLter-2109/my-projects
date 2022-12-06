"use strict";

const upperCase = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const repeat = (str) => `${str} `.repeat(3);

const compose =
  (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const t = compose(repeat, exclaim, upperCase);

console.log(t("I love coding"));
