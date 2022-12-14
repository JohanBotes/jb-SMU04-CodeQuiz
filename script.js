let quizQuestions = document.getElementById("quiz-questions");
let timer = document.getElementById("timer");
let btnStart = document.getElementById("btn-start");
let timecounter = document.getElementById("timecounter");
let titleitem = document.getElementById("title-item");
let nextQuestions 
let questionanswers = document.getElementById("question-answers");
let myScore = document.getElementById("score");
let btnScore = document.getElementById("btnScore");
let currentindex = 0;
let score = 0;
let count = 60;
let alert =document.getElementById("alert");
let info = document.getElementById("info");
// var addscore = document.getElementById("addscore");
// var submitresult = document.getElementById("submitresult");
let allScores = [];
let storedScores = JSON.parse(localStorage.getItem("userData"));
let questions = [
    {
        title: "Q1: JavaScript data types do not include:---",
        choices: ["Strings","Booleans","Alerts", "Numbers"],
        answer : "Alerts"    
    },
    {
        title: "Q2: The if/else statement is enclosed within:---",
        choices: ["Quotes","Curly brackets","Parentheses", "Square brackets"],
        answer : "Parentheses"    
    },
    {
        title: "Q3: Arrays in JavaScript can be used to store:---",
        choices: ["Numbers and strings","Other arrays","Booleans", "All of the above"],
        answer : "All of the above"    
    },
    {
        title: "Q4: String values must be enclosed within --- when assigned to variables ",
        choices: ["Commas","Curly brackets","Quotes","Parentheses"],
        answer : "Quotes"    
    },
    {
        title: "Q5: A useful tool for printing content to the debugger to assist with development and debugging is:---",
        choices: ["JavaScript","Terminal/bash","Alerts", "Console.log"],
        answer : "Console.log"    
    },
    {
        title: "Q6: Which of the following is true about typeof operator in JavaScript?",
        choices: ["The typeof is a unary operator that is placed before its single operand, which can be of any type","It's value is a string indicating the data type of the operand", "None of the above", "Both of the above"],
        answer : "Both of the above"    
    }
]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    let timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    let userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     let button = document.createElement("button")
    button.type="button"
    button.className="btn btn-primary btn-block btn-lg text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
    }
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -10
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }