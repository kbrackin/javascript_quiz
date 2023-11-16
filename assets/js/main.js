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
let currentQ;
let startButton = $("#start");
let quizArea = $("#quiz-area");
let question = $("#question");
let a1 = $("#answerOne");
let a2 = $("#answerTwo");
let a3 = $("#answerThree");
let a4 = $("#answerFour");

startButton.on("click", function() {
    timer()
    displayQuestion()
})

function displayQuestion() {
    if (currentQ == questionPool.length) {
        endQuiz();
        return;
    }
    startButton.css("display","none");
    quizArea.css("display","block");
    question.append()
}
// startButton.on("click", function() {
function timer(){
    timeLeft = 30;
    let timer = setInterval(function() {
        $('#timer').replaceWith(`<h6 id="timer">${timeLeft}</h6>`)
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer)
            $('#timer').replaceWith("<h6 id='timer'>Time's Up!</h6>");
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {

}