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


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;

    next_btn.innerHTML = "Next";

    showquestion();

}


function showquestion() {

    let currentquestion = questions[currentQuestionIndex];

    let questionNo = currentQuestionIndex + 1;

    questionDisplay.innerHTML =
        questionNo + ". " + currentquestion.question;


    restate();


    currentquestion.answers.forEach(ayush => {

        let button = document.createElement("button");

        button.classList.add("btn");

        button.innerText = ayush.text;

        button.dataset.correct = ayush.correct;

        answersbtn.appendChild(button);

        button.addEventListener("click", selectAnswer);

    });

}


function restate() {

    next_btn.style.display = "none";

    while (answersbtn.firstChild) {

        answersbtn.removeChild(answersbtn.firstChild);

    }

}


function selectAnswer(e) {

    const selectedans = e.target;
    const isCorrect = selectedans.dataset.correct === "true";

    console.log(isCorrect);

    if (isCorrect) {
        selectedans.classList.add("correct");
        score++;
    } else {
        selectedans.classList.add("incorrect");
    }

    Array.from(answersbtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    next_btn.style.display = "block";
}

function showsScore () {
    restate();
    questionDisplay.innerHTML = `You scored ${score} out of ${questions.length}!`
    next_btn.innerHTML = "Play again";
    next_btn.style.display = "block";
}


function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showquestion();
    }else{
        showsScore();
    }
}
next_btn.addEventListener("click", function (){
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();