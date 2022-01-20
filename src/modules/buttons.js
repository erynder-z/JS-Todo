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
import {
    categories,
    createNewCategoryModal,
    deleteCustomCategoriesModal
} from "./categories";
import {
    createSearchModal
} from "./modal";

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

    const defaultCategories = (() => {
        document.querySelectorAll("[data-category]").forEach(field => {

            field.addEventListener("click", function () {
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
        });
    })();

    const deleteCategoryBtn = (() => {
        const button = document.getElementById("manageCustomCategories");
        button.addEventListener("click", function () {
            deleteCustomCategoriesModal(categories);
        });
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

const activateNav = () => {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", function () {
        createSearchModal()
    });
}

const activateNewCategories = (elementID) => {
    const catElement = document.getElementById(elementID);
    if (catElement !== null) {
        catElement.addEventListener("click", function () {
            showCategory(this);
            toggleSidebar();
        });
    }
    return
}


export {
    activateSidebar,
    activateButtons,
    activateNewCategories,
    activateNav
}