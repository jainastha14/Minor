document.addEventListener("DOMContentLoaded", function () {
        const taskForm = document.getElementById("task-form");
        const taskList = document.getElementById("task-list");
        const tasks = [];
    
        taskForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
    
            tasks.push({ title, description, status: "Pending" });
            updateTaskList();
            taskForm.reset();
        });
    
        function updateTaskList() {
            taskList.innerHTML = "";
            tasks.forEach(function (task, index) {
                const taskItem = document.createElement("div");
                taskItem.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <p>Status: ${task.status}</p>
                    <button onclick="markComplete(${index})">Mark Complete</button>
                `;
                taskList.appendChild(taskItem);
            });
        }
    
        window.markComplete = function (index) {
            if (index >= 0 && index < tasks.length) {
                tasks[index].status = "Completed";
                updateTaskList();
            }
        };
    });