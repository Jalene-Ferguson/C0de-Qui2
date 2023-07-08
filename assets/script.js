var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("container-start");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initial-form")
var containerHighScoresEl = document.getElementById("high-score-box")
var viewHighScoreEl = document.getElementById("scores-btn")
var listHighScoreEl = document.getElementById("score-list")
var correctEl = document.getElementById("correct")
var incorrectEl = document.getElementById("incorrect")
      //buttons
var btnStartEl = document.querySelector("#start")
var btnGoBackEl = document.querySelector("#back")
var btnClearScoresEl = document.querySelector("#clear-scores")
      //questions/answers element
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;

var highScores = [];

var arrayShuffleQuestions
var QuestionIndex = 0

var question = [
{ q: "Commonly used data types DO Not Include:",
  a: "3.alerts",
  choices: [{choice: "1.strings"}, {choice: "2.booleans"}, {choice: "3.alerts"}, {choice: "4.numbers"}]
},
{ q:"Arrays in JavaScript can be used to store _______.",
  a:"4.all of the above",
  choices: [{choice: "1.numbers and strings"}, {choice: "2.other arrays"}, {choice: "3.booleans"}, {choice: "4.all of the above"}]
},
{ q: "A very useful tool use during development and debugging for printing content to the debugger is:",
  a:"1.javascript",
  choices: [{choice: "1.javascript"}, {choice: "2.terminal/bash"}, {choice: "3.for loops"}, {choice: "4.console.log"}]
},
];