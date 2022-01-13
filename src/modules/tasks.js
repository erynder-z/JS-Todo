import { addClassComplete } from "./addClasses";
import {
    clearContentArea,
} from "./clearContent";
import { createEditTaskModal } from "./modal";

import renderTasks from "./renderTasks";

/* const tasks = []; */

const tasks = [{
        category: "work",
        title: "Code",
        description: "Code a Todo-App",
        dueDate: "2022-01-13",
        priority: "high",
        notes: "fun stuff!!",
        status: "open",
        notes: "longlong long long longlonglong longlong long long long"
    },
    {
        category: "hobby",
        title: "Work out",
        description: "Back training",
        dueDate: "2022-02-01",
        priority: "high",
        notes: "make it happen!",
        status: "open"
    },
]

const createTask = () => {

    const taskFactory = (category, title, description, dueDate, priority, notes, status) => {
        return {
            category,
            title,
            description,
            dueDate,
            priority,
            notes,
            status,

            toggleStatus: function () {
                this.status = "done";  
            },

            spliceTask: function (objectID) {
                tasks.splice(objectID, 1);
            },

            editProperties: function (currentCategory, currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes) {
                this.category = currentCategory;
                this.title = currentTitle;
                this.description = currentDescription;
                this.dueDate = currentDueDate;
                this.priority = currentPriority;
                this.notes = currentNotes;
            }
        }
    }

    const category = document.getElementById("categoryInput");
    const title = document.getElementById("titleInput");
    const description = document.getElementById("descriptionInput");
    const dueDate = document.getElementById("dueDateInput");
    const priority = document.getElementById("priorityInput");
    const notes = document.getElementById("notesInput");

    let newTask = taskFactory(category.value, title.value, description.value, dueDate.value, priority.value, notes.value, "open");
    tasks.push(newTask);
    console.log(tasks);
}

const deleteTask = (objectID) => {
    tasks[objectID].spliceTask(objectID);
    clearContentArea();
    renderTasks();
    return tasks;
}

const markTaskComplete = (objectID) => {
    tasks[objectID].toggleStatus(objectID);
    addClassComplete(objectID);
    return tasks;
}

const retrieveTaskDetails = (objectID) => {
    let obj = tasks[objectID];
    let currentCategory = obj.category;
    let currentTitle = obj.title;
    let currentDescription = obj.description;
    let currentDueDate = obj.dueDate;
    let currentPriority = obj.priority;
    let currentNotes = obj.notes;
    createEditTaskModal(objectID, currentCategory, currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes);
}

export {
    tasks,
    createTask,
    deleteTask,
    markTaskComplete,
    retrieveTaskDetails
}