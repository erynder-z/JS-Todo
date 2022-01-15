
import { ta } from "date-fns/locale";
import { activeView } from "./activeView";
import {
    addClassComplete
} from "./addClasses";
import {
    clearContentArea,
} from "./clearContent";
import { showCategoryWork, showCategoryChore, showCategoryHealth, showCategoryHobby, showDueToday, showDueWeek } from "./filteredTasks";
import {
    createEditTaskModal
} from "./modal";

import renderTasks from "./renderTasks";
import showAllTasks from "./showAllTasks";

const tasks = [];


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
    let newTaskID = tasks.indexOf(newTask);
    newTask.id = newTaskID;

    console.log(tasks);
}

const deleteTask = (objectID) => {
    tasks[objectID].spliceTask(objectID);
    //update object ID to match current index
    updateObjectID();
    clearContentArea();
    return activeView === "work" ? showCategoryWork(tasks)
        : activeView === "hobby" ? showCategoryHobby(tasks)
        : activeView === "health" ? showCategoryHealth(tasks)
        : activeView === "chore" ? showCategoryChore(tasks)
        : activeView === "dueToday" ? showDueToday(tasks)
        : activeView === "dueWeek" ? showDueWeek(tasks)
        : showAllTasks(tasks);
}

const markTaskComplete = (objectID) => {
    tasks[objectID].toggleStatus(objectID);
    addClassComplete(objectID);
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

const updateObjectID = () => {
tasks.forEach(task => {
    task.id = tasks.indexOf(task);
});
}

export {
    tasks,
    createTask,
    deleteTask,
    markTaskComplete,
    retrieveTaskDetails
}