// Fetch questions from the JSON file and display them dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch("questions.json")
        .then(response => response.json())
        .then(data => loadQuestions(data.questions))
        .catch(error => console.error("Error loading questions:", error));
});

function loadQuestions(questions) {
    const quizContainer = document.getElementById("quiz-container");
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("each-question");

        // Create question text
        const questionText = document.createElement("p");
        questionText.classList.add("question");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        // Create radio button options
        q.options.forEach(option => {
            const optionContainer = document.createElement("div");
            optionContainer.classList.add("option-container");

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = `question${index}`;
            radioInput.value = option;
            radioInput.id = `q${index}-${option}`;

            const label = document.createElement("label");
            label.htmlFor = `q${index}-${option}`;
            label.textContent = option;

            optionContainer.appendChild(radioInput);
            optionContainer.appendChild(label);
            questionDiv.appendChild(optionContainer);
        });

        // Create "Check Answer" button
        const checkButton = document.createElement("button");
        checkButton.textContent = "Check Answer";
        checkButton.onclick = function () {
            checkAnswer(index, q.correct);
        };

        // Create result display
        const resultDisplay = document.createElement("p");
        resultDisplay.id = `result${index}`;

        questionDiv.appendChild(checkButton);
        questionDiv.appendChild(resultDisplay);
        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="question${questionIndex}"]:checked`);
    const resultDisplay = document.getElementById(`result${questionIndex}`);

    if (!selectedOption) {
        resultDisplay.textContent = "Please select an answer!";
        resultDisplay.style.color = "yellow";
        return;
    }

    if (selectedOption.value === correctAnswer) {
        resultDisplay.textContent = "Correct!";
        resultDisplay.style.color = "lightgreen";
    } else {
        resultDisplay.textContent = "Wrong! The correct answer is " + correctAnswer;
        resultDisplay.style.color = "red";
    }
}
