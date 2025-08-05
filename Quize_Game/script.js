// Quiz Questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
    explanation: "Paris has been the capital of France since 508 AD.",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    explanation:
      "Mars appears reddish due to iron oxide (rust) on its surface.",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    answer: "Blue Whale",
    explanation:
      "Blue whales can grow up to 100 feet long and weigh over 200 tons.",
  },
  {
    question: "Which of these is not a programming language?",
    options: ["Python", "JavaScript", "HTML", "Ruby"],
    answer: "HTML",
    explanation: "HTML is a markup language, not a programming language.",
  },
  {
    question: "What year was JavaScript first released?",
    options: ["1990", "1995", "2000", "2005"],
    answer: "1995",
    explanation:
      "JavaScript was created by Brendan Eich in 1995 while working at Netscape.",
  },
];

// DOM Elements
const landingScreen = document.getElementById("landing");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const nextButton = document.getElementById("nextBtn");
const resultsScreen = document.getElementById("results");
const finalScoreElement = document.getElementById("final-score");
const maxScoreElement = document.getElementById("max-score");
const scoreMessageElement = document.getElementById("score-message");
const answersSection = document.getElementById("answers-section");
const answersList = document.getElementById("answers-list");
const timerContainer = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");

// Quiz Variables
let currentQuestion = 0;
let score = 0;
let answeredQuestions = [];
let timer;
let timeLeft = 30;

// Initialize Quiz
totalQuestionsElement.textContent = questions.length;
maxScoreElement.textContent = questions.length;

// Event Listeners
document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("nextBtn").addEventListener("click", showNextQuestion);
document.getElementById("restartBtn").addEventListener("click", restartQuiz);
document
  .getElementById("viewAnswersBtn")
  .addEventListener("click", toggleAnswers);

// Start Quiz Function
function startQuiz() {
  landingScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
  startTimer();
}

// Show Question Function
function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add(
      "option",
      "w-full",
      "text-left",
      "p-4",
      "rounded-lg",
      "border",
      "border-gray-200",
      "transition-all",
      "duration-300",
      "mb-2"
    );
    button.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(button);
  });

  currentQuestionElement.textContent = currentQuestion + 1;
  nextButton.classList.add("hidden");
}

// Select Option Function
function selectOption(selectedOption) {
  clearInterval(timer);
  const question = questions[currentQuestion];
  const isCorrect = selectedOption === question.answer;

  answeredQuestions.push({
    ...question,
    selectedOption,
    isCorrect,
  });

  // Update score if correct
  if (isCorrect) {
    score += 1;
    scoreElement.textContent = score;
  }

  // Disable all options and show correct/incorrect
  const options = optionsElement.querySelectorAll(".option");
  options.forEach((option) => {
    option.disabled = true;
    if (option.textContent === question.answer) {
      option.classList.add("correct");
    } else if (option.textContent === selectedOption && !isCorrect) {
      option.classList.add("incorrect");
    }
  });

  // Show next button
  nextButton.classList.remove("hidden");
}

// Show Next Question Function
function showNextQuestion() {
  currentQuestion++;
  updateProgress();

  if (currentQuestion < questions.length) {
    questionContainer.classList.remove("fade-in");
    void questionContainer.offsetWidth; // Trigger reflow
    questionContainer.classList.add("fade-in");
    showQuestion();
    resetTimer();
    startTimer();
  } else {
    showResults();
  }
}

// Update Progress Function
function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Timer Functions
function startTimer() {
  timerContainer.classList.remove("hidden");
  timeLeft = 30;
  timerElement.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      autoAnswer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
}

function autoAnswer() {
  const options = optionsElement.querySelectorAll(".option");
  let answered = false;

  // Check if any option is already selected
  options.forEach((option) => {
    if (
      option.classList.contains("correct") ||
      option.classList.contains("incorrect")
    ) {
      answered = true;
    }
  });

  if (!answered) {
    const question = questions[currentQuestion];
    const emptyOption = {
      selectedOption: null,
      isCorrect: false,
    };
    answeredQuestions.push({ ...question, ...emptyOption });
    nextButton.classList.remove("hidden");
  }
}

// Show Results Function
function showResults() {
  quizContainer.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  finalScoreElement.textContent = score;
  updateProgress();

  // Set score message
  const percentage = (score / questions.length) * 100;
  let message;

  if (percentage >= 80) {
    message = "Excellent! You're a quiz master!";
  } else if (percentage >= 60) {
    message = "Good job! You know your stuff!";
  } else if (percentage >= 40) {
    message = "Not bad! Keep learning!";
  } else {
    message = "Keep practicing! You'll get better!";
  }

  scoreMessageElement.textContent = message;
}

// Toggle Answers Function
function toggleAnswers() {
  if (answersSection.classList.contains("hidden")) {
    answersList.innerHTML = "";
    answeredQuestions.forEach((q, index) => {
      const answerItem = document.createElement("div");
      answerItem.classList.add("p-4", "border-b", "border-gray-100");

      const questionText = document.createElement("p");
      questionText.classList.add("font-medium", "text-gray-800", "mb-2");
      questionText.textContent = `${index + 1}. ${q.question}`;

      const userAnswer = document.createElement("p");
      userAnswer.classList.add("text-sm", "mb-1");
      userAnswer.innerHTML = `<span class="font-medium">Your answer:</span> ${
        q.selectedOption || "No answer"
      }`;

      const correctAnswer = document.createElement("p");
      correctAnswer.classList.add("text-sm", "mb-1");
      correctAnswer.innerHTML = `<span class="font-medium">Correct answer:</span> ${q.answer}`;

      const explanation = document.createElement("p");
      explanation.classList.add("text-sm", "text-gray-600", "mt-1");
      explanation.textContent = q.explanation;

      const resultMark = document.createElement("div");
      resultMark.classList.add(
        "w-4",
        "h-4",
        "rounded-full",
        "inline-block",
        "mr-2"
      );
      resultMark.classList.add(q.isCorrect ? "bg-green-500" : "bg-red-500");

      questionText.prepend(resultMark);
      answerItem.append(questionText, userAnswer, correctAnswer, explanation);
      answersList.appendChild(answerItem);
    });
  }
  answersSection.classList.toggle("hidden");
}

// Restart Quiz Function
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answeredQuestions = [];
  scoreElement.textContent = score;
  progressBar.style.width = "0%";

  quizContainer.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  landingScreen.classList.remove("hidden");
}
