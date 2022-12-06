"use strict";
// слайдер

let slider = {
  btnPrew: document.querySelector("#btnPrew"),
  btnNext: document.querySelector("#btnNext"),
  imgBeta: document.querySelector("#img-beta"),
  aSliderLisen: document.querySelector("#aSliderLisen"),
  imgSlider: [],
  aSlider: [],
  currentIndex: 0,

  start: function () {
    let that = this;

    this.aSlider.push("web_site/1_evclid/html1.html");
    this.aSlider.push("web_site/2_ugmonk/html.html");
    this.aSlider.push("web_site/3_lagoona/index.html");
    this.aSlider.push("web_site/4_lionik/index2.html");
    this.aSlider.push("web_site/5_3dModel/html.html");

    this.imgSlider.push("img/1_evclid.svg");
    this.imgSlider.push("img/2_ugmonk.svg");
    this.imgSlider.push("img/3_lagoona.svg");
    this.imgSlider.push("img/4_lionik.svg");
    this.imgSlider.push("img/4_lionik.svg");

    this.aSliderLisen.href = this.aSlider[this.currentIndex];
    this.imgBeta.src = this.imgSlider[this.currentIndex];
    this.btnPrew.disabled = true;

    this.btnPrew.addEventListener("click", function (e) {
      that.getPrevBtn(e);
    });
    this.btnNext.addEventListener("click", function (e) {
      that.getNextBtn(e);
    });
  },
  getPrevBtn: function (e) {
    this.currentIndex--;
    this.imgBeta.src = this.imgSlider[this.currentIndex];
    this.aSliderLisen.href = this.aSlider[this.currentIndex];

    if (this.currentIndex === 0) {
      this.btnPrew.disabled = true;
    }
    if (this.currentIndex < this.imgSlider.length - 1) {
      this.btnNext.disabled = false;
    }
  },
  getNextBtn: function (e) {
    this.currentIndex++;
    this.imgBeta.src = this.imgSlider[this.currentIndex];
    this.aSliderLisen.href = this.aSlider[this.currentIndex];

    if (this.currentIndex > 0) {
      this.btnPrew.disabled = false;
    }
    if (this.currentIndex === this.imgSlider.length - 1) {
      this.btnNext.disabled = true;
    }
  },
};
slider.start();

// часы на странице

let timer2 = {
  timer: document.querySelector("#timer"),
  getTimerNow: function () {
    this.timer.innerHTML = new Date();
    setInterval(this.getTimerNow, 1000);
  },
};
timer2.getTimerNow();
