import {
    format,
    add,
    isWithinInterval
} from 'date-fns';
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

const showCategoryHobby = () => {
    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Category: Hobby";
    headingContainer.appendChild(heading);

    const sortedTasks = tasks.filter(task => task.category === "hobby");

    renderTasks(sortedTasks);
}

const showCategoryHealth = () => {
    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Category: Health";
    headingContainer.appendChild(heading);

    const sortedTasks = tasks.filter(task => task.category === "health");

    renderTasks(sortedTasks);
}

const showCategoryChore = () => {
    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Category: Chore";
    headingContainer.appendChild(heading);

    const sortedTasks = tasks.filter(task => task.category === "chore");

    renderTasks(sortedTasks);
}

const showDueToday = () => {

    const today = format(new Date(), "yyyy-MM-dd");
    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Due today:";
    headingContainer.appendChild(heading);

    const sortedTasks = tasks.filter(task => task.dueDate === today);

    renderTasks(sortedTasks);
}

const showDueWeek = () => {

    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Due within one week:";
    headingContainer.appendChild(heading);

    const today = format(new Date(), "yyyy-MM-dd");
    const nextWeek = add(new Date(today), {
        days: 7
    });

    const sortedTasks = tasks.filter(task => {
        let check = isWithinInterval(
            new Date(task.dueDate), {
                start: new Date(today),
                end: new Date(nextWeek)
            }
        );
        if (check) {
            return task;
        }
    });

    renderTasks(sortedTasks);
}



export {
    showCategoryWork,
    showCategoryHobby,
    showCategoryHealth,
    showCategoryChore,
    showDueToday,
    showDueWeek
}