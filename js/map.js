const mapLink = document.querySelector(".map-open");
const letterLink = document.querySelector(".contacts-map-button");
const buyLink = document.querySelector(".item-buy-link");
const sliderButtonRight = document.querySelector(".slider-button-right");
const sliderButtonLeft = document.querySelector(".slider-button-left");

const mapPopup = document.querySelector(".modal-map-big");
const letterPopup = document.querySelector(".modal");
const buyPopup = document.querySelector(".modal-cart");
const slider1 = document.querySelector(".slider-1");
const slider2 = document.querySelector(".slider-2");


const mapClose = mapPopup.querySelector(".modal-button-close-map");
const letterClose = letterPopup.querySelector(".modal-button-close");
const buyClose = letterPopup.querySelector(".modal-button-close-cart");


sliderButtonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider1.classList.add("slider-index");
});

sliderButtonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider2.classList.add("slider-index");
});

sliderButtonLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider1.classList.add("slider-index");
});

sliderButtonLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider2.classList.add("slider-index");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

letterLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");
});

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
});




mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
});

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    }
  }
});
