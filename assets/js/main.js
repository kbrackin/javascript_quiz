const questionPool = [
    {
        "q": "Which keywords are used to define a variable in JavaScript?",
        "answer1": "let",
        "answer2": "var",
        "answer3": "const",
        "answer4": "All of the above",
        "correct": 4
    },
    {
        "q": "Which of the following are data types?",
        "answer1": "String",
        "answer2": "Boolean",
        "answer3": "Number",
        "answer4": "All of the above",
        "correct": 4
    },
    {
        "q": "How do you link an external .js file to HTML?",
        "answer1": "By using the <script></script> tags",
        "answer2": "By using the <link> tag",
        "answer3": "Hope it works",
        "answer4": "We can't link external .js files to HTML",
        "correct": 1
    },
    {
        "q": "What can the Boolean data type take the value of?",
        "answer1": "No",
        "answer2": "Off",
        "answer3": "True",
        "answer4": "Disabled",
        "correct": 3
    },
    {
        "q": "What is a data type that cannot contain a value?",
        "answer1": "object",
        "answer2": "undefined",
        "answer3": "string",
        "answer4": "None of the above",
        "correct": 2
    }
]

let timeLeft;
let currentQ = 0;
let aCorrect;
let startButton = $("#start");
let quizArea = $("#quiz-area");
let scoreboard = $("#scoreboard");
let sbSubmit = $("#sbSubmit")
let question = $("#question");
let a1 = $("#answerOne");
let a2 = $("#answerTwo");
let a3 = $("#answerThree");
let a4 = $("#answerFour");
let initials = $("#initials");
let score = 0;
let reload = $("#reload")

startButton.on("click", () => {
    timer()
    displayQuestion()
})

function displayQuestion() {
    if (currentQ == questionPool.length) {
        endQuiz();
        return;
    }
    aCorrect = `${questionPool[currentQ].correct}`
    startButton.css("display","none");
    quizArea.css("display","block");
    question.text(`${questionPool[currentQ].q}`);
    a1.text(`${questionPool[currentQ].answer1}`);
    a2.text(`${questionPool[currentQ].answer2}`);
    a3.text(`${questionPool[currentQ].answer3}`);
    a4.text(`${questionPool[currentQ].answer4}`);
}

let aSelected;

a1.on("click", () => {
    aSelected = 1;
    if (aSelected == aCorrect) {
        currentQ++;
        score++;
        displayQuestion();
    }
    else {
        timeLeft = timeLeft - 5
    }
})

a2.on("click", () => {
    aSelected = 2;
    if (aSelected == aCorrect) {
        currentQ++;
        score++;
        displayQuestion();
    }
    else {
        timeLeft = timeLeft - 5
    }
})

a3.on("click", () => {
    aSelected = 3;
    if (aSelected == aCorrect) {
        currentQ++;
        score++;
        displayQuestion();
    }
    else {
        timeLeft = timeLeft - 5
    }
})

a4.on("click", () => {
    aSelected = 4;
    if (aSelected == aCorrect) {
        currentQ++;
        score++;
        displayQuestion();
    }
    else {
        timeLeft = timeLeft - 5
    }
})

function timer(){
    timeLeft = 20;
    let timer = setInterval(function() {
        $('#timer').text(`${timeLeft}`)
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer)
            $('#timer').text("");
            endQuiz();
        }
    }, 1000);
}


sbSubmit.on("click", () => {
    event.preventDefault;
    localStorage.setItem("Initials", `${initials.val()}`)
    localStorage.setItem("Score", score);
    if (score <= localStorage.getItem("Score")) {
        $("#userScore").text(localStorage.getItem("Initials") + '-' + localStorage.getItem("Score"))
    }
    else {
        $("#userScore").text(`${initials.val()}` + '-' + `${score}`)
    }
    
})

reload.on("click", () => {
    event.preventDefault;
    location.reload()
})

function endQuiz() {
    
    timeLeft = 0;
    quizArea.css("display", "none");
    scoreboard.css("display", "block");
    $("#userScore").text(localStorage.getItem("Initials") + '-' + localStorage.getItem("Score"))
}