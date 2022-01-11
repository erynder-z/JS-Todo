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

        const taskCategory = document.createElement("div");
        taskCategory.classList.add("task-category");
        taskCategory.classList.add("hidden");
        taskCategory.textContent = task.category;
        taskContainer.appendChild(taskCategory);

        const taskTitleHeading = document.createElement("div");
        taskTitleHeading.classList.add("task-title-heading");
        taskTitleHeading.textContent = "Title:";
        taskContainer.appendChild(taskTitleHeading);

        const taskTitle = document.createElement("div");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = task.title;
        taskContainer.appendChild(taskTitle);

        if (task.description) {
            const taskDescriptionHeading = document.createElement("div");
            taskDescriptionHeading.classList.add("task-description-heading");
            taskDescriptionHeading.classList.add("hidden");
            taskDescriptionHeading.textContent = "Description:";
            taskContainer.appendChild(taskDescriptionHeading);

            const taskDescription = document.createElement("div");
            taskDescription.classList.add("task-description");
            taskDescription.classList.add("hidden");
            taskDescription.textContent = task.description;
            taskContainer.appendChild(taskDescription);
        }


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
        priorityHeading.classList.add("hidden");
        priorityHeading.textContent = "Priority:";
        taskContainer.appendChild(priorityHeading);

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.classList.add("hidden");
        priority.textContent = task.priority;
        taskContainer.appendChild(priority);

        if (task.notes) {
            const notesHeading = document.createElement("div");
            notesHeading.classList.add("notes-heading");
            notesHeading.classList.add("hidden");
            notesHeading.textContent = "Notes:";
            taskContainer.appendChild(notesHeading);

            const notes = document.createElement("div");
            notes.classList.add("notes");
            notes.classList.add("hidden");
            notes.textContent = task.notes;
            taskContainer.appendChild(notes);
        }


        const expandTask = document.createElement("div");
        expandTask.classList.add("expand-button");
        expandTask.textContent = "v";
        taskContainer.appendChild(expandTask);

        const wrapper = document.createElement("div");
        wrapper.classList.add("task-options-wrapper");
        taskContainer.appendChild(wrapper);

        const marktCompleteBtn = document.createElement("button");
        marktCompleteBtn.classList.add("mark-complete-button");
        marktCompleteBtn.textContent = "done";
        wrapper.appendChild(marktCompleteBtn);

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-button");
        editBtn.textContent = "edit";
        wrapper.appendChild(editBtn);

        const deleteBtn = document.createElement("div");
        deleteBtn.classList.add("delete-button");
        deleteBtn.textContent = "X";
        wrapper.appendChild(deleteBtn);
    });

    activateButtons();
}

export default renderTasks
