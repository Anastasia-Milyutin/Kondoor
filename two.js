const menuIcone = document.querySelector(".menu-icon"),
  header = document.querySelector(".header__menu-link__flex");

menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("menu-icon-active");
  header.classList.toggle("header__active");
});
