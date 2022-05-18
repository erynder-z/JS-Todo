import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";

import { appendCategoryToSidebar, categories } from "./categories";
import { tasks } from "./tasks";
import { currentUser } from "./authentication";

const firebaseConfig = {
  apiKey: "AIzaSyAl8gtz0i_XnGFuN5GSi4PC3gG8mrm1O1Q",
  authDomain: "js-todo-23ba4.firebaseapp.com",
  projectId: "js-todo-23ba4",
  storageBucket: "js-todo-23ba4.appspot.com",
  messagingSenderId: "836500768142",
  appId: "1:836500768142:web:22e2ba5b6092fd3a7bd0df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

connectFirestoreEmulator(db, "localhost", 8080);

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

async function populateStorageFirebase() {
  const storageString = JSON.stringify(tasks);
  const userID = String(currentUser.uid);

  try {
    await setDoc(doc(db, "todos", userID), {
      tasks: storageString,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function retrieveStorageFirebase() {
  const userID = String(currentUser.uid);
  const docRef = doc(db, "todos", userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const retrievedStorageString = docSnap.data().tasks;
    const storageData = JSON.parse(retrievedStorageString) || [];
    mapData(storageData);
  } else {
    console.log("No such document!");
  }
}

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

async function populateStorageCategoriesFirebase() {
  const storageString = JSON.stringify(categories);
  const userID = String(currentUser.uid);

  try {
    await setDoc(doc(db, "categories", userID), {
      categories: storageString,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function retrieveStorageCategoriesFirebase() {
  const userID = String(currentUser.uid);
  const docRef = doc(db, "categories", userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const retrievedStorageString = docSnap.data().categories;
    const storageData = JSON.parse(retrievedStorageString) || [];
    mapDataCategories(storageData);
  } else {
    console.log("No such document!");
  }
}

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
  populateStorageFirebase,
  retrieveStorageFirebase,
  populateStorageCategoriesFirebase,
  retrieveStorageCategoriesFirebase,
};
