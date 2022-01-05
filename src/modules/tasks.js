import tasks from "../index";

const manageTasks = () => {

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

    let newTask = taskFactory("Titel", "Beschreibung", "Morgen", "Hoch", "Notiz", "offen");

    tasks.push(newTask);
    console.log(tasks);
}

export default manageTasks