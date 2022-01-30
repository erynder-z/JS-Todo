import { format } from "date-fns";
import { categories } from "./categories";
import searchTasks from "./search";
import showAllTasks from "./showAllTasks";
import { populateStorage } from "./storage";
import { tasks, createTask } from "./tasks";

const today = format(new Date(), "yyyy-MM-dd");

const createNewTaskModal = () => {
  const modalDiv = document.getElementById("modalContent");
  modalDiv.innerHTML = "";

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

  for (let i = 0; i < categories.length; i++) {
    const opt = categories[i];
    const el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    categoryInput.appendChild(el);
  }

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
    if (!titleInput.value) {
      alert("enter a title!");
    } else {
      createTask();
      toggleNewTaskModal(
        categoryInput,
        titleInput,
        descriptionInput,
        dueDateInput,
        priorityInput,
        notesInput
      );
      showAllTasks();
    }
  });

  modal.appendChild(closeBtn);
  modal.appendChild(wrapper);
  wrapper.appendChild(heading);
  wrapper.appendChild(categoryLabel);
  wrapper.appendChild(categoryInput);
  wrapper.appendChild(titleInput);
  wrapper.appendChild(descriptionInput);
  wrapper.appendChild(dueDateInput);
  wrapper.appendChild(priorityLabel);
  wrapper.appendChild(priorityInput);
  priorityInput.appendChild(highPriority);
  priorityInput.appendChild(mediumPriority);
  priorityInput.appendChild(lowPriority);
  wrapper.appendChild(notesInput);
  wrapper.appendChild(addBtn);

  modalDiv.appendChild(modal);
};

const toggleNewTaskModal = (
  categoryInput,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  notesInput
) => {
  const getModal = document.getElementById("inputModal");
  getModal.classList.toggle("hidden");
  if (categoryInput) {
    categoryInput.value = categories[0];
  }
  if (titleInput) {
    titleInput.value = null;
  }
  if (descriptionInput) {
    descriptionInput.value = null;
  }
  if (dueDateInput) {
    dueDateInput.value = today;
  }
  if (priorityInput) {
    priorityInput.value = "high";
  }
  if (notesInput) {
    notesInput.value = null;
  }
};

const createEditTaskModal = (
  objectID,
  currentCategory,
  currentTitle,
  currentDescription,
  currentDueDate,
  currentPriority,
  currentNotes
) => {
  const modalDiv = document.getElementById("modalContent");

  const modal = document.createElement("div");
  modal.id = "editModal";
  modal.classList.add("modal");

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

  // create dropdown menu with selections from categories array
  for (let i = 0; i < categories.length; i++) {
    const opt = categories[i];
    const el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    categoryInput.appendChild(el);
  }

  // set default selection to currentCategory
  const setSelectedIndex = (selection, value) => {
    for (let i = 0; i < selection.options.length; i++) {
      if (selection.options[i].text.toLowerCase() == value) {
        selection.options[i].selected = true;
        return;
      }
    }
  };
  setSelectedIndex(categoryInput, currentCategory);

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

  if (currentPriority === "high") {
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
    if (titleInput.value === "") {
      alert("enter a title!");
    } else {
      tasks[objectID].editProperties(
        categoryInput.value.toLowerCase(),
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        priorityInput.value,
        notesInput.value
      );
      populateStorage();
      toggleEditTaskModal();
      showAllTasks();
    }
  });

  modal.appendChild(closeBtn);
  modal.appendChild(wrapper);
  wrapper.appendChild(heading);
  wrapper.appendChild(categoryLabel);
  wrapper.appendChild(categoryInput);
  wrapper.appendChild(titleInput);
  wrapper.appendChild(descriptionInput);
  wrapper.appendChild(dueDateInput);
  wrapper.appendChild(priorityLabel);
  wrapper.appendChild(priorityInput);
  priorityInput.appendChild(highPriority);
  priorityInput.appendChild(mediumPriority);
  priorityInput.appendChild(lowPriority);
  wrapper.appendChild(notesInput);
  wrapper.appendChild(addBtn);

  modalDiv.appendChild(modal);
};

const toggleEditTaskModal = () => {
  const getModal = document.getElementById("editModal");
  getModal.remove();
};

const createSearchModal = () => {
  const modalDiv = document.getElementById("modalContent");

  const modal = document.createElement("div");
  modal.id = "searchModal";
  modal.classList.add("modal");

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-button");
  closeBtn.onclick = toggleSearchModal;
  closeBtn.innerText = "X";

  const wrapper = document.createElement("div");
  wrapper.classList.add("modal-wrapper");

  const heading = document.createElement("h1");
  heading.classList.add("modal-heading");
  heading.innerText = "Search for task:";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "searchInput";
  searchInput.placeholder = "term (required)";

  const addBtn = document.createElement("button");
  addBtn.id = "addCatBtn";
  addBtn.classList.add("add-button");
  addBtn.innerText = "Search";
  addBtn.addEventListener("click", () => {
    if (!searchInput.value) {
      alert("enter a search term!");
    } else {
      searchTasks();
      toggleSearchModal();
    }
  });

  modal.appendChild(closeBtn);
  modal.appendChild(wrapper);
  wrapper.appendChild(heading);
  wrapper.appendChild(searchInput);
  wrapper.appendChild(addBtn);

  modalDiv.appendChild(modal);
};

const toggleSearchModal = () => {
  const getModal = document.getElementById("searchModal");
  getModal.remove();
};

export {
  createNewTaskModal,
  toggleNewTaskModal,
  createEditTaskModal,
  createSearchModal,
};
