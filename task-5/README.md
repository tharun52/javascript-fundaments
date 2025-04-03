# **Quiz App**  

A simple, modern **Quiz App** that dynamically loads **questions** from a JSON file using **JavaScript**. The app allows users to select answers and check if they are correct.  

## Output Screenshot  
![Quiz App](output.gif)  

## **🔑 Key JavaScript Code**  

### **📥 Loading Questions from `questions.json`**
```js
fetch('questions.json')
    .then(response => response.json())
    .then(data => loadQuestions(data))
    .catch(error => console.error("Error loading questions:", error));
```
📌 **What It Does:** Fetches quiz questions from `questions.json` and passes them to `loadQuestions()`.  

---

### **📌 Dynamically Creating Quiz Questions**
```js
function loadQuestions(questions) {
    const container = document.querySelector('.container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('each-question');

        questionDiv.innerHTML = `
            <p class="question">${q.question}</p>
            ${q.options.map((option, i) => `
                <div class="option-container">
                    <input type="radio" name="question${index}" id="q${index}o${i}" value="${option}">
                    <label for="q${index}o${i}">${option}</label>
                </div>
            `).join('')}
            <button onclick="checkAnswer(${index}, '${q.correct}')">Check Answer</button>
            <p id="result${index}"></p>
        `;

        container.appendChild(questionDiv);
    });
}
```
📌 **What It Does:**  
- Loops through each question and dynamically creates HTML elements.  
- Appends them to the `.container` div.  

---

### **✔ Checking the Selected Answer**
```js
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
```
📌 **What It Does:**  
- Checks if a radio button is selected.  
- Compares the selected value with the correct answer.  
- Displays feedback (`Correct!` or `Wrong!`).  

---

## **📄 Sample `questions.json`**
```json
[
    {
        "question": "Which game features the character Master Chief?",
        "options": ["Halo", "Call of Duty", "Battlefield", "Destiny"],
        "correct": "Halo"
    },
    {
        "question": "What is the best-selling video game of all time?",
        "options": ["Minecraft", "GTA V", "Tetris", "Super Mario Bros"],
        "correct": "Minecraft"
    }
]
```