import { activateNewCategories, activateSidebar } from "./buttons";
import { createNewTaskModal } from "./modal";
import { populateStorageCategories } from "./storage";

const categories = ["Uncategorized", "Work", "Hobby", "Health", "Chore"];

const createNewCategoryModal = () => {
  const modalDiv = document.getElementById("modalContent");

  const modal = document.createElement("div");
  modal.id = "newCategoryModal";
  modal.classList.add("modal");

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-button");
  closeBtn.onclick = toggleNewCatModal;
  closeBtn.innerText = "X";

  const wrapper = document.createElement("div");
  wrapper.classList.add("modal-wrapper");

  const heading = document.createElement("h1");
  heading.classList.add("modal-heading");
  heading.innerText = "Enter category name:";

  const catInput = document.createElement("input");
  catInput.type = "text";
  catInput.id = "catInput";
  catInput.placeholder = "name (required)";

  const addBtn = document.createElement("button");
  addBtn.id = "addCatBtn";
  addBtn.classList.add("add-button");
  addBtn.innerText = "add category";
  addBtn.addEventListener("click", () => {
    if (!catInput.value) {
      alert("enter a title!");
    } else {
      categories.push(catInput.value);
      toggleNewCatModal();
      appendCategoryToSidebar(catInput.value);
    }
    populateStorageCategories();
  });

  modal.appendChild(closeBtn);
  modal.appendChild(wrapper);
  wrapper.appendChild(heading);
  wrapper.appendChild(catInput);
  wrapper.appendChild(addBtn);
  modalDiv.appendChild(modal);
};

const toggleNewCatModal = () => {
  const getModal = document.getElementById("newCategoryModal");
  getModal.remove();
  createNewTaskModal();
};

const appendCategoryToSidebar = (newCategory) => {
  const getSidebar = document.getElementById("upperSidebar");

  const newCatDiv = document.createElement("div");
  newCatDiv.id = newCategory.toLowerCase();
  newCatDiv.classList.add("side-category");
  newCatDiv.setAttribute("data-category", "");
  newCatDiv.textContent = newCategory;
  getSidebar.appendChild(newCatDiv);

  activateNewCategories(newCatDiv.id);
};

const deleteCustomCategoriesModal = (categoryList) => {
  const modalDiv = document.getElementById("modalContent");

  const modal = document.createElement("div");
  modal.id = "deleteCategoryModal";
  modal.classList.add("modal");

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-button");
  closeBtn.onclick = toggleDeleteCatModal;
  closeBtn.innerText = "X";

  const wrapper = document.createElement("div");
  wrapper.classList.add("modal-wrapper");

  const heading = document.createElement("h1");
  heading.classList.add("modal-heading");
  heading.innerText = "Delete custom categories:";

  modal.appendChild(closeBtn);
  modal.appendChild(wrapper);
  wrapper.appendChild(heading);

  const customCategories = categoryList.slice(5);

  if (customCategories.length > 0) {
    // List all custom categories
    customCategories.forEach((element) => {
      const container = document.createElement("div");
      container.setAttribute("id", categories.indexOf(element));
      container.classList.add("category-container");

      const cat = document.createElement("div");
      cat.classList.add("cat");
      cat.textContent = element;
      container.appendChild(cat);

      const deleteBtn = document.createElement("div");
      deleteBtn.classList.add("delete-cat");
      deleteBtn.textContent = "(delete)";
      deleteBtn.addEventListener("click", () => {
        deleteCat(categories.indexOf(element), element);
      });
      container.appendChild(deleteBtn);
      wrapper.appendChild(container);
    });
  } else {
    const placeholder = document.createElement("p");
    placeholder.textContent = "no custom categories added";
    wrapper.appendChild(placeholder);
  }
  modalDiv.appendChild(modal);
};

const deleteCat = (elementID, element) => {
  categories.splice(elementID, 1);
  populateStorageCategories();
  deleteCategoryFromSidebar(element);
};

const deleteCategoryFromSidebar = (element) => {
  const deleteElement = document.getElementById(element.toLowerCase());
  deleteElement.remove();
  toggleDeleteCatModal();
};

const toggleDeleteCatModal = () => {
  const getModal = document.getElementById("deleteCategoryModal");
  getModal.remove();
};

export {
  categories,
  createNewCategoryModal,
  toggleNewCatModal,
  appendCategoryToSidebar,
  deleteCustomCategoriesModal,
};
