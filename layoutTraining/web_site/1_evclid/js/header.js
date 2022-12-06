window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.asd').addEventListener('click', function() {
    document.querySelector('.qwe').classList.add('is-active')
		document.querySelector('.header-search-logo').classList.add('is-active')
		document.querySelector('.closed-search-logo').classList.add('is-active')
	  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#closed-search').addEventListener('click', function() {
    document.querySelector('.qwe').classList.remove('is-active')
		document.querySelector('.header-search-logo').classList.remove('is-active')
		document.querySelector('.closed-search-logo').classList.remove('is-active')
  })
})

// secret nav
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.button-secret-nav').addEventListener('click', function() {
    document.querySelector('.secret-nav').classList.add('active')
    document.querySelector('.secret-nav-closed').classList.add('active')
  })
})
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.secret-nav-closed').addEventListener('click', function() {
    document.querySelector('.secret-nav').classList.remove('active')
    document.querySelector('.secret-nav-closed').classList.remove('active')
  })
})
// click X
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.secret-X-closed').addEventListener('click', function() {
    document.querySelector('.secret-nav').classList.remove('active')
  })
})

// hover
let border= document.querySelectorAll("a");
for (let i = 0, length = border.length; i < length; i++) {
  border[i].classList.add('border')
}

let getHover = document.querySelectorAll("a");
for (let i = 0, length = getHover.length; i < length; i++) {
  getHover[i].classList.add('ahover')
}

let getFocus = document.querySelectorAll("a");
for (let i = 0, length = getFocus.length; i < length; i++) {
  getFocus[i].classList.add('afocus')
}

let getActive = document.querySelectorAll("a");
for (let i = 0, length = getActive.length; i < length; i++) {
  getActive[i].classList.add('aactive')
}

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// tab

var jsTriggers = document.querySelectorAll('.js-tab-trigger');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});






