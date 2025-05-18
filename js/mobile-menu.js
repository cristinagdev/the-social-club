const menuButton = document.querySelectorAll(".header__btn");
const menuMobile = document.querySelector(".header__nav--mobile");

// Mobile menu animation
menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("no-scroll");
    menuMobile.classList.toggle("open__menu");
  });
});
