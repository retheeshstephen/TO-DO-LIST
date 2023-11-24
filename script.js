

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item
    var newTask = document.createElement("li");

    // Create a span to hold the task text
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

   

    // Create buttons for edit and delete
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        editTask(taskText);
    };

    var gap = document.createElement("span");
    gap.classList.add("gap");
    

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteTask(newTask);
    };

    // Append elements to the task item
    newTask.append(gap);
    newTask.appendChild(taskText);
    newTask.append(gap.cloneNode());
    newTask.appendChild(editButton);
    newTask.append(gap.cloneNode());
    newTask.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
}

function editTask(taskText) {
    var updatedText = prompt("Edit task:", taskText.textContent);
    if (updatedText !== null) {
        taskText.textContent = updatedText;
    }
}


function deleteTask(taskItem) {
    var confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        taskItem.remove();
    }
}



