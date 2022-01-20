import { appendCategoryToSidebar, categories } from "./categories";
import {
    tasks
} from "./tasks";

let storageData;

// recreate tasks via factory function after JSON is retrieved from localstorage
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


const populateStorage = () => {
    let storageString = JSON.stringify(tasks);
    localStorage.setItem("localTodos", storageString);
}

const retrieveStorage = () => {
    let retrievedStorageString = localStorage.getItem("localTodos");
    storageData = JSON.parse(retrievedStorageString) || [];
    mapData(storageData);
}

const mapData = (storageData) => {

    let data = storageData;
    data.forEach(item => {
        item = taskFactory(item.category.toLowerCase(), item.title, item.description, item.dueDate, item.priority, item.notes, item.status);

        tasks.push(item);
        let newTaskID = tasks.indexOf(item);
        item.id = newTaskID;
    });
}

const populateStorageCategories = () => {
    let storageString = JSON.stringify(categories);
    localStorage.setItem("localCategories", storageString);
}

const retrieveStorageCategories = () => {
    let retrievedStorageString = localStorage.getItem("localCategories");
    storageData = JSON.parse(retrievedStorageString) || [];
    mapDataCategories(storageData);
}

const mapDataCategories = (storageData) => {
    let data = storageData;
    data.forEach(item => {
        if (!(categories.includes(item))) {
            categories.push(item);
            appendCategoryToSidebar(item);
        }
    });
}

export {
    populateStorage,
    retrieveStorage,
    populateStorageCategories,
    retrieveStorageCategories
}