document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
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
