
let btnPrew = document.querySelector("#btnPrew");
let btnNext = document.querySelector("#btnNext");
let imgBeta = document.querySelector("#img-beta");
let aSliderLisen = document.querySelector("#aSliderLisen");
let imgSlider = [];
let aSlider = [];
let currentIndex = 0;

aSlider.push("web_site/1_evclid/html1.html");
aSlider.push("web_site/2_ugmonk/html.html");
aSlider.push("web_site/3_lagoona/index.html");
aSlider.push("web_site/4_lionik/index2.html");

imgSlider.push('img/1_evclid.svg');
imgSlider.push('img/2_ugmonk.svg');
imgSlider.push('img/3_lagoona.svg');
imgSlider.push('img/4_lionik.svg');

aSliderLisen.href = aSlider[currentIndex];
imgBeta.src = imgSlider[currentIndex];
btnPrew.disabled = true;

let getPrevBtn = function(e){
  currentIndex--;
  imgBeta.src = imgSlider[currentIndex];
  aSliderLisen.href = aSlider[currentIndex];

  if (currentIndex === 0 ) {
    btnPrew.disabled = true;
  }
  if (currentIndex < imgSlider.length - 1) {
    btnNext.disabled = false;
  }
};

let getNextBtn = function(e){
  currentIndex++;
  imgBeta.src = imgSlider[currentIndex];
  aSliderLisen.href = aSlider[currentIndex];

  if (currentIndex > 0 ) {
    btnPrew.disabled = false;
  }
  if (currentIndex === imgSlider.length - 1) {
    btnNext.disabled = true;
  }
};

btnPrew.addEventListener('click', getPrevBtn);
btnNext.addEventListener('click', getNextBtn);
