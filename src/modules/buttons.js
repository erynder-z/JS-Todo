import {
    deleteTask
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
        document.querySelectorAll("mark-complete-button").forEach(button => {
            button-addEventListener("click", function () {
                markTaskComplete(button.parentNode.id);
            }) 
        })
    }
    activateDeleteButtons();
    activateMarkCompleteButtons();
}
export default activateButtons