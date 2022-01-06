import {
    tasks
} from "./tasks";

const showAllTasks = () => {

    const contentDiv = document.getElementById("mainContent");

    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    let deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-button");

    let taskTitleHeading = document.createElement("div");
    taskTitleHeading.classList.add("task-title-heading");
    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");

    let taskDescriptionHeading = document.createElement("div");
    taskDescriptionHeading.classList.add("task-description");
    let taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");

    let dueDateHeading = document.createElement("div");
    dueDateHeading.classList.add("dueDateHeading");
    let dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");

    let priorityHeading = document.createElement("div");
    priorityHeading.classList.add("priority-heading");
    let priority = document.createElement("div");
    priority.classList.add("priority");

    let notesHeading = document.createElement("div");
    notesHeading.classList.add("notes-heading");
    let notes = document.createElement("div");
    notes.classList.add("priority");


    for (let i = 0; i < tasks.length; i++) {
        deleteBtn.textContent = "X";
        taskDescriptionHeading.textContent = "Title:";
        taskTitle.textContent = tasks[i].title;
        taskDescriptionHeading.textContent = "Description:";
        taskDescription.textContent = tasks[i].description;
        dueDateHeading.textContent = "Due:";
        dueDate.textContent = tasks[i].dueDate;
        priorityHeading.textContent = "Priority:";
        priority.textContent = tasks[i].prioroty;

        contentDiv.appendChild(taskContainer);
        taskContainer.setAttribute("id", tasks.indexOf(tasks[i]));
        taskContainer.appendChild(deleteBtn);
        taskContainer.appendChild(taskTitleHeading);
        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDescriptionHeading);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(dueDateHeading);
        taskContainer.appendChild(dueDate);
        taskContainer.appendChild(priorityHeading);
        taskContainer.appendChild(priority);
    }

}

export default showAllTasks