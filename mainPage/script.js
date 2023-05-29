"use strict";

// SELECTORS
const logo = document.querySelector(".lift");
const selectorBtn = document.querySelector(".selectorBtn");
const services = document.getElementById("services");
const wrapper = document.querySelector(".wrapper");
const topBtn = document.querySelector(".topBtn");
const navBar = document.querySelector(".navBar");
const dropDown = document.querySelectorAll(".dropDown");
const navSubDiv = document.querySelectorAll(".navSubDiv");
const progSelect = document.querySelectorAll(".progSelect");
const freeSelect = document.querySelector(".freeSelect");

// FUNCTIONS
function getPositionX(el) {
  var rect = el.getBoundingClientRect();
  return rect.x;
}
function getPositionY(el) {
  var rect = el.getBoundingClientRect();
  return rect.y;
}

// EVENTS
logo.addEventListener("click", function (e) {
  window.location.href = "../mainPage/mainPage.html";
});
selectorBtn.addEventListener("click", function (e) {
  wrapper.scrollTo({
    top: getPositionY(services),
    left: 0,
    behavior: "smooth",
  });
});

progSelect.forEach((el) => {
  el.addEventListener("click", function (e) {
    window.location.href = "../Form/Que1.html";
  });
});

freeSelect.addEventListener("click", (e) => {
  window.location.href = "../Extras/gratis.html";
});
