const {format} = require('date-fns');
import showAllTasks from "./showAllTasks";
import {
    tasks,
    createTask,
    modifyTask
} from "./tasks";

const today = format(new Date(),"yyyy-MM-dd");

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

    const categoryLabel = document.createElement("label");
    categoryLabel.for = "category";
    categoryLabel.textContent = "Select a category:";
    const categoryInput = document.createElement("select");
    categoryInput.name = "category";
    categoryInput.id = "categoryInput";
    const uncategorized = document.createElement("option");
    uncategorized.value = "uncategorized";
    uncategorized.textContent = "uncategorized";
    const work = document.createElement("option");
    work.value = "work";
    work.textContent = "work";
    const hobby = document.createElement("option");
    hobby.value = "hobby";
    hobby.textContent = "hobby";
    const health = document.createElement("option");
    health.value = "health";
    health.textContent = "health";
    const chore = document.createElement("option");
    chore.value = "chore";
    chore.textContent = "chore";

    const heading = document.createElement("h1");
    heading.classList.add("modal-heading");
    heading.innerText = "Enter task details:";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "titleInput";
    titleInput.placeholder = "title (required)";

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "descriptionInput";
    descriptionInput.placeholder = "description";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "dueDateInput";
    dueDateInput.value = today;

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

    const notesInput = document.createElement("textarea");
    notesInput.id = "notesInput";
    notesInput.placeholder = "notes";
    notesInput.rows = "4";
    

    const addBtn = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.classList.add("add-button");
    addBtn.innerText = "save task";
    addBtn.addEventListener("click", () => {
        if ((!titleInput.value)) {
            alert("enter a title!");
        } else {
            createTask();
            toggleNewTaskModal(categoryInput, titleInput, descriptionInput, dueDateInput, priorityInput, notesInput);
            showAllTasks();
        }
    });

    modal.appendChild(closeBtn);
    modal.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(categoryLabel);
    wrapper.appendChild(categoryInput);
    categoryInput.appendChild(uncategorized);
    categoryInput.appendChild(work);
    categoryInput.appendChild(hobby);
    categoryInput.appendChild(health);
    categoryInput.appendChild(chore);
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

const toggleNewTaskModal = (categoryInput, titleInput, descriptionInput, dueDateInput, priorityInput, notesInput) => {
    const getModal = document.getElementById("inputModal");
    getModal.classList.toggle("hidden");
    if (categoryInput) {categoryInput.value = "uncategorized"};
    if (titleInput) {titleInput.value = ""};
    if (descriptionInput) {descriptionInput.value = ""};
    if (dueDateInput) {dueDateInput.value = today};
    if (priorityInput) {priorityInput.value = "high"};
    if (notesInput) {notesInput.value = ""};
}


const createEditTaskModal = (objectID, currentCategory, currentTitle, currentDescription, currentDueDate, currentPriority, currentNotes) => {
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

    const categoryLabel = document.createElement("label");
    categoryLabel.for = "category";
    categoryLabel.textContent = "Select a category:";
    const categoryInput = document.createElement("select");
    categoryInput.name = "category";
    categoryInput.id = "categoryInput";
    const uncategorized = document.createElement("option");
    uncategorized.value = "uncategorized";
    uncategorized.textContent = "uncategorized";
    const work = document.createElement("option");
    work.value = "work";
    work.textContent = "work";
    const hobby = document.createElement("option");
    hobby.value = "hobby";
    hobby.textContent = "hobby";
    const health = document.createElement("option");
    health.value = "health";
    health.textContent = "health";
    const chore = document.createElement("option");
    chore.value = "chore";
    chore.textContent = "chore";

    if(currentCategory === "work") {
        work.selected = true;
    } else if (currentCategory === "hobby") {
        hobby.selected = true;
    } else if (currentCategory === "health") {
        health.selected = true;
    } else if (currentCategory === "chore") {
        chore.selected = true;
    } else {
        uncategorized.selected = true;
    }


    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "titleInput";
    titleInput.value = currentTitle;

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "descriptionInput";
    descriptionInput.value = currentDescription;

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "dueDateInput";
    dueDateInput.value = currentDueDate;

/*     const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.id = "priorityInput";
    priorityInput.value = currentPriority; */

    const priorityLabel = document.createElement("label");
    priorityLabel.for = "priority";
    priorityLabel.textContent = "Choose priority:";
    const priorityInput = document.createElement("select");
    priorityInput.name = "priority";
    priorityInput.id = "priorityInput";
    /* priorityInput.value = currentPriority; */
    const highPriority = document.createElement("option");
    highPriority.value = "high";
    highPriority.textContent = "high"; 
    const mediumPriority = document.createElement("option");
    mediumPriority.value = "medium";
    mediumPriority.textContent = "medium"; 
    const lowPriority = document.createElement("option");
    lowPriority.value = "low";
    lowPriority.textContent = "low"; 
    
    if(currentPriority === "high") {
        highPriority.selected = true;
    } else if (currentPriority === "medium") {
        mediumPriority.selected = true;
    } else {
        lowPriority.selected = true;
    } 

   

    const notesInput = document.createElement("textarea");
    notesInput.id = "notesInput";
    notesInput.value = currentNotes;
    notesInput.rows = "4";

    const addBtn = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.classList.add("add-button");
    addBtn.innerText = "save task";

    addBtn.addEventListener("click", () => {
        tasks[objectID].editProperties(categoryInput.value, titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value);
        toggleEditTaskModal();
        showAllTasks();
    });

    modal.appendChild(closeBtn);
    modal.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(categoryLabel);
    wrapper.appendChild(categoryInput);
    categoryInput.appendChild(uncategorized);
    categoryInput.appendChild(work);
    categoryInput.appendChild(hobby);
    categoryInput.appendChild(health);
    categoryInput.appendChild(chore);
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

const toggleEditTaskModal = () => {
    const getModal = document.getElementById("editModal");
    getModal.remove();
}


export {
    createNewTaskModal,
    toggleNewTaskModal,
    createEditTaskModal
}