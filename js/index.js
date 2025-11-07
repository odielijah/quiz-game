/**
 * global initializers
 */
let chosenCategory = "any category";
let chosenDifficulty = "any difficulty";
let currentQuestionNumber = -1;
let currentQuiz;
let selectedAnswer = "";
let score = 0;

/**
 * dom initializers
 */
let selectCategoryBtn = document.getElementById("select-category-btn");
let selectCategoryDD = document.getElementById("select-category-dd");
let anyCategoryBtn = document.getElementById("any-category-btn");

let selectDifficultyBtn = document.getElementById("select-difficulty-btn");
let selectDifficultyDD = document.getElementById("select-difficulty-dd");
let anyDifficultyBtn = document.getElementById("any-difficulty-btn");

let startBtn = document.getElementById("start-btn");

let screens = document.querySelectorAll(".screen");

let startupScreen = document.getElementById("startup-screen");
let quizScreen = document.getElementById("quiz-screen");
let scoreScreen = document.getElementById("score-screen");

let questionDiv = document.getElementById("question");

let options = document.querySelectorAll(".option");

let optionOneBtn = document.getElementById("option-1");
let optionTwoBtn = document.getElementById("option-2");
let optionThreeBtn = document.getElementById("option-3");
let optionFourBtn = document.getElementById("option-4");

let optionOneSpan = document.querySelector("#option-1 .text");
let optionTwoSpan = document.querySelector("#option-2 .text");
let optionThreeSpan = document.querySelector("#option-3 .text");
let optionFourSpan = document.querySelector("#option-4 .text");

let questionNumberSpan = document.getElementById("question-number");
let questionTotalSpan = document.getElementById("question-total");

let nextBtn = document.getElementById("next-btn");

let scoreSpan = document.getElementById("score");
let restartBtn = document.getElementById("restart-btn");

/**
 * dom eventListeners
 */

selectCategoryBtn.addEventListener("click", () => {
  selectCategoryBtn.classList.toggle("in-drop");
  selectCategoryDD.classList.toggle("in-drop");

  //reset others if active
  selectDifficultyBtn.classList.remove("in-drop");
  selectDifficultyDD.classList.remove("in-drop");
});

selectDifficultyBtn.addEventListener("click", () => {
  selectDifficultyBtn.classList.toggle("in-drop");
  selectDifficultyDD.classList.toggle("in-drop");

  //reset others if active
  selectCategoryBtn.classList.remove("in-drop");
  selectCategoryDD.classList.remove("in-drop");
});

startBtn.addEventListener("click", beginQuiz);

anyCategoryBtn.addEventListener("click", () => chooseCategory("any category"));

anyDifficultyBtn.addEventListener("click", () =>
  chooseDifficulty("any difficulty")
);

nextBtn.addEventListener("click", () => {
  toNextQuestion();
});

restartBtn.addEventListener("click", () => {
  restartQuiz();
});

optionOneBtn.addEventListener("click", () => {
  selectAnswer(0);
  clearPrevSelectedOption();
  optionOneBtn.classList.add("selected");
});

optionTwoBtn.addEventListener("click", () => {
  selectAnswer(1);
  clearPrevSelectedOption();
  optionTwoBtn.classList.add("selected");
});

optionThreeBtn.addEventListener("click", () => {
  selectAnswer(2);
  clearPrevSelectedOption();
  optionThreeBtn.classList.add("selected");
});

optionFourBtn.addEventListener("click", () => {
  selectAnswer(3);
  clearPrevSelectedOption();
  optionFourBtn.classList.add("selected");
});

window.addEventListener("DOMContentLoaded", () => {
  //poppulate category dropdown
  categories.forEach((category) => {
    let btn = document.createElement("button");
    btn.textContent = category;
    btn.addEventListener("click", () => chooseCategory(category));
    selectCategoryDD.appendChild(btn);
  });

  //populate difficulty dropdown
  difficulties.forEach((difficulty) => {
    let btn = document.createElement("button");
    btn.textContent = difficulty;
    btn.addEventListener("click", () => chooseDifficulty(difficulty));
    selectDifficultyDD.appendChild(btn);
  });
});

//functions

function chooseCategory(category) {
  selectCategoryBtn.classList.remove("in-drop");
  selectCategoryDD.classList.remove("in-drop");

  chosenCategory = category;
  selectCategoryBtn.textContent = category;
}

function chooseDifficulty(difficulty) {
  selectDifficultyBtn.classList.remove("in-drop");
  selectDifficultyDD.classList.remove("in-drop");

  chosenDifficulty = difficulty;
  selectDifficultyBtn.textContent = difficulty;
}

function beginQuiz() {
  removeAllScreens();
  quizScreen.classList.remove("hide");

  //reset quiz and question
  currentQuiz = chooseQuizByDifficulty(filterQuizzesByCategory());
  currentQuestionNumber = -1;
  selectedAnswer = "";
  nextBtn.textContent = "Next";

  //filter questions order
  currentQuiz.questions.sort(() => 0.5 - Math.random());

  toNextQuestion();
}

function removeAllScreens() {
  screens.forEach((screen) => screen.classList.add("hide"));
}

function filterQuizzesByCategory() {
  if (categories.includes(chosenCategory))
    return quizzes.filter((quiz) => quiz.category === chosenCategory);
  else return quizzes.filter(() => true);
}

function chooseQuizByDifficulty(remQuizzes) {
  if (difficulties.includes(chosenDifficulty))
    return remQuizzes
      .filter((quiz) => quiz.difficulty === chosenDifficulty)
      .sort(() => 0.5 - Math.random())[0];
  else return remQuizzes.filter(() => true).sort(() => 0.5 - Math.random())[0];
}

function toNextQuestion() {
  if (
    currentQuestionNumber > -1 &&
    currentQuestionNumber < currentQuiz.questions.length
  )
    recordLastScore();

  currentQuestionNumber++;
  let question = currentQuiz.questions[currentQuestionNumber];

  if (currentQuestionNumber >= currentQuiz.questions.length)
    return displayEndScreen();

  //reset selected answer
  selectedAnswer = "";
  clearPrevSelectedOption();

  questionDiv.textContent = question.question;
  optionOneSpan.textContent = question.options[0];
  optionTwoSpan.textContent = question.options[1];
  optionThreeSpan.textContent = question.options[2];
  optionFourSpan.textContent = question.options[3];

  questionNumberSpan.textContent = currentQuestionNumber + 1;
  questionTotalSpan.textContent = currentQuiz.questions.length;

  //disable next btn
  nextBtn.setAttribute("disabled", "true");

  if (currentQuestionNumber === currentQuiz.questions.length - 1) {
    nextBtn.textContent = "Submit";
  }
}

function selectAnswer(optionIndex) {
  selectedAnswer =
    currentQuiz.questions[currentQuestionNumber].options[optionIndex];

  nextBtn.removeAttribute("disabled");
}

function clearPrevSelectedOption() {
  options.forEach((option) => option.classList.remove("selected"));
}

function recordLastScore() {
  if (selectedAnswer === currentQuiz.questions[currentQuestionNumber].answer)
    score++;
}

function displayEndScreen() {
  removeAllScreens();
  scoreScreen.classList.remove("hide");
  scoreSpan.textContent = score + "/" + currentQuiz.questions.length;
}

function restartQuiz() {
  window.location.reload();
}
