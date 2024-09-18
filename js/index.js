const cardButton = document.querySelector('[data-js="card_button"]');
const cardSVG = document.querySelector('[data-js="card_svg"]');
const showAnswer = document.querySelector('[data-js="show_answer"]');

cardButton.addEventListener("click", () => {
  cardSVG.classList.toggle("change_color");
});
