import { addClassComplete } from "./addClasses";
import {
    clearContentArea,
} from "./clearContent";
import { createEditTaskModal } from "./modal";

import renderTasks from "./renderTasks";

/* const tasks = []; */

const tasks = [{
        title: "Code",
        description: "Code a Todo-App",
        dueDate: "22/01/10",
        priority: "high",
        notes: "fun stuff!!",
        status: "open"
    },
    {
        title: "Work out",
        description: "Back training",
        dueDate: "22/01/31",
        priority: "high",
        notes: "make it happen!",
        status: "open"
    },
]

const createTask = () => {

    const taskFactory = (title, description, dueDate, priority, notes, status) => {
        return {
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
            }

           /*  editProperties: function (currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes) {
                console.log(this);
                this.title = currentTitle;
                this.description = currentDescription;
                this.dueDate = currentDueDate;
                this.priority = currentPriority;
                this.notes = currentNotes;
            } */
        }
    }

    const title = document.getElementById("titleInput");
    const description = document.getElementById("descriptionInput");
    const dueDate = document.getElementById("dueDateInput");
    const priority = document.getElementById("priorityInput");
    const notes = document.getElementById("notesInput");

    let newTask = taskFactory(title.value, description.value, dueDate.value, priority.value, notes.value, "offen");
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
    let currentTitle = obj.title;
    let currentDescription = obj.description;
    let currentDueDate = obj.dueDate;
    let currentPriority = obj.priority;
    let currentNotes = obj.notes;
    createEditTaskModal(objectID, currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes);
}

const modifyTask = (objectID, currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes) => {
    console.log(tasks[objectID]);
    tasks[objectID].title = currentTitle;
    tasks[objectID].description = currentDescription;
    tasks[objectID].dueDate = currentDueDate;
    tasks[objectID].priority = currentPriority;
    tasks[objectID].notes = currentNotes;
}

export {
    tasks,
    createTask,
    deleteTask,
    markTaskComplete,
    retrieveTaskDetails,
    modifyTask
}