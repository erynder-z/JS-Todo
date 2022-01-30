import { appendCategoryToSidebar, categories } from "./categories";
import { tasks } from "./tasks";

let storageData;

// recreate tasks via factory function after JSON is retrieved from localstorage
const taskFactory = (
  category,
  title,
  description,
  dueDate,
  priority,
  notes,
  status
) => ({
  category,
  title,
  description,
  dueDate,
  priority,
  notes,
  status,

  toggleStatus() {
    this.status === "open" ? (this.status = "done") : (this.status = "open");
  },

  spliceTask(objectID) {
    tasks.splice(objectID, 1);
  },

  editProperties(
    currentCategory,
    currentTitle,
    currentDescription,
    currentDueDate,
    currentPriority,
    currentNotes
  ) {
    this.category = currentCategory;
    this.title = currentTitle;
    this.description = currentDescription;
    this.dueDate = currentDueDate;
    this.priority = currentPriority;
    this.notes = currentNotes;
  },
});

const populateStorage = () => {
  const storageString = JSON.stringify(tasks);
  localStorage.setItem("localTodos", storageString);
};

const retrieveStorage = () => {
  const retrievedStorageString = localStorage.getItem("localTodos");
  storageData = JSON.parse(retrievedStorageString) || [];
  mapData(storageData);
};

const mapData = (storageData) => {
  const data = storageData;
  data.forEach((item) => {
    item = taskFactory(
      item.category.toLowerCase(),
      item.title,
      item.description,
      item.dueDate,
      item.priority,
      item.notes,
      item.status
    );

    tasks.push(item);
    const newTaskID = tasks.indexOf(item);
    item.id = newTaskID;
  });
};

const populateStorageCategories = () => {
  const storageString = JSON.stringify(categories);
  localStorage.setItem("localCategories", storageString);
};

const retrieveStorageCategories = () => {
  const retrievedStorageString = localStorage.getItem("localCategories");
  storageData = JSON.parse(retrievedStorageString) || [];
  mapDataCategories(storageData);
};

const mapDataCategories = (storageData) => {
  const data = storageData;
  data.forEach((item) => {
    if (!categories.includes(item)) {
      categories.push(item);
      appendCategoryToSidebar(item);
    }
  });
};

export {
  populateStorage,
  retrieveStorage,
  populateStorageCategories,
  retrieveStorageCategories,
};
