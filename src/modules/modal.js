import showAllTasks from "./showAllTasks";
import {
    createTask
} from "./tasks";

const createNewTaskModal = () => {

    const modalDiv = document.getElementById("modalContent");

    const modal = document.createElement("div");
    modal.id = "inputModal";
    modal.classList.add("modal");
    modal.classList.add("hidden");

    const closeBtn = document.createElement("div");
    closeBtn.classList.add("close-button");
    closeBtn.onclick = toggleNewTaskModal;
    closeBtn.innerText = "X";

    const wrapper = document.createElement("div");
    wrapper.classList.add("modal-wrapper");

    const heading = document.createElement("h1");
    heading.classList.add("modal-heading");
    heading.innerText = "Enter task details:";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "titleInput";
    titleInput.placeholder = "title";

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "descriptionInput";
    descriptionInput.placeholder = "description";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "datetime-local";
    dueDateInput.id = "dueDateInput";
    dueDateInput.placeholder = "dueDate";

    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.id = "priorityInput";
    priorityInput.placeholder = "priority";

    const notesInput = document.createElement("input");
    notesInput.type = "text";
    notesInput.id = "notesInput";
    notesInput.placeholder = "notes";

    const addBtn = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.classList.add("add-button");
    addBtn.innerText = "save task";
    addBtn.addEventListener("click", () => {
        createTask();
        toggleNewTaskModal();
        showAllTasks();
    });

    modal.appendChild(closeBtn);
    modal.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(titleInput);
    wrapper.appendChild(descriptionInput);
    wrapper.appendChild(dueDateInput);
    wrapper.appendChild(priorityInput);
    wrapper.appendChild(notesInput);
    wrapper.appendChild(addBtn);

    modalDiv.appendChild(modal);
}

const toggleNewTaskModal = () => {
    const getModal = document.getElementById("inputModal");
    getModal.classList.toggle("hidden");
}


export {
    createNewTaskModal,
    toggleNewTaskModal
}