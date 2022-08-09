(() => {
  const burgerBtnRef = document.querySelector(".burger-btn");
  const mobileMenuRef = document.querySelector(".menu");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("nav-link") ||
      e.target.classList.contains("support-btn")
    ) {
      burgerBtnRef.classList.toggle("open");
      mobileMenuRef.classList.toggle("is-hidden");
    }
  });

  burgerBtnRef.addEventListener("click", () => {
    burgerBtnRef.classList.toggle("open");
    mobileMenuRef.classList.toggle("is-hidden");
  });
})();
