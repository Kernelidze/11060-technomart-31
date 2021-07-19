const mapLink = document.querySelector(".map-open");
const letterLink = document.querySelector(".contacts-map-button");
const buyLink = document.querySelector(".item-buy-link");
const sliderButtonRight = document.querySelector(".slider-button-right");
const sliderButtonLeft = document.querySelector(".slider-button-left");
const sliderButtonRight2 = document.querySelector(".slider-button-right2");
const sliderButtonLeft2 = document.querySelector(".slider-button-left2");
const serviceItemDelivery = document.querySelector(".services-item-delivery");
const serviceItemGuarantee = document.querySelector(".services-item-guarantee");
const serviceItemCredit = document.querySelector(".services-item-credit");
const mapPopup = document.querySelector(".modal-map-big");
const letterPopup = document.querySelector(".modal");
const buyPopup = document.querySelector(".modal-cart");
const slider1 = document.querySelector(".slider-1");
const slider2 = document.querySelector(".slider-2");
const serviceSliderDelivery = document.querySelector(".services-delivery");
const serviceSliderGuarantee = document.querySelector(".services-guarantee");
const serviceSliderCredit = document.querySelector(".services-credit");
const mapClose = mapPopup.querySelector(".modal-button-close-map");
const letterClose = letterPopup.querySelector(".modal-button-close");
const buyClose = buyPopup.querySelector(".modal-button-close-cart");


sliderButtonRight.addEventListener("click", function (evt) {
  slider1.classList.add("visually-hidden");
  slider2.classList.remove("visually-hidden");
});

sliderButtonLeft.addEventListener("click", function (evt) {
  slider1.classList.add("visually-hidden");
  slider2.classList.remove("visually-hidden");
});

sliderButtonRight2.addEventListener("click", function (evt) {
  slider2.classList.add("visually-hidden");
  slider1.classList.remove("visually-hidden");
});

sliderButtonLeft2.addEventListener("click", function (evt) {
  slider2.classList.add("visually-hidden");
  slider1.classList.remove("visually-hidden");
});

serviceItemGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceSliderDelivery.classList.add("visually-hidden");
  serviceSliderCredit.classList.add("visually-hidden");
  serviceItemDelivery.classList.remove("services-selected");
  serviceItemCredit.classList.remove("services-selected");
  serviceItemGuarantee.classList.add("services-selected");
  serviceSliderGuarantee.classList.remove("visually-hidden");
});

serviceItemDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceSliderGuarantee.classList.add("visually-hidden");
  serviceSliderCredit.classList.add("visually-hidden");
  serviceItemGuarantee.classList.remove("services-selected");
  serviceItemCredit.classList.remove("services-selected");
  serviceItemDelivery.classList.add("services-selected");
  serviceSliderDelivery.classList.remove("visually-hidden");
});

serviceItemCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceSliderGuarantee.classList.add("visually-hidden");
  serviceSliderDelivery.classList.add("visually-hidden");
  serviceItemGuarantee.classList.remove("services-selected");
  serviceItemDelivery.classList.remove("services-selected");
  serviceItemCredit.classList.add("services-selected");
  serviceSliderCredit.classList.remove("visually-hidden");
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
