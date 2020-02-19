// define question array
var testQuestion = [
    {
    question: "The German Purity law of 1560, requires that Beer be made from all but what ingredient?",
    answers: ["Yeast","Hops","Malt","Corn"],
    answer: "Yeast" },
    {
    question: "All are various beer styles but what?",
    answers: ["Porter", "Dunkirk", "Kolsch", "Lambic"],
    answer: 2
    }, 
    {
    question: "Beer should be drunk according to what?",
    answers: ["Proper Temperature","The Season", "Its Color", "Its Clarity"],
    answer: 1
    },
    {
    question: "What is a reason to drink Beer?",
    answers: ["Just for Fun", "Celebrations", "Washing Down Meals", "All of the Above"],
    answer: 4
    },
    {
    question: "What nutritional value does beer not contain?",
    answers: ["Carbohydrates", "Fat", "Protein", "Potassium"],
    answer: 2
    }
]

//timer start and other  variables
var pageEl = document.getElementById('page');
var title = 'Beer Quiz Challange';
var directions = 'Try and answer the Beer related questions within the time limit. Keep in mind that a wrong answer will penalize your Scoretime by 10 seconds. You will get 10 points for every correct answer and 1 point for every second left after the test.';
var answerEl = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var timerEl = document.getElementById("timer");
var buttonStart = document.getElementById("btn-startQuiz");
var startPage = document.getElementById("start");
var count = 75;
var score = 0;
var t = 0;
var k = 0;
var q = 0;

var titleEl = document.getElementById('title').append(title);
var directionsEl = document.querySelector('#Directions').append(directions);

//start timer
    buttonStart.addEventListener("click", function() {
        timer = setInterval(function() {
            // console.log(count)
            count--;
            timerEl.textContent = count;            
            //stoping timer when needed
            if (count === 0) {
                clearInterval(timer);  
                console.log("interval has been cleared")          
            }
            }, 1000);         
});

document.addEventListener("click", function() {
    var parent = document.getElementById("page").getElementsByTagName("div")[0];
    var child = document.getElementsByTagName('div')[0];
    var removed = parent.remove(child);

    renderQuestions();
});

document.addEventListener('click', function(){
    k++;    
});

//Start asking question and answers            
    function renderQuestions() { 
    //     var parent = document.getElementById('page');
    //     var newEl1 = document.createElement('div');
    //     var newEl2 = document.createElement('h3');
    //     var newEl3 = document.createElement('ol');

    //    console.log(page)
    //     var mainDiv = document.getElementById("page");
    //     var parent = document.createElement("div");
    //     var child = document.createElement('h3');


        
        // var ques = child.createElement('h3');
       
        // var child = document.createElement('h3').textContent = testQuestion[k].question;
        document.textContent = testQuestion[k].question;
        console.log('k = ' + k);
        // document.appendchild(parent);
        // var parent = document.createElement('div');


        var questionCreate = document.createElement('h3')
        questionCreate.textContent = testQuestion[k].question;
        questionEl.append(questionCreate);

        // console.log('this is the page div ' + pageEl);
       
  
        
        
//print questions and answers. Add click ability to answers.          
        for (var i = 0; i < testQuestion[0].answers.length; i++) {
            var answerCreate = document.createElement('li');  
            var br = document.createElement('br');
            var a = document.createElement('button'); 
            a.setAttribute('id', 'corAns1');  
            a.textContent = testQuestion[k].answers[i];                        
            q++
            t++
            answerCreate.setAttribute('class', 'corAns');                        
            answerEl.append(br);                        
            answerEl.append(answerCreate);
            answerCreate.append(a);  
            
            console.log('t = ' + t);                     
            console.log('i = ' + i);
            console.log('li = ' + q);
            console.log('answerCreate = ' + answerCreate);
            console.log(' answers length is = ' + testQuestion[i].answers.length);                  
            console.log('correct answer = ' + testQuestion[i].answer);
        };                
        return;
            
    };

   





//when answer is clicked show "right" or "wrong" answer on bottom 
//change score 10 points for right answer and -10 for wrong answer
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

