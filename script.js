// timer
// seperate high score html page  to include clear high scores and to add your last score

//questions
var question1 = "The German Purity law of 1560, requires that Beer be made from all but what ingredient?";
var question2 = "Some types of beer are named all but what?";
var question3 = "Beer should be drunk according to what?";
var question4 = "What is a reason Beer can be drunk?";
var question5 = "What nutitional value does beer not contain?";

//Answer array
var answer1 = [
    ("Yeast","false"), ("Hops", "false"), ("Malt", "false"), ("Corn", "true")
    ];
var answer2 = [
    ("Porter", "false"), ("Dunkirk", "true"), ("Kolsch", "false"), ("Lambic", "false")
    ];
var answer3 = [
    ("Proper Temperature", "true"), ("The Season", "false"), ("its Color","false"), ("Its Clarity", "false")
    ];
var answer4 = [
    ("Just for fun", "false"), ("Celebrating", "false"), ("Washing down Meals","false"), ("all of the above","true") 
    ];
var answer5 = [
    ("Carbohydrates", "false"), ("Fat","true"), ("Protein","false"), ("Potassium","false")
    ];

//timer
var timer = document.getElementById("timer");
var buttonStart = document.getElementById("btn-startQuiz");
var buttonPause = document.getElementById("btn-pauseQuiz");
var count = 70;
buttonStart.addEventListener("click", function() {
    setInterval(function() {
        count -= 1;
        timer.textContent = count;
    }, 1000);
})



















// var timeEl = document.querySelector(".timer");
// var mainEl = document.getElementById("main");

// var secondsLeft = 70;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " Seconds Left.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

  
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();
