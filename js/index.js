const cardButton = document.querySelectorAll('[data-js="card_button"]');
const cardSVG = document.querySelectorAll('[data-js="card_svg"]');
const showAnswerButton = document.querySelectorAll('[data-js="show_answer"]');
const showAnswer = document.querySelectorAll('[data-js="answer"]');

cardButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    cardSVG[index].classList.toggle("change_color");
  });
});

showAnswerButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    showAnswer[index].classList.toggle("hidden");
  });
});
