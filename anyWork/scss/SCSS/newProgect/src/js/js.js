"use strict";

import IMask from "imask";

IMask(document.querySelector(".inputTel"), {
  mask: "+{7}(000)000-00-00",
});

function checkstr(str) {
  var reg = /[0-9]/;
  return reg.test(str);
}

const postDate = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  return await res.json();
};

const formBtn = document.querySelector(".btn");
const form = document.querySelector("#formSubmit");
const formTel = document.querySelector("input[type='tel']");
const formName = document.querySelector("input[type='text']");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    form.checkValidity() &&
    formTel.value.length === 16 &&
    !checkstr(formName.value)
  ) {
    const url = "http://localhost:3000/postForm";
    const data = JSON.stringify(Object.fromEntries(new FormData(form)));

    postDate(url, data).then((resolve) => {
      console.log(resolve);
      form.reset();
    });
  } else {
    return;
  }
});
