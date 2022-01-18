import {
    tasks
} from "./tasks";

let storageData;

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
        console.log(tasks);
    });
}

export {
    populateStorage,
    retrieveStorage
}