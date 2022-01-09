import renderTasks from "./renderTasks";
import {
    deleteTask,
    markTaskComplete,
    retrieveTaskDetails,
} from "./tasks";

const activateButtons = () => {

    const activateDeleteButtons = () => {
        document.querySelectorAll(".delete-button").forEach(button => {
            button.addEventListener("click", function () {
                deleteTask(button.parentNode.id);
            });
        });
    }

    const activateMarkCompleteButtons = () => {
        document.querySelectorAll(".mark-complete-button").forEach(button => {
            button.addEventListener("click", function () {
                markTaskComplete(button.parentNode.id);
            });
        });
    }

    const activateEditButtons = () => {
        document.querySelectorAll(".edit-button").forEach(button => {
            button.addEventListener("click", function () {
                retrieveTaskDetails(button.parentNode.id);
            });
        });
    }
    activateDeleteButtons();
    activateMarkCompleteButtons();
    activateEditButtons();
}
export default activateButtons