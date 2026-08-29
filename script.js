const imageBasePath = "../../GitHub/quizz-app/images";

const quizzes = {
  logo: [
    {
      question: "Which company does this logo belong to?",
      image: `${imageBasePath}/logos/apple.png`,
      answers: ["Samsung", "Apple", "Huawei", "Microsoft"],
      correctAnswer: "Apple"
    },
    {
      question: "Which music streaming app uses this logo?",
      image: `${imageBasePath}/logos/spotify.png`,
      answers: ["SoundCloud", "Apple Music", "Spotify", "YouTube Music"],
      correctAnswer: "Spotify"
    },
    {
      question: "Which gaming platform uses this logo?",
      image: `${imageBasePath}/logos/playstation.png`,
      answers: ["Xbox", "Nintendo", "PlayStation", "Steam"],
      correctAnswer: "PlayStation"
    },
    {
      question: "Which social media app uses this logo?",
      image: `${imageBasePath}/logos/tiktok.png`,
      answers: ["Instagram", "Snapchat", "TikTok", "Pinterest"],
      correctAnswer: "TikTok"
    },
    {
      question: "Which streaming service uses this logo?",
      image: `${imageBasePath}/logos/netflix.png`,
      answers: ["Netflix", "Disney+", "Prime Video", "YouTube"],
      correctAnswer: "Netflix"
    },
    {
      question: "Which technology company does this logo belong to?",
      image: `${imageBasePath}/logos/microsoft.png`,
      answers: ["Google", "Microsoft", "Meta", "Dropbox"],
      correctAnswer: "Microsoft"
    },
    {
      question: "Which mobile operating system uses this logo?",
      image: `${imageBasePath}/logos/android.png`,
      answers: ["Android", "iOS", "Windows", "Linux"],
      correctAnswer: "Android"
    },
    {
      question: "Which communication platform uses this logo?",
      image: `${imageBasePath}/logos/discord.png`,
      answers: ["Twitch", "Discord", "Reddit", "Microsoft Teams"],
      correctAnswer: "Discord"
    },
    {
      question: "Which web browser uses this logo?",
      image: `${imageBasePath}/logos/chrome.png`,
      answers: ["Firefox", "Safari", "Microsoft Edge", "Google Chrome"],
      correctAnswer: "Google Chrome"
    },
    {
      question: "Which gaming brand uses this logo?",
      image: `${imageBasePath}/logos/xbox.png`,
      answers: ["Xbox", "Nintendo", "PlayStation", "Steam"],
      correctAnswer: "Xbox"
    }
  ],

  // =========================
  // SPORTS
  // =========================
  sports: [
    {
      question: "Which country has won the most FIFA World Cup titles?",
      answers: ["Germany", "Brazil", "Argentina", "Italy"],
      correctAnswer: "Brazil"
    },
    {
      question: "In tennis, what is the score called when both players have 40 points?",
      answers: ["Advantage", "Deuce", "Love", "Break"],
      correctAnswer: "Deuce"
    },
    {
      question: "Which sport uses the terms 'birdie', 'eagle', and 'bogey'?",
      answers: ["Golf", "Cricket", "Baseball", "Rugby"],
      correctAnswer: "Golf"
    },
    {
      question: "How long is a standard Olympic swimming pool?",
      answers: ["25 metres", "50 metres", "75 metres", "100 metres"],
      correctAnswer: "50 metres"
    },
    {
      question: "Which country is credited with inventing modern cricket?",
      answers: ["Australia", "India", "England", "South Africa"],
      correctAnswer: "England"
    },
    {
      question: "What is the maximum score possible with one dart in darts?",
      answers: ["50", "60", "80", "100"],
      correctAnswer: "60"
    },
    {
      question: "Which sport features the Tour de France?",
      answers: ["Cycling", "Motor Racing", "Athletics", "Rowing"],
      correctAnswer: "Cycling"
    },
    {
      question: "How many periods are played in a standard ice hockey game?",
      answers: ["2", "3", "4", "5"],
      correctAnswer: "3"
    },
    {
      question: "Which athlete holds the record for the most Olympic gold medals?",
      answers: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
      correctAnswer: "Michael Phelps"
    },
    {
      question: "In rugby union, how many points is a try worth?",
      answers: ["3", "4", "5", "7"],
      correctAnswer: "5"
    }
  ],

  // =========================
  // POPSTARS
  // =========================
  popstars: [
    {
      question: "Which singer released the album '21'?",
      answers: ["Adele", "Taylor Swift", "Sia", "Beyoncé"],
      correctAnswer: "Adele"
    },
    {
      question: "Which artist is known as the 'Queen of Pop'?",
      answers: ["Madonna", "Rihanna", "Lady Gaga", "Britney Spears"],
      correctAnswer: "Madonna"
    },
    {
      question: "Who performed the hit song 'Shape of You'?",
      answers: ["Ed Sheeran", "Justin Bieber", "Sam Smith", "Harry Styles"],
      correctAnswer: "Ed Sheeran"
    },
    {
      question: "Which band released 'Bohemian Rhapsody'?",
      answers: ["Queen", "The Beatles", "Coldplay", "U2"],
      correctAnswer: "Queen"
    },
    {
      question: "Which singer is known for 'Rolling in the Deep'?",
      answers: ["Adele", "Katy Perry", "Billie Eilish", "Whitney Houston"],
      correctAnswer: "Adele"
    }
  ],

  // =========================
  // MONEY MOVES
  // =========================
  money: [
    {
      question: "What is demand?",
      answers: [
        "The quantity of goods producers are willing to sell",
        "The desire and ability of consumers to purchase goods or services",
        "The total value of goods produced in a country",
        "The cost of producing a good"
      ],
      correctAnswer: "The desire and ability of consumers to purchase goods or services"
    },
    {
      question: "What happens to the price of a product when demand increases and supply stays the same?",
      answers: [
        "The price decreases",
        "The price stays the same",
        "The price increases",
        "The product disappears from the market"
      ],
      correctAnswer: "The price increases"
    },
    {
      question: "What is inflation?",
      answers: [
        "A rise in the general price level of goods and services",
        "A decrease in consumer demand",
        "An increase in supply of goods",
        "A fall in employment levels"
      ],
      correctAnswer: "A rise in the general price level of goods and services"
    },
    {
      question: "What does scarcity mean in economics?",
      answers: [
        "Unlimited resources available for production",
        "Limited resources compared to unlimited wants",
        "A surplus of goods in the market",
        "A situation where demand is zero"
      ],
      correctAnswer: "Limited resources compared to unlimited wants"
    },
    {
      question: "What is opportunity cost?",
      answers: [
        "The money spent on producing a good",
        "The benefit of the next best alternative forgone",
        "The total revenue earned by a firm",
        "The cost of raw materials"
      ],
      correctAnswer: "The benefit of the next best alternative forgone"
    },
    {
      question: "What is the difference between needs and wants?",
      answers: [
        "Needs are essential for survival, wants are not",
        "Needs are luxuries, wants are necessities",
        "Needs are always expensive, wants are cheap",
        "Needs are unlimited, wants are limited"
      ],
      correctAnswer: "Needs are essential for survival, wants are not"
    },
    {
      question: "What is equilibrium?",
      answers: [
        "When demand exceeds supply",
        "When supply exceeds demand",
        "When demand equals supply",
        "When prices are fixed by the government"
      ],
      correctAnswer: "When demand equals supply"
    },
    {
      question: "What does GDP stand for?",
      answers: [
        "Gross Domestic Product",
        "General Demand Price",
        "Government Development Plan",
        "Global Distribution Policy"
      ],
      correctAnswer: "Gross Domestic Product"
    },
    {
      question: "In a free market, who decides what goods and services are produced?",
      answers: [
        "The government",
        "Consumers and producers through supply and demand",
        "International organizations",
        "Banks and financial institutions"
      ],
      correctAnswer: "Consumers and producers through supply and demand"
    },
    {
      question: "If the price of coffee rises sharply, what is likely to happen to the demand for tea, a substitute?",
      answers: [
        "Demand for tea decreases",
        "Demand for tea increases",
        "Demand for tea stays the same",
        "Tea disappears from the market"
      ],
      correctAnswer: "Demand for tea increases"
    }
  ]
};

// ========================================
// HTML ELEMENTS
// ========================================

const topics = document.getElementById("topics");
const quizContainer = document.getElementById("quiz-container");

const questionArea = document.getElementById("question-area");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");

const questionNumber = document.getElementById("question-number");
const currentScore = document.getElementById("current-score");

const feedback = document.getElementById("feedback");

const nextButton = document.getElementById("next-button");

const backButton = document.getElementById("back-button");

const quizTopic = document.getElementById("quiz-topic");

const progressBar = document.getElementById("progress-bar");

const questionImage = document.getElementById("question-image");

const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");

const answerReview = document.getElementById("answer-review");

const restartButton = document.getElementById("restart-btn");
const newQuizButton = document.getElementById("new-quiz-btn");

// ========================================
// QUIZ VARIABLES
// ========================================

let currentQuiz = [];
let currentQuizName = "";

let currentQuestionIndex = 0;
let score = 0;

let userAnswers = [];

// ========================================
// START QUIZ
// ========================================

document.querySelectorAll(".start-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const quizName = button.dataset.quiz;

    if (!quizzes[quizName] || quizzes[quizName].length === 0) {
      alert("This quiz is not available yet.");
      return;
    }

    currentQuizName = quizName;
    currentQuiz = quizzes[quizName];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    topics.style.display = "none";
    quizContainer.style.display = "block";
    resultScreen.style.display = "none";
    questionArea.style.display = "block";

    quizTopic.textContent = quizName === "money" ? "MONEY MOVES" : quizName.toUpperCase();
    showQuestion();
  });
});

// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {
  const currentQuestion = currentQuiz[currentQuestionIndex];

  answerOptions.innerHTML = "";
  feedback.textContent = "";
  nextButton.style.display = "none";

  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
  currentScore.textContent = `Score: ${score}`;

  const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
  progressBar.style.width = `${progress}%`;

  questionText.textContent = currentQuestion.question;

  if (currentQuestion.image) {
    questionImage.src = currentQuestion.image;
    questionImage.style.display = "block";
  } else {
    questionImage.src = "";
    questionImage.style.display = "none";
  }

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.textContent = answer;
    button.type = "button";
    button.addEventListener("click", () => {
      selectAnswer(button, answer);
    });

    answerOptions.appendChild(button);
  });
}

// ========================================
// SELECT ANSWER
// ========================================

function selectAnswer(selectedButton, selectedAnswer) {
  const currentQuestion = currentQuiz[currentQuestionIndex];
  const allButtons = answerOptions.querySelectorAll("button");

  userAnswers[currentQuestionIndex] = selectedAnswer;

  allButtons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (selectedAnswer === currentQuestion.correctAnswer) {
    selectedButton.classList.add("correct");
    feedback.textContent = "Correct! Well done.";
    score++;
  } else {
    selectedButton.classList.add("wrong");
    feedback.textContent = `Wrong! The correct answer is ${currentQuestion.correctAnswer}.`;
  }

  currentScore.textContent = `Score: ${score}`;
  nextButton.style.display = "inline-block";

  if (currentQuestionIndex === currentQuiz.length - 1) {
    nextButton.textContent = "View Results →";
  } else {
    nextButton.textContent = "Next Question →";
  }
}

// ========================================
// NEXT QUESTION
// ========================================

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// ========================================
// SHOW RESULTS
// ========================================

function showResults() {
  questionArea.style.display = "none";
  resultScreen.style.display = "block";

  const totalQuestions = currentQuiz.length;
  const scorePercentage = Math.round((score / totalQuestions) * 100);

  finalScore.textContent = `You scored ${score} out of ${totalQuestions}`;
  percentage.textContent = `Percentage: ${scorePercentage}%`;

  createAnswerReview();
}

// ========================================
// ANSWER REVIEW
// ========================================

function createAnswerReview() {
  answerReview.innerHTML = "";

  currentQuiz.forEach((question, index) => {
    const review = document.createElement("div");
    review.classList.add("review-item");

    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer;

    if (isCorrect) {
      review.classList.add("correct-review");
    } else {
      review.classList.add("wrong-review");
    }

    review.innerHTML = `
      <strong>Question ${index + 1}:</strong>
      ${question.question}
      <br>
      <strong>Your answer:</strong>
      ${userAnswer || "No answer"}
      <br>
      <strong>Correct answer:</strong>
      ${question.correctAnswer}
    `;

    answerReview.appendChild(review);
  });
}

// ========================================
// BACK TO TOPICS
// ========================================

function returnToTopics() {
  quizContainer.style.display = "none";
  topics.style.display = "flex";
  questionArea.style.display = "block";
  resultScreen.style.display = "none";

  currentQuiz = [];
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
}

backButton.addEventListener("click", returnToTopics);
newQuizButton.addEventListener("click", returnToTopics);

// ========================================
// RESTART QUIZ
// ========================================

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  questionArea.style.display = "block";
  resultScreen.style.display = "none";

  showQuestion();
});
