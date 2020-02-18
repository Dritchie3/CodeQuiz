// define question array
var testQuestion = [
    {
    question: "The German Purity law of 1560, requires that Beer be made from all but what ingredient?",
    answers: ["Yeast","Hops","Malt","Corn"],
    answer: 4 },
    {
    question: ["Some types of beer are named all but what?"],
    answers: ["Porter", "Dunkirk", "Kolsch", "Lambic"],
    answer: [2]
    }, 
    {
    question: ["Beer should be drunk according to what?"],
    answers: ["Proper Temperature","The Season", "Its Color", "Its Clarity"],
    answer: [1]
    },
    {
    question: ["What is a reason Beer can be drunk?"],
    answers: ["Just for Fun", "Celebrations", "Washing Down Meals", "All of the Above"],
    answer: [4]
    },
    {
    question: ["What nutritional value does beer not contain?"],
    answers: ["Carbohydrates", "Fat", "Protein", "Potassium"],
    answer: [2]
    }
]

for(var i = 0; i < testQuestion[0].answers.length; i++){
    console.log(testQuestion[0].answers[i])
}