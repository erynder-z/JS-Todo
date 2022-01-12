import { toggleDetails } from "./addClasses";
import {
    deleteTask,
    markTaskComplete,
    retrieveTaskDetails,
} from "./tasks";

const activateButtons = () => {

    const activateDeleteButtons = () => {
        document.querySelectorAll(".delete-button").forEach(button => {
            button.addEventListener("click", function () {
                deleteTask(button.parentNode.parentNode.id);
            });
        });
    }

    const activateExpandTaskButton = () => {
        document.querySelectorAll(".expand-button").forEach(button => {
            button.addEventListener("click", function () {
                toggleDetails(button.parentNode.id);
            });
        });
    }

    const activateMarkCompleteButtons = () => {
        document.querySelectorAll(".mark-complete-button").forEach(button => {
            button.addEventListener("click", function () {
                markTaskComplete(button.parentNode.parentNode.id);
            });
        });
    }

    const activateEditButtons = () => {
        document.querySelectorAll(".edit-button").forEach(button => {
            button.addEventListener("click", function () {
                retrieveTaskDetails(button.parentNode.parentNode.id);
            });
        });
    }

    activateDeleteButtons();
    activateExpandTaskButton();
    activateMarkCompleteButtons();
    activateEditButtons();
}
export default activateButtons