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
    activateDeleteButtons();
}
export default activateButtons