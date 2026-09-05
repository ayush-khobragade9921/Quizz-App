const questions = [

    {
        question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "string", correct: false },
            { text: "define", correct: false }
        ]
    },

    {
        question: "HTML ka full form kya hai?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlink Text Management Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },

    {
        question: "CSS ka use kis liye hota hai?",
        answers: [
            { text: "Website ko style karne ke liye", correct: true },
            { text: "Database banane ke liye", correct: false },
            { text: "Server create karne ke liye", correct: false },
            { text: "File store karne ke liye", correct: false }
        ]
    },

    {
        question: "JavaScript me array banane ka sahi syntax kya hai?",
        answers: [
            { text: "const arr = []", correct: true },
            { text: "const arr = {}", correct: false },
            { text: "const arr = ()", correct: false },
            { text: "const arr = <>", correct: false }
        ]
    },

    {
        question: "DOM ka full form kya hai?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Management", correct: false },
            { text: "Document Oriented Method", correct: false },
            { text: "Digital Object Model", correct: false }
        ]
    },

    {
        question: "localStorage me data kis format me store karna commonly use hota hai?",
        answers: [
            { text: "String", correct: true },
            { text: "Function", correct: false },
            { text: "HTML Element", correct: false },
            { text: "CSS Rule", correct: false }
        ]
    }

];


const questionDisplay = document.querySelector("#question");

const answersbtn = document.querySelector("#answer-buttons");

const next_btn = document.querySelector(".next-btn");


let score = 0;
let index = 0;
function startQuiz(){
    score = 0;
    index = 0;

    next_btn.style.display = "none";
}
 
function showQuestion(){
    let currentQuestion = questions[index];
    let questionNO = index + 1;
    questionDisplay.innerHTML = `${questionNO} ${currentQuestion.question}`;
     restate()
      currentQuestion.answers.forEach(e => {
         let button = document.createElement("button");
         button.classList.add("btn");
         button.innerHTML = e.text
         button.dataset.correct = e.correct;

         answersbtn.appendChild(button);
         button.addEventListener("click", selectAnswer)
      })
}
    showQuestion()
function selectAnswer(a){
  let selectedAnswer = a.target;
  let see = selectedAnswer.dataset.correct === "true";
  
  if(see){
    selectedAnswer.classList.add("correct")
    score++
  }else {
    selectedAnswer.classList.add("incorrect")
  }


  for(let button of answersbtn.children){
     if(button.dataset.correct === "true"){
        button.classList.add("correct");
     }
     
     button.disabled = true;
  }
  next_btn.style.display = "block"
     next_btn.innerHTML = "Next"

 
}

function handelNext () {
    index++;
    if(index < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function restate(){
    next_btn.style.display = "none";
    answersbtn.innerHTML = "";
}

function showScore(){
   
    questionDisplay.innerHTML = `you scored ${score} out of 6`;
    
    
    
    restate()
     next_btn.innerHTML = "play again";
    next_btn.style.display = "block";
    
}

next_btn.addEventListener("click", function(){
    if(index < questions.length){
        handelNext();
        
    }else {
        startQuiz()
        showQuestion();
    }
})


startQuiz();