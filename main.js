document.querySelector(".question__btn").addEventListener("click", function () {
  this.classList.replace("question__btn", "answer__btn");
  let answerBlock = document.querySelector(".answer__block");
  if (
    answerBlock.style.display === "none" ||
    answerBlock.style.display === ""
  ) {
    answerBlock.style.display = "block";
  } else {
    answerBlock.style.display = "none";
  }
});

const menuIcone = document.querySelector(".menu-icon"),
  header = document.querySelector(".header__menu-link__flex");

menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("menu-icon-active");
  header.classList.toggle("header__active");
});
