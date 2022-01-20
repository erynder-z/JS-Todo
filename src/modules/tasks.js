import {
    activeView
} from "./activeView";
import {
    addClassComplete
} from "./addClasses";
import {
    clearContentArea,
} from "./clearContent";
import {
    showCategoryWork,
    showCategoryChore,
    showCategoryHealth,
    showCategoryHobby,
    showDueToday,
    showDueWeek
} from "./filteredTasks";
import {
    createEditTaskModal
} from "./modal";
import showAllTasks from "./showAllTasks";
import { populateStorage } from "./storage";

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
            this.status === "open" ? this.status = "done" : this.status = "open";
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

    let newTask = taskFactory(category.value.toLowerCase(), title.value, description.value, dueDate.value, priority.value, notes.value, "open");
    tasks.push(newTask);
    //Assign ID to task DOM-Element corresponding to it's position in the tasks-array
    let newTaskID = tasks.indexOf(newTask);
    newTask.id = newTaskID;

    populateStorage();
}

const deleteTask = (objectID) => {
    tasks[objectID].spliceTask(objectID);
 
    updateObjectID();
    clearContentArea();
    populateStorage();

    return activeView === "work" ? showCategoryWork(tasks) :
        activeView === "hobby" ? showCategoryHobby(tasks) :
        activeView === "health" ? showCategoryHealth(tasks) :
        activeView === "chore" ? showCategoryChore(tasks) :
        activeView === "dueToday" ? showDueToday(tasks) :
        activeView === "dueWeek" ? showDueWeek(tasks) :
        showAllTasks(tasks);
}

const markTaskComplete = (objectID) => {
    tasks[objectID].toggleStatus();
    addClassComplete(objectID);
    console.log(tasks);
    populateStorage();
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

//Update task DOM Element ID, when the tasks-array is modified
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