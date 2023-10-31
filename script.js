document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const prioritySelect = document.getElementById("priority");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskPriority = prioritySelect.value;

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.classList.add(taskPriority); // Add priority class
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button>Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            // Add delete functionality
            const deleteButton = listItem.querySelector("button");
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
});
