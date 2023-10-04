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
