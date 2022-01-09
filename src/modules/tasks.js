import activateButtons from "./buttons";
import clearMainContent from "./clearContent";
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

/*             toggleStatus: function () {
                tasks[this].status = "done";
                console.log("test"); //something
            }, */

            deleteTask: function (objectID) {
                tasks.splice(objectID, 1);
            }
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
    tasks[objectID].deleteTask(objectID);
    clearMainContent();
    renderTasks();
    return tasks;
}

/* const markTaskComplete = (objectID) => {
    tasks[objectID].toggleStatus;
    return tasks;
} */

export {
    tasks,
    createTask,
    deleteTask,
   /*  markTaskComplete */
}