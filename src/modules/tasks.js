import activateButtons from "./buttons";

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

            toogleStatus: function () {
                if (status === "open") {
                    status = "done";
                    return status;
                }
                return status = "open";
            },

            deleteTask: function () {
                tasks.splice(this);
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

const deleteTask = (parentNodeID) => {
    document.getElementById(parentNodeID).remove();
    /* tasks.splice(parentNodeID, 1); */
    tasks[parentNodeID].deleteTask;
    return tasks;
}

export {
    tasks,
    createTask,
    deleteTask
}