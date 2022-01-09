import activateButtons from "./buttons";
import {
    tasks
} from "./tasks";

const renderTasks = () => {


const contentDiv = document.getElementById("mainContent");

const taskListContainer = document.createElement("div");

taskListContainer.classList.add("taskList-container");
contentDiv.appendChild(taskListContainer);



tasks.forEach(task => {
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", tasks.indexOf(task)); 
    taskContainer.classList.add("task-container");
    taskListContainer.appendChild(taskContainer);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-button");
    deleteBtn.textContent = "X";
    taskContainer.appendChild(deleteBtn);


    const taskTitleHeading = document.createElement("div");
    taskTitleHeading.classList.add("task-title-heading");
    taskTitleHeading.textContent = "Title:";
    taskContainer.appendChild(taskTitleHeading);

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;
    taskContainer.appendChild(taskTitle);

    const taskDescriptionHeading = document.createElement("div");
    taskDescriptionHeading.classList.add("task-description-heading");
    taskDescriptionHeading.textContent = "Description:";
    taskContainer.appendChild(taskDescriptionHeading);

    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);

    const dueDateHeading = document.createElement("div");
    dueDateHeading.classList.add("dueDateHeading");
    dueDateHeading.textContent = "Due:";
    taskContainer.appendChild(dueDateHeading);

    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.textContent = task.dueDate;
    taskContainer.appendChild(dueDate);

    const priorityHeading = document.createElement("div");
    priorityHeading.classList.add("priority-heading");
    priorityHeading.textContent = "Priority:";
    taskContainer.appendChild(priorityHeading);

    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.textContent = task.priority;
    taskContainer.appendChild(priority);

    const notesHeading = document.createElement("div");
    notesHeading.classList.add("notes-heading");
    notesHeading.textContent = "Notes:";
    taskContainer.appendChild(notesHeading);

    const notes = document.createElement("div");
    notes.classList.add("notes");
    notes.textContent = task.notes;
    taskContainer.appendChild(notes);

    const marktCompleteBtn = document.createElement("button");
    marktCompleteBtn.classList.add("mark-complete-button");
    marktCompleteBtn.textContent = "mark momplete";
    taskContainer.appendChild(marktCompleteBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    editBtn.textContent = "edit task";
    taskContainer.appendChild(editBtn);
});

activateButtons();
}

export default renderTasks
