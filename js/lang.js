import ua from "../locals/ua.js";
import en from "../locals/en.js";

let currentLang = ua;

const switchLang = document.querySelector("#language-switcher");
const langText = document.querySelectorAll("[data-lang]");

const translate = function (lang) {
  localStorage.setItem("lang", lang);
  const source = lang === "ua" ? ua : en;
  langText.forEach(function (el) {
    el.innerText = source[el.dataset.lang];
  });

  currentLang = lang;
};

switchLang.addEventListener("change", function (e) {
  translate(e.target.value);
});

window.addEventListener("load", function () {
  const lang = localStorage.getItem("lang");

  if (lang) {
    translate(lang);
    switchLang.value = lang;
  }
});
