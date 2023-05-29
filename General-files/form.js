"use strict";

// Selectors

const logo = document.querySelector(".lift");
const filling = document.querySelector(".filling");
const awnser = document.querySelectorAll(".awnser");
const pro = document.querySelector(".pro");
const backBtn = document.querySelector(".backBtn");

// Events

logo.addEventListener("click", function (e) {
  window.location.href = "../mainPage/mainPage.html";
});

// Progress Bar
const filePath = window.location.pathname;
const fileName = filePath.slice(-9, -5);
const fileNum = fileName.slice(3, 4);
console.log(filePath, fileName, fileNum);

// Progress Bar
const total = 100 / 6;
filling.style.width = total * (fileNum - 1) + "%";

pro.textContent = fileNum + "/6";

// Back Button
if (fileNum == 1) {
  backBtn.style.opacity = "0%";
  backBtn.classList.remove("pointer");
} else {
  backBtn.style.opacity = "100%";
  backBtn.classList.add("pointer");
  backBtn.addEventListener("click", (e) => {
    const prevPageName = "Que" + (Number(fileNum) - 1);
    window.location.href = "../" + "Form/" + prevPageName + ".html";
  });
}

// Question itself
awnser.forEach(function (el) {
  el.addEventListener("click", (e) => {
    if (el.classList.contains("awnser-1")) localStorage.setItem(fileName, 1);
    if (el.classList.contains("awnser-2")) localStorage.setItem(fileName, 2);
    if (el.classList.contains("awnser-3")) localStorage.setItem(fileName, 3);
    if (el.classList.contains("awnser-4")) localStorage.setItem(fileName, 4);
    // Next window
    const nextPage = Number(fileNum) + 1;
    const nextPageName = "Que" + nextPage;
    window.location.href = "../" + "Form/" + nextPageName + ".html";
  });
});
