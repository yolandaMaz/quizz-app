// quiz section

const quizzes = {
    logo: [
        {
            question: "Which company does this logo belong to?",
            image: "images/logos/apple.png",
            answers: ["Samsung", "Apple", "Huawei", "Microsoft"],
            correctAnswer: "Apple"
        },
        {
            question: "Which music streaming app uses this logo?",
            image: "images/logos/spotify.png",
            answers: ["SoundCloud", "Apple Music", "Spotify", "YouTube Music"],
            correctAnswer: "Spotify"
        },
        {
            question: "Which gaming platform uses this logo?",
            image: "images/logos/playstation.png",
            answers: ["Xbox", "Nintendo", "PlayStation", "Steam"],
            correctAnswer: "PlayStation"
        },
        {
            question: "Which social media app uses this logo?",
            image: "images/logos/tiktok.png",
            answers: ["Instagram", "Snapchat", "TikTok", "Pinterest"],
            correctAnswer: "TikTok"
        },
        {
            question: "Which streaming service uses this logo?",
            image: "images/logos/netflix.png",
            answers: ["Netflix", "Disney+", "Prime Video", "YouTube"],
            correctAnswer: "Netflix"
        },
        {
            question: "Which technology company does this logo belong to?",
            image: "images/logos/microsoft.png",
            answers: ["Google", "Microsoft", "Meta", "Dropbox"],
            correctAnswer: "Microsoft"
        },
        {
            question: "Which mobile operating system uses this logo?",
            image: "images/logos/android.png",
            answers: ["Android", "iOS", "Windows", "Linux"],
            correctAnswer: "Android"
        },
        {
            question: "Which communication platform uses this logo?",
            image: "images/logos/discord.png",
            answers: ["Twitch", "Discord", "Reddit", "Microsoft Teams"],
            correctAnswer: "Discord"
        },
        {
            question: "Which web browser uses this logo?",
            image: "images/logos/chrome.png",
            answers: ["Firefox", "Safari", "Microsoft Edge", "Google Chrome"],
            correctAnswer: "Google Chrome"
        },
        {
            question: "Which gaming brand uses this logo?",
            image: "images/logos/xbox.png",
            answers: ["Xbox", "Nintendo", "PlayStation", "Steam"],
            correctAnswer: "Xbox"
        }
    ],

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
            question: 'Which sport uses the terms "birdie", "eagle", and "bogey"?',
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
            question: "What is the maximum score possible with one dart?",
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

    popstars: [
        {
            question: "“Is this the real life? Is this just fantasy?”",
            answers: ["ABBA", "Bon Jovi", "Queen", "Aerosmith"],
            correctAnswer: "Queen"
        },
        {
            question: "“We found love in a hopeless place.”",
            answers: ["Katy Perry", "Beyoncé", "Lady Gaga", "Rihanna"],
            correctAnswer: "Rihanna"
        },
        {
            question: "“Hello from the other side.”",
            answers: ["Taylor Swift", "Sia", "Adele", "Ed Sheeran"],
            correctAnswer: "Adele"
        },
        {
            question: "“It's gonna be a bright, bright, sunshiny day.”",
            answers: ["Elton John", "Stevie Wonder", "Bruno Mars", "Bob Marley"],
            correctAnswer:"Bob Marley"
        },
        {
            question: "“Shake it off, shake it off.” ",
            answers: ["Dua Lipa", "Ariana Grande", "Miley Cyrus", "Taylor Swift"],
            correctAnswer: "Taylor Swift"
        },
        {
            question: "“To be, or not to be: that is the question.” ",
            answers: ["Romeo", "Hamlet", "Othello", "Macbeth"],
            correctAnswer: "Hamlet"
        },
        {
            question:"“Just gonna stand there and watch me burn.”",
            answers: [ "50 Cent", "Jay-Z", "Eminem", "Drake" ],
            correctAnswer: "Eminem"
        },
        {
            question: "“Out, damned spot! Out, I say!”",
            answers: [ "Lady Macbeth", "Juliet", "Desdemona", "Ophelia" ],
            correctAnswer: "Lady Macbeth"
        },
        {
            question: "“Cause baby, you're a firework.”",
            answers: [ "Katy Perry", "Kelly Clarkson", "P!nk", "Christina Aguilera" ],
            correctAnswer: "Katy Perry"
        },
        {
            question: "“O, beware, my lord, of jealousy; It is the green-eyed monster.”",
            answers: ["Romeo", "Hamlet", "Iago", "Macbeth"],
            correctAnswer: "Iago"
        },
    ],

    economics: [
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
                "The price stays decreases",
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
            question: "Define opportunity cost",
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
            question: "If the price of coffee rises sharply, what is likely to happen to the demand for tea (a substitute)?",
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


// quiz variables

let currentQuiz = [];
let currentQuizType = "";
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 300;
let timerInterval;

const quizTopicInfo = {
    logo: {
        name: "Logo Mania",
        image: "images/topics/logo mania.png"
    },

    sports: {
        name: "Game On!",
        image: "images/topics/game on.png"
    },

    popstars: {
        name: "Who Said It?",
        image: "images/topics/who said it.png"
    },

    economics: {
        name: "Money Moves",
        image: "images/topics/money moves.png"
    }
};

const topicsSection = document.getElementById("topics");
const quizContainer = document.getElementById("quiz-container");
const homeHeader = document.querySelector("header");

const questionArea = document.getElementById("question-area");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");

const questionNumber = document.getElementById("question-number");
const currentScore = document.getElementById("current-score");

const resultScreen = document.getElementById("result-screen");
const scoreValue = document.getElementById("score-value");
const totalValue = document.getElementById("total-value");
const percentageValue = document.getElementById("percentage-value");
const answerReview = document.getElementById("answer-review");

const newQuizButton = document.getElementById("new-quiz-btn");

const currentTopicImage = document.getElementById("current-topic-image");
const currentTopicName = document.getElementById("current-topic-name");
const currentTopic = document.getElementById("current-topic");

const quizTimer = document.getElementById("quiz-timer");
const timerDisplay = document.getElementById("timer-display");

const progressFill = document.getElementById("progress-fill");
const progressBar = document.getElementById("progress-bar");

const feedbackMessage = document.createElement("div");
feedbackMessage.id = "feedback-message";

const quizControls = document.createElement("div");
quizControls.id = "quiz-controls";

const previousButton = document.createElement("button");
previousButton.type = "button";
previousButton.className = "quiz-control-button";
previousButton.textContent = "← Previous";

const nextButton = document.createElement("button");
nextButton.type = "button";
nextButton.className = "quiz-control-button";
nextButton.textContent = "Next →";

quizControls.appendChild(previousButton);
quizControls.appendChild(nextButton);

quizContainer.insertBefore(feedbackMessage, quizContainer.lastElementChild);
quizContainer.appendChild(quizControls);



document.querySelectorAll(".start-button").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const topicCard = button.closest(".topic-card");

        if (!topicCard) {
            return;
        }

        const topicId = topicCard.id;

        let quizType;

        if (topicId === "topic-logo") {
            quizType = "logo";
        } else if (topicId === "topic-sports") {
            quizType = "sports";
        } else if (topicId === "topic-popstars") {
            quizType = "popstars";
        } else if (topicId === "topic-economics") {
            quizType = "economics";
        }

        if (quizType && quizzes[quizType] && quizzes[quizType].length > 0) {
            startQuiz(quizType);
        }
    });
});


function startQuiz(quizType) {
    currentQuizType = quizType;
    currentQuiz = quizzes[quizType];

    document.body.classList.add("quiz-active");
    document.body.classList.remove("results-active");

    const topicInfo = quizTopicInfo[quizType];

    currentTopicName.textContent = topicInfo.name;
    currentTopicImage.src = topicInfo.image;
    currentTopicImage.alt = topicInfo.name;

    currentTopic.style.display = "flex";
    progressBar.style.display = "block";
    quizTimer.style.display = "block";

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    topicsSection.style.display = "none";
    quizContainer.style.display = "block";
    homeHeader.style.display = "none";

    resultScreen.style.display = "none";
    questionArea.style.display = "block";
    quizControls.style.display = "flex";
    feedbackMessage.style.display = "block";

    document.getElementById("quiz-progress").style.display = "flex";

    currentScore.textContent = "Score: 0";

    startTimer();

    displayQuestion();

    quizContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function startTimer() {
    clearInterval(timerInterval);

    timeLeft = 300;

    timerDisplay.textContent = "05:00";
    timerDisplay.classList.remove("timer-warning");

    timerInterval = setInterval(() => {
        timeLeft--;

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerDisplay.textContent =
            `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        if (timeLeft <= 60) {
            timerDisplay.classList.add("timer-warning");
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            timerDisplay.textContent = "00:00";

            const selectedAnswer = document.querySelector(
                'input[name="answer"]:checked'
            );

            if (selectedAnswer) {
                saveCurrentAnswer(selectedAnswer.value);
            }

            showResults();
        }

    }, 1000);
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];

    questionText.textContent = question.question;

    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;

    const progressPercentage =
    ((currentQuestionIndex + 1) / currentQuiz.length) * 100;

    progressFill.style.width = `${progressPercentage}%`;    

    currentScore.textContent = `Score: ${score}`;

    answerOptions.innerHTML = "";

    feedbackMessage.textContent = "";
    feedbackMessage.className = "";

    /* Remove previous logo image */

    const existingQuizImage =
        document.getElementById("quiz-question-image");

    if (existingQuizImage) {
        existingQuizImage.remove();
    }

    /* Add logo image when needed */

    if (question.image) {
        const questionImage = document.createElement("img");

        questionImage.id = "quiz-question-image";
        questionImage.src = question.image;
        questionImage.alt = "Quiz question logo";

        questionArea.insertBefore(questionImage, questionText);
    }

    /* Create answer options */

    question.answers.forEach((answer) => {
        const label = document.createElement("label");

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "answer";
        input.value = answer;

        const answerText = document.createElement("span");
        answerText.textContent = answer;

        label.appendChild(input);
        label.appendChild(answerText);

        answerOptions.appendChild(label);
    });


    /* Restore previous answer */

    if (userAnswers[currentQuestionIndex]) {
        const selectedInput = Array.from(
            document.querySelectorAll('input[name="answer"]')
        ).find(
            (input) => input.value === userAnswers[currentQuestionIndex]
        );

        if (selectedInput) {
            selectedInput.checked = true;
        }
    }


    /* Previous button */

    previousButton.disabled = currentQuestionIndex === 0;


    /* Next button */

    if (currentQuestionIndex === currentQuiz.length - 1) {
        nextButton.textContent = "Finish Quiz ✓";
    } else {
        nextButton.textContent = "Next →";
    }


    /* Question transition */

    questionArea.classList.remove("question-enter");

    void questionArea.offsetWidth;

    questionArea.classList.add("question-enter");
}



function saveCurrentAnswer(answer) {
    const previousAnswer = userAnswers[currentQuestionIndex];

    userAnswers[currentQuestionIndex] = answer;

    if (
        previousAnswer === undefined &&
        answer === currentQuiz[currentQuestionIndex].correctAnswer
    ) {
        score++;
    }

    currentScore.textContent = `Score: ${score}`;
}



nextButton.addEventListener("click", () => {
    const selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    const answer = selectedAnswer ? selectedAnswer.value : null;

    saveCurrentAnswer(answer);

    const correctAnswer =
        currentQuiz[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
        feedbackMessage.textContent = "Correct!";
        feedbackMessage.className = "correct-feedback";
    } else if (answer === null) {
        feedbackMessage.textContent = "No answer selected.";
        feedbackMessage.className = "incorrect-feedback";
    } else {
        feedbackMessage.textContent =
            `Incorrect. The answer was ${correctAnswer}.`;

        feedbackMessage.className = "incorrect-feedback";
    }

    setTimeout(() => {
        goToNextQuestion();
    }, 700);
});


function goToNextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}



previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});



function showResults() {
    clearInterval(timerInterval);
    quizTimer.style.display = "none";

    document.body.classList.remove("quiz-active");
    document.body.classList.add("results-active");

    currentTopic.style.display = "none";
    progressBar.style.display = "none";

    questionArea.style.display = "none";
    quizControls.style.display = "none";
    feedbackMessage.style.display = "none";

    document.getElementById("quiz-progress").style.display = "none";

    resultScreen.style.display = "block";

    const totalQuestions = currentQuiz.length;

    const scorePercentage = Math.round(
        (score / totalQuestions) * 100
    );

    scoreValue.textContent = score;
    totalValue.textContent = totalQuestions;
    percentageValue.textContent = `${scorePercentage}%`;

    createAnswerReview();
}



function createAnswerReview() {
    answerReview.innerHTML = "";

    currentQuiz.forEach((question, index) => {
        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";

        const reviewQuestion = document.createElement("div");
        reviewQuestion.className = "review-question";

        reviewQuestion.textContent =
            `${index + 1}. ${question.question}`;

        const reviewAnswer = document.createElement("div");
        reviewAnswer.className = "review-answer";

        const userAnswer = userAnswers[index];

        if (userAnswer === question.correctAnswer) {
            reviewAnswer.classList.add("review-correct");

            reviewAnswer.textContent =
                `Your answer: ${userAnswer} ✓`;
        } else {
            reviewAnswer.classList.add("review-incorrect");

            reviewAnswer.textContent =
                `Your answer: ${userAnswer || "No answer"} | Correct answer: ${question.correctAnswer}`;
        }

        reviewItem.appendChild(reviewQuestion);
        reviewItem.appendChild(reviewAnswer);

        answerReview.appendChild(reviewItem);
    });
}



newQuizButton.addEventListener("click", () => {
    document.body.classList.remove("quiz-active");
    document.body.classList.remove("results-active");
    
    quizContainer.style.display = "none";
    homeHeader.style.display = "flex";
    topicsSection.style.display = "flex";

    document.getElementById("quiz-progress").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

