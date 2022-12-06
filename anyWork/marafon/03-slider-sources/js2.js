
// установить ширину дива учитывая полосу прокрутки
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

let test = document.querySelector(".container");
test.style.width = width;
test.style.height = height;


// уловить скрол вниз или на верх?
let lastScrollTop = 0;

document.addEventListener("scroll", function (e) {
  let firstPosition = window.pageYOffset;
	console.log(firstPosition);

	if (lastScrollTop < firstPosition) {
		console.log("down");
		lastScrollTop = window.pageYOffset;
		console.log(lastScrollTop);
	
	}	else {
		console.log("up");
		lastScrollTop = window.pageYOffset;
		console.log(lastScrollTop);
	}
});

document.addEventListener("keydown", function (e) {
  if (e.key === "q") {
    console.log("hi");
    window.scrollTo(0, 929);
  }
});
