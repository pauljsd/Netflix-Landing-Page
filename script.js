let btnFaqAnswer = document.querySelector(".faq-answer-btn");
let openFaqAnswer = document.querySelector(".faq-answer");

btnFaqAnswer.addEventListener("click", function () {
  openFaqAnswer.classList.toggle("hidden");
  if (openFaqAnswer.classList.contains("hidden")) {
    let closseFaqAnswer = (btnFaqAnswer.textContent = "+");
  } else {
    closseFaqAnswer = btnFaqAnswer.textContent = "×";
  }
});

// how much does netflix cost (toggle)

let btnFaqAnswer1 = document.querySelector(".faq-answer-btn-one");
let openFaqAnswer1 = document.querySelector(".faq-answer-one");

btnFaqAnswer1.addEventListener("click", function () {
  openFaqAnswer1.classList.toggle("hidden");
  if (openFaqAnswer1.classList.contains("hidden")) {
    let closseFaqAnswer1 = (btnFaqAnswer1.textContent = "+");
  } else {
    closseFaqAnswer1 = btnFaqAnswer1.textContent = "×";
  }
});

// where can i watch (toggle)

let btnFaqAnswer2 = document.querySelector(".faq-answer-btn-two");
let openFaqAnswer2 = document.querySelector(".faq-answer-two");

btnFaqAnswer2.addEventListener("click", function () {
  openFaqAnswer2.classList.toggle("hidden");
  if (openFaqAnswer2.classList.contains("hidden")) {
    let closseFaqAnswer1 = (btnFaqAnswer2.textContent = "+");
  } else {
    closseFaqAnswer2 = btnFaqAnswer2.textContent = "×";
  }
});

// how can I cancel (toggle)

let btnFaqAnswer3 = document.querySelector(".faq-answer-btn-three");
let openFaqAnswer3 = document.querySelector(".faq-answer-three");

btnFaqAnswer3.addEventListener("click", function () {
  openFaqAnswer3.classList.toggle("hidden");
  if (openFaqAnswer3.classList.contains("hidden")) {
    let closseFaqAnswer3 = (btnFaqAnswer3.textContent = "+");
  } else {
    closseFaqAnswer3 = btnFaqAnswer3.textContent = "×";
  }
});

// what can i watch on Netflix (toggle)

let btnFaqAnswer4 = document.querySelector(".faq-answer-btn-four");
let openFaqAnswer4 = document.querySelector(".faq-answer-four");

btnFaqAnswer4.addEventListener("click", function () {
  openFaqAnswer4.classList.toggle("hidden");
  if (openFaqAnswer4.classList.contains("hidden")) {
    let closseFaqAnswer4 = (btnFaqAnswer4.textContent = "+");
  } else {
    closseFaqAnswer4 = btnFaqAnswer4.textContent = "×";
  }
});

// is netflix good for kids (toggle)

let btnFaqAnswer5 = document.querySelector(".faq-answer-btn-five");
let openFaqAnswer5 = document.querySelector(".faq-answer-five");

btnFaqAnswer5.addEventListener("click", function () {
  openFaqAnswer5.classList.toggle("hidden");
  if (openFaqAnswer5.classList.contains("hidden")) {
    let closseFaqAnswer5 = (btnFaqAnswer5.textContent = "+");
  } else {
    closseFaqAnswer5 = btnFaqAnswer5.textContent = "×";
  }
});
