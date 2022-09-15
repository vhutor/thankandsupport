import ua from "../locals/ua.json" assert {type: "json"};
import en from "../locals/en.json" assert {type: "json"};

let currentLang = ua;

const switchLang = document.querySelector("#language-switcher");
const langText = document.querySelectorAll("[data-lang]");

const translate = (lang) => {
  localStorage.setItem("lang", lang);
  const source = lang === "ua" ? ua : en;
  langText.forEach((el) => {
    el.innerText = source[el.dataset.lang];
  });

  currentLang = lang;
};

switchLang.addEventListener("change", (e) => {
  translate(e.target.value);
});

window.addEventListener("load", () => {
  const lang = localStorage.getItem("lang");

  if (lang) {
    translate(lang);
    switchLang.value = lang;
  }
});
