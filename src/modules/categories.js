import { createNewTaskModal } from "./modal";

const categories = ["Uncategorized", "Work", "Hobby", "Health", "Chore"];



const createNewCategoryModal = () => {
    const modalDiv = document.getElementById("modalContent");

    const modal = document.createElement("div");
    modal.id = "newCategoryModal";
    modal.classList.add("modal");
   /*  modal.classList.add("hidden"); */

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
        if ((!catInput.value)) {
            alert("enter a title!");
        } else {
            categories.push(catInput.value);
            console.log(categories);
            toggleNewCatModal();
        }
    });

    modal.appendChild(closeBtn);
    modal.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(catInput);
    wrapper.appendChild(addBtn);

    modalDiv.appendChild(modal);
}

const toggleNewCatModal = () => {
    const getModal = document.getElementById("newCategoryModal");
    getModal.remove();
    createNewTaskModal();
}

export {categories, createNewCategoryModal, toggleNewCatModal}