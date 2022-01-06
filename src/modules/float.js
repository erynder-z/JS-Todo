import tasks from "..";
import {
    createTask,
    deleteTask
 } from "./tasks";

const floatMenu = () => {
    let toggleIsHidden = true;
    const toggleFloatNewProject = document.getElementById("myfloat-new-project");
    const toggleFloatNewTask = document.getElementById("myfloat-new-task");
    const toggleFloat = document.getElementById("myfloat");

    toggleFloat.addEventListener("click", () => {
        handleToogle();
    });

    toggleFloatNewProject.addEventListener("click", () => {
        handleToogle();
        deleteTask();
        console.log(tasks);
    });

    toggleFloatNewTask.addEventListener("click", () => {
        handleToogle();
        createTask();
        console.log(tasks);
    });

    function showToggle() {
        toggleFloatNewProject.classList.remove("hidden");
        toggleFloatNewTask.classList.remove("hidden");
    }

    function hideToggle() {
        toggleFloatNewProject.classList.add("hidden");
        toggleFloatNewTask.classList.add("hidden");
    }

    function handleToogle() {
        if (toggleIsHidden == true) {
            showToggle();
            toggleIsHidden = false;
        } else {
            hideToggle();
            toggleIsHidden = true;
        }
    }
}

export default floatMenu;