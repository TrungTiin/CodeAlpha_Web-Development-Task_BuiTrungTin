function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input field
}

function toggleTask(taskElement) {
    taskElement.classList.toggle("completed");
}

function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
}
