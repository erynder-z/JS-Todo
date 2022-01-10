import showAllTasks from "./showAllTasks";
import {
    tasks,
    createTask,
    modifyTask
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

/*     const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.id = "priorityInput";
    priorityInput.placeholder = "priority"; */

    const priorityLabel = document.createElement("label");
    priorityLabel.for = "priority";
    priorityLabel.textContent = "Choose priority:";
    const priorityInput = document.createElement("select");
    priorityInput.name = "priority";
    priorityInput.id = "priorityInput";
    const highPriority = document.createElement("option");
    highPriority.value = "high";
    highPriority.textContent = "high"; 
    const mediumPriority = document.createElement("option");
    mediumPriority.value = "medium";
    mediumPriority.textContent = "medium"; 
    const lowPriority = document.createElement("option");
    lowPriority.value = "low";
    lowPriority.textContent = "low"; 

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
    /* wrapper.appendChild(priorityInput); */
    wrapper.appendChild(priorityLabel);
    wrapper.appendChild(priorityInput);
    priorityInput.appendChild(highPriority);
    priorityInput.appendChild(mediumPriority);
    priorityInput.appendChild(lowPriority);
    wrapper.appendChild(notesInput);
    wrapper.appendChild(addBtn);

    modalDiv.appendChild(modal);
}

const toggleNewTaskModal = () => {
    const getModal = document.getElementById("inputModal");
    getModal.classList.toggle("hidden");
}


const createEditTaskModal = (objectID, currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes) => {
    const modalDiv = document.getElementById("modalContent");

    const modal = document.createElement("div");
    modal.id = "editModal";
    modal.classList.add("modal");
    /* modal.classList.add("hidden"); */

    const closeBtn = document.createElement("div");
    closeBtn.classList.add("close-button");
    closeBtn.onclick = toggleEditTaskModal;
    closeBtn.innerText = "X";

    const wrapper = document.createElement("div");
    wrapper.classList.add("modal-wrapper");

    const heading = document.createElement("h1");
    heading.classList.add("modal-heading");
    heading.innerText = "Edit details:";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "titleInput";
    titleInput.value = currentTitle;

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "descriptionInput";
    descriptionInput.value = currentDescription;

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "datetime-local";
    dueDateInput.id = "dueDateInput";
    dueDateInput.value = currentDueDate;

    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.id = "priorityInput";
    priorityInput.value = currentPriority;

    const notesInput = document.createElement("input");
    notesInput.type = "text";
    notesInput.id = "notesInput";
    notesInput.value = currentNotes;

    const addBtn = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.classList.add("add-button");
    addBtn.innerText = "save task";

    addBtn.addEventListener("click", () => {
        tasks[objectID].editProperties(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value);
        toggleEditTaskModal();
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

const toggleEditTaskModal = () => {
    const getModal = document.getElementById("editModal");
    getModal.remove();
}


export {
    createNewTaskModal,
    toggleNewTaskModal,
    createEditTaskModal
}