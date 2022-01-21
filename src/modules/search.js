import { setActiveView } from "./activeView";
import { clearMainContent } from "./clearContent";
import renderTasks from "./renderTasks";
import { tasks } from "./tasks";

const searchTasks = () => {
    clearMainContent();

    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    const contentDiv = document.getElementById("mainContent");

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = `Search results for "${searchTerm}": `;
    headingContainer.appendChild(heading);


    const filterItems = (task) => {
        return (JSON.stringify(task).toLocaleLowerCase().includes(searchTerm));
      }
   const searchedTasks = tasks.filter(filterItems);

   renderTasks(searchedTasks);
   setActiveView("search-result");
}

export default searchTasks