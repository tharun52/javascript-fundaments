const todoInput= document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")

function addTodo(){
    console.log(todoInput.value);
    taskText = todoInput.value;

    if (taskText == ""){
        alert("Enter a task");
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('todo');

    

    const newTodo = document.createElement('li');
    newTodo.textContent = taskText;
    newTodo.classList.add("todo-item");
    taskDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    completeButton.onclick = completeTask;
    taskDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = deleteTask;
    taskDiv.appendChild(deleteButton);
    
    const undoButton = document.createElement('button');
    undoButton.innerHTML = '<i class="fas fa-undo"></i>';
    undoButton.classList.add('undo-btn');
    undoButton.style.display = "none"; // Hide it initially
    undoButton.onclick = undoTask;
    taskDiv.appendChild(undoButton);

    todoList.appendChild(taskDiv);
}


function completeTask(event) {
    const task = event.target.closest(".todo"); ; // Get the task div
    const undoButton = task.querySelector(".undo-btn"); // Get Undo button

    if (!task.classList.contains("completed")) {
        // If task is NOT completed, mark it as completed
        task.classList.add("completed");
        undoButton.style.display = "inline-block"; // Show Undo button
    } else {
        // If task IS completed, remove the completed class
        task.classList.remove("completed");
        undoButton.style.display = "none"; // Hide Undo button
    }
}


function undoTask(event) {
    const task = event.target.closest(".todo");  // Get the task div
    const undoButton = task.querySelector(".undo-btn");

    task.classList.remove("completed"); // Remove completed class
    undoButton.style.display = "none"; // Hide Undo button
}





function deleteTask(event) {
    const task = event.target.closest(".todo"); 
    // console.log(task);
    task.remove(); // Remove the entire task
}

