import {
    toggleDetails
} from "./addClasses";
import showAllTasks from "./showAllTasks";
import {
    showDueToday,
    showDueWeek,
    showCategory
} from "./filteredTasks";
import {
    toggleSidebar
} from "./sidebar";

import {
    deleteTask,
    markTaskComplete,
    retrieveTaskDetails,
} from "./tasks";
import { createNewCategoryModal, toggleNewCatModal } from "./categories";

const activateSidebar = () => {

    const dueToday = (() => {
        const button = document.getElementById("today");
        button.addEventListener("click", function () {
            showDueToday();
            toggleSidebar();
        });
    })();

    const dueOneWeek = (() => {
        const button = document.getElementById("week");
        button.addEventListener("click", function () {
            showDueWeek();
            toggleSidebar();
        });
    })();

    const allTasks = (() => {
        const button = document.getElementById("all");
        button.addEventListener("click", function () {
            showAllTasks();
            toggleSidebar();
        });
    })();

    const allCategories = (() => {
        document.querySelectorAll("[data-category]").forEach(field => { //check!! this attaches an additinal eventlistener everytime a new category is added

            field.addEventListener("click", function() {
                showCategory(this);
                toggleSidebar();
            });
        });
    })();

    const newCategory = (() => {
        const button = document.getElementById("myfloat-new-category");
        button.addEventListener("click", function () {
            createNewCategoryModal();
            toggleSidebar();
        })
    })();

}

const activateButtons = () => {

    const activateDeleteButtons = (() => {
        document.querySelectorAll(".delete-button").forEach(button => {
            button.addEventListener("click", function () {
                deleteTask(button.parentNode.parentNode.id);
            });
        });
    })();

    const activateExpandTaskButton = (() => {
        document.querySelectorAll(".expand-button").forEach(button => {
            button.addEventListener("click", function () {
                toggleDetails(button.parentNode.id);
            });
        });
    })();

    const activateMarkCompleteButtons = (() => {
        document.querySelectorAll(".mark-complete-button").forEach(button => {
            button.addEventListener("click", function () {
                markTaskComplete(button.parentNode.parentNode.id);
            });
        });
    })();

    const activateEditButtons = (() => {
        document.querySelectorAll(".edit-button").forEach(button => {
            button.addEventListener("click", function () {
                retrieveTaskDetails(button.parentNode.parentNode.id);
            });
        });
    })();
}
export {
    activateSidebar,
    activateButtons
}