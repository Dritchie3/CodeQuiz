// define question array
$( document ).ready(function() {
    console.log( "document loaded" );


var testQuestion = [
    {
        question:
            "The German Purity law of 1560, requires that Beer be made from all but what ingredient?",
        answers: [
            "Yeast",
            "Hops",
            "Malt",
            "Corn"
        ],
        answer: 'Corn'
    },
    {
        question: "All are various beer styles but what?",
        answers: [
            "Porter",
            "Dunkirk",
            "Kolsch",
            "Lambic"
        ],
        answer: 'Dunkirk'
    },
    {
        question: "Beer should be drunk according to what?",
        answers: [
            "Proper Temperature",
            "The Season",
            "Its Color",
            "Its Clarity"
        ],
        answer: 'Proper Temperature'
    },
    {
        question: "What is a reason to drink Beer?",
        answers: [
            "Just for Fun",
            "Celebrations",
            "Washing Down Meals",
            "All of the Above"
        ],
        answer: 'All of the Above'
    },
    {
        question: "What nutritional value does beer not contain?",
        answers: [
            "Carbohydrates",
            "Fat",
            "Protein",
            "Potassium"
        ],
        answer: 'Fat'
    }
];
//timer start and other  variables
var pageEl = document.getElementById("page");
var title = "Beer Quiz Challange";
var directionsStart =
    "Try and answer the Beer related questions within the time limit. Keep in mind that a wrong answer will penalize your Scoretime by 10 seconds. You will get 10 points for every correct answer and 1 point for every second left after the test.";
var timerEl = document.getElementById("timer");
var buttonStart = document.getElementById("btn-startQuiz");
var startPage = document.getElementById("start");
var count = 75;
var score = 0;
var questionCounter= 0;
var arrayNext = 0;
var indexNum = 0;
var choice;
var btnArray = [];

document.getElementById("title").append(title);
document.querySelector("#directions").append(directionsStart);
// console.log("directionsStart = " + directionsStart);

//start timer
buttonStart.addEventListener("click", function () {
    questionDisplay(questionCounter);

    timer = setInterval(function () {
        count--;
        timerEl.textContent = count;
        //stoping timer when needed
        if (count === 0) {
            clearInterval(timer);
            }
    }, 1000);
});

function questionDisplay() {
    console.log('indexNum = ' + indexNum);   
    var currentQuestion = testQuestion[indexNum]
    document.getElementById("title").innerText=currentQuestion.question;
            $("#btn-startQuiz").remove();
            $("#directions").remove();
            $('li').remove();
            
    for (var answerDisplay = 0; answerDisplay < currentQuestion.answers.length; answerDisplay++){
        // console.log("answerDisplay", answerDisplay);
        var answerCreate = document.createElement("li");  
        console.log('answerCreate = ' + answerCreate)      
        var ansBtn = document.createElement("button");
        var answerEl = document.getElementById("corAns");        
        choice = ansBtn.textContent = currentQuestion.answers[answerDisplay];
        console.log('choice = ' + choice);
        ansBtn.setAttribute("class", 'myAns');
        // ansBtn.push(btnArray);
        // console.log(btnArray);
        answerEl.append(answerCreate);
        answerCreate.append(ansBtn);
        var ansItems= document.querySelector(".ansItems")
        ansItems.append(answerCreate);    
        console.log('answerCreate = ' + answerCreate);
    };

        //pull out of function
        $(document).on("click", ".myAns", btnClicked);
        // document.getElementsByClassName("myBtn").addEventListener("click", btnClicked);

        function btnClicked(){            
            event.preventDefault()
            console.log();
            var target = testQuestion[indexNum].answer;
            console.log('correct answer = ' + target);
            choice = ansBtn.textContent;
            console.log('choice = ', choice);
            
            if (choice === target) {
                // console.log('choice = ', choice);                
                score = score + 10; 
                $('#correctAnswer').text('Correct Answer')               
                setTimeout(function () {
                    indexNum++;   
                    $('#correctAnswer').empty();                
                    questionDisplay();
                }, 3000);
                 
            } else {
                $('#wrongAnswer').text('Wrong Answer')
                count = count - 5;
                setTimeout(function () {
                    indexNum++;
                    $('#wrongAnswer').empty();                    
                    questionDisplay();
                }, 3000);

            };
        };
        
        
        console.log("ansBtn.textContent", ansBtn.textContent);
};
});

// //when all questions are answers-->
// //stop timer
// //add remaning timer-count to score
// //ask to add name to "high score page"
// //add submit button
// //submit takes you to high score button
// //high score button has two buttons "clears all" scores and "go back"
// //create high score array
