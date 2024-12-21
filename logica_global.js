let remainingQuestions = [...questions];
let previousQuestions = [];
let userAnswers = [];

let currentQuestion = 0;
let answeredQuestions = 0;
let number_correct_questions = 0;

const maxQuestions = 20;

//Esta funcion quita tambien la pregunta del array de preguntas restantes
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const question = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1);
    return question;
}


//Muestra la pregunta y los botones de respuesta
function showQuestion(questionObj) {
    const questionArea = document.getElementById("question-area");
    const buttonsContainer = document.getElementById("buttons-container");
    const explanationContainer = document.getElementById("explanation-container");
    const title = document.getElementById("title-quiz");

    // Reset everything
    questionArea.innerHTML = questionObj.Pregunta;
    explanationContainer.innerHTML = "";
    buttonsContainer.innerHTML = "";
    explanationContainer.style.display = "none";
    title.innerHTML = "Conjuntos: "+ (currentQuestion + 1) + "/" + maxQuestions;


    // Trigger MathJax to render LaTeX
    MathJax.typesetPromise();

    // Create buttons
    const trueButton = document.createElement("button");
    trueButton.textContent = "Verdadero";
    trueButton.classList.add("answer-button");
    
    const falseButton = document.createElement("button");
    falseButton.textContent = "Falso";
    falseButton.classList.add("answer-button");
    
    trueButton.addEventListener("click", () => {
        //Comprobamos si la solucion es correcta
        if ("verdadero" == questionObj.Respuesta.toLowerCase()){
            number_correct_questions++;
        }
        
        showExplanation(questionObj, "Verdadero");
        disableButtons(trueButton, falseButton); // Disable buttons and make them gray
        userAnswers.push("Verdadero");
        answeredQuestions++;
    });

    falseButton.addEventListener("click", () => {
        //Comprobamos si la solucion es correcta
        if ("falso" == questionObj.Respuesta.toLowerCase()){
            number_correct_questions++;
        }
        
        showExplanation(questionObj, "Falso");
        disableButtons(trueButton, falseButton); // Disable buttons and make them gray
        userAnswers.push("Falso");
        answeredQuestions++;
    });

    buttonsContainer.appendChild(trueButton);
    buttonsContainer.appendChild(falseButton);
    
    //Si estoy en una pregunta anterior
    if (currentQuestion < answeredQuestions){
        showExplanation(questionObj, userAnswers[currentQuestion]);
        disableButtons(trueButton, falseButton); // Disable buttons and make them gray
    }
}

function showExplanation(questionObj, userAnswer) {
    
    const explanationContainer = document.getElementById("explanation-container");
    const answer = userAnswer.toLowerCase();
    // Check if the answer is correct
    const isCorrect = answer === questionObj.Respuesta.toLowerCase();

    explanationContainer.classList.remove("correct", "incorrect");
    explanationContainer.classList.add(isCorrect ? "correct" : "incorrect");
    
    explanationContainer.style.display = "block";

    explanationContainer.innerHTML = "<strong>" + 
        (isCorrect ? "¡Correcto!" : "Respuesta incorrecta.") + 
        "</strong><br/><br/>" +  questionObj.Explicación;

    // Trigger MathJax to render LaTeX
    MathJax.typesetPromise();

    // Show the "Next Question" button
    document.getElementById("next-question-btn").style.display = "block";
}

function disableButtons(trueButton, falseButton) {
    // Add 'disabled' class to both buttons
    trueButton.classList.add("disabled");
    falseButton.classList.add("disabled");

    // Disable both buttons to prevent further clicks
    trueButton.disabled = true;
    falseButton.disabled = true;
}

document.getElementById("next-question-btn").addEventListener("click", () => {    
    //Verificamos si estamos en la ultima pregunta
    if (currentQuestion + 1 == maxQuestions){ 
        document.getElementById("question-area").innerHTML = "<h2>¡Fin del cuestionario!</h2><br><h3>Has acertado "+number_correct_questions+" de "+maxQuestions+" preguntas.</h3>";
        document.getElementById("buttons-container").style.display = "none";
        document.getElementById("next-question-btn").style.display = "none";
        document.getElementById("prev-question-btn").style.display = "none";
        document.getElementById("explanation-container").style.display = "none";
        document.getElementById("repeat-test-btn").style.display = "block";
        return null;
    }
    //Aumentamos la pregunta en la que estamos
    currentQuestion++;
    //Si no estamos en la ultima pregunta respondida
    if (currentQuestion < answeredQuestions){
        const nextQuestion = previousQuestions[currentQuestion];
        showQuestion(nextQuestion);
        if (currentQuestion > 0){
            document.getElementById("prev-question-btn").style.display = "block";
        }
        return null;
    }
    //Si estamos ante una nueva pregunta
    const nextQuestion = getRandomQuestion();
    if (nextQuestion) {
        previousQuestions.push(nextQuestion);
        showQuestion(nextQuestion);
        document.getElementById("next-question-btn").style.display = "none"; // Hide the button again
        if (currentQuestion > 0){
            document.getElementById("prev-question-btn").style.display = "block";
        }
    }
});

document.getElementById("prev-question-btn").addEventListener("click", () => {
    if (previousQuestions.length > 0) {
        currentQuestion--;
        const prevQuestion = previousQuestions[currentQuestion];
        showQuestion(prevQuestion);
    }
    if (currentQuestion === 0){
        document.getElementById("prev-question-btn").style.display = "none";
    }
});

document.getElementById("repeat-test-btn").addEventListener("click", () => {
    document.getElementById("repeat-test-btn").style.display = "none";
    window.location.href = "global.html";
});

document.addEventListener("DOMContentLoaded", () => {
    const firstQuestion = getRandomQuestion();
    if (firstQuestion) {
        previousQuestions.push(firstQuestion);
        showQuestion(firstQuestion);
    }
});