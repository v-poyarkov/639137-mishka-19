/*menu mobile */

var navList = document.querySelector(".main-nav");
var navBtn = document.querySelector(".main-nav__toggle");

navList.classList.add("main-nav--js");
navBtn.classList.remove("main-nav__toggle--close");
navBtn.classList.add("main-nav__toggle--open");

navBtn.addEventListener("click", function () {
navList.classList.toggle("main-nav--js");
navBtn.classList.toggle("main-nav__toggle--open");
})

/*pop-up*/

var cart = document.querySelectorAll(".js-button");
var popup = document.querySelector(".modal-popup");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-popup--show");
    overlay.classList.add("overlay--show")
  })
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-popup--show")) {
      popup.classList.remove("modal-popup--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

overlay.addEventListener("click", function () {
  popup.classList.remove("modal-popup--show");
  overlay.classList.remove("overlay--show");
});
