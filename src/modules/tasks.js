import activateButtons from "./buttons";

const tasks = [];

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
                console.log("delete Task!");
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
    tasks.splice(parentNodeID, 1);
    return tasks;
}

export {
    tasks,
    createTask,
    deleteTask
}