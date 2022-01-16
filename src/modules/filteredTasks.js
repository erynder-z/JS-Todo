import {
    format,
    add,
    isWithinInterval
} from 'date-fns';
import {
    setActiveView
} from './activeView';

import {
    clearMainContent
} from "./clearContent";
import renderTasks from "./renderTasks";
import {
    tasks
} from "./tasks";

const contentDiv = document.getElementById("mainContent");


const showCategory = (element) => {
    clearMainContent();

    const headingContainer = document.createElement("div");
    headingContainer.id = "headingContainer"
    headingContainer.classList.add("heading-container");
    contentDiv.appendChild(headingContainer);

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = `Category: ${element.textContent}`;
    headingContainer.appendChild(heading);

    const searchItem = element.id;
    const sortedTasks = tasks.filter(task => task.category === searchItem);

    renderTasks(sortedTasks);
    setActiveView("element.id");
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
    setActiveView("dueToday");
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
    setActiveView("dueWeek");
}



export {
    showDueToday,
    showDueWeek,
    showCategory
}