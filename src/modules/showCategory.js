import {
    clearMainContent
} from "./clearContent";
import renderTasks from "./renderTasks";
import {
    tasks
} from "./tasks";

const contentDiv = document.getElementById("mainContent");

const showCategoryWork = () => {
    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Category: Work";
    headingContainer.appendChild(heading);

    const sortedTasks = tasks.filter(task => task.category === "work");

    renderTasks(sortedTasks);
}

export {
    showCategoryWork
}