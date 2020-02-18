// define question array
var testQuestion = [
    {
    question: "The German Purity law of 1560, requires that Beer be made from all but what ingredient?",
    answers: ["Yeast","Hops","Malt","Corn"],
    answer: 4 },
    {
    question: "Some types of beer are named all but what?",
    answers: ["Porter", "Dunkirk", "Kolsch", "Lambic"],
    answer: 2
    }, 
    {
    question: "Beer should be drunk according to what?",
    answers: ["Proper Temperature","The Season", "Its Color", "Its Clarity"],
    answer: 1
    },
    {
    question: "What is a reason Beer can be drunk?",
    answers: ["Just for Fun", "Celebrations", "Washing Down Meals", "All of the Above"],
    answer: 4
    },
    {
    question: "What nutritional value does beer not contain?",
    answers: ["Carbohydrates", "Fat", "Protein", "Potassium"],
    answer: 2
    }
]

var answerEl = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var corAnswerEl = testQuestion.answer;
console.log(corAnswerEl);
console.log(testQuestion);

//timer start and other  variables 
var timer = document.getElementById("timer");
var timerEl;
var buttonStart = document.getElementById("btn-startQuiz");
var startPage = document.getElementById("start");
var count = 75;
var score = 0;

var correctAns = testQuestion[0].answer;
// var btn = document.getElementById();
console.log(correctAns);

// for (var g = 0; g < testQuestion[0].length; g++){
//     btn.addEventListener("click", clickAns()) 
    //start timer
    buttonStart.addEventListener("click", function() {
        timerEl = setInterval(function() {
            console.log(count)
            count--;
            timer.textContent = count;
            //stoping timer when needed
            if(count === 72) {
                clearInterval(timerEl);  
                console.log("interval has been cleared")          
            }
            }, 1000);            
                
    //correct item clicked function

            function btnClicked(){
                // btn.addEventListener("click", clickAns()) 
            

        
                function clickAns() {
                    if (correctAns = li) {
                        renderQuestions();
                    }
                    else btnClicked()
                    
                };
            };


        
    //Start asking question and answers            
            function renderQuestions() {

                for (var k = 0; k < testQuestion[0].question.length; k++) {
                    var questionCreate = document.createElement('h3');
                    questionCreate.textContent = testQuestion[k].question;
                    questionEl.append(questionCreate);
                    var q = 0;
                    console.log(questionEl);
                    console.log(questionCreate);
                    
                    for (var i = 0; i < testQuestion[0].answers.length; i++) {
                        var answerCreate = document.createElement('li');  
                        var br = document.createElement('br');
                        var a = document.createElement('a'); 
                        a.setAttribute('href', "http://google.com");  
                        // a.href = 'http://google.com'              
                        a.textContent = testQuestion[0].answers[i];                        
                        q++
                        answerCreate.setAttribute('class', q);                        
                        answerEl.append(br);
                        
                        answerEl.append(answerCreate);
                        answerCreate.append(a);
                        
                        console.log(answerCreate);
                        console.log(answerEl);
                        console.log(testQuestion[0].answers[i]);
                    };
                    btnClicked();
                    return questionCreate
                };
        
            };

            renderQuestions();
            btnClicked();

    });
// };    
//when High score text is clicked, go to high score page

//print questions and answers
//add submit on answers
//when answer is clicked show "right" or "wrong" ant bottom 
//change scor 10 points for right answer and -10 for wrong answer
//create button to continue
//when question is chosen move to next question
//when all questions are answers-->
//stop timer
//add remaning timer-count to score
//ask to add name to "high score page"
//add submit button
//submit takes you to high score button
//high score button has two buttons "clears all" scores and "go back"
//create high score array

