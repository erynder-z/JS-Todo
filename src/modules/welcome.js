const contentDiv = document.getElementById("mainContent");

const features =
  "<li>Enter new tasks</li><li>Set a category</li><li>Set a due date</li><li>Expand a tasks details</li><li>Mark a task as complete</li><li>Edit a tasks details</li><li>Remove a saved task</li><li>Show all saved tasks</li><li>Show tasks due today</li><li>Show tasks due within one week</li><li>Filter tasks by category</li><li>Add new categories</li><li>Filter tasks by custom categories</li><li>Delete custom categories</li><li>Search tasks by keyword</li><li>Use different UI for portrait and landscape screens</li><li>Select bright or dark theme</li><li>Save and retain tasks locally via Web Storage API</li><li>Save and retain custom categories locally via Web Storage API and render them on (re-)start</li><li>Create a user account</li><li>Login using email/password</li><li>Save tasks and custom categories online</li><li>Sync data between different devices</li>";

const welcomeScreen = () => {
  const headingContainer = document.createElement("div");
  headingContainer.id = "headingContainer";
  headingContainer.classList.add("heading-container");
  contentDiv.appendChild(headingContainer);

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "Welcome";
  headingContainer.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent =
    "Welcome to JS_todo, an organizer-app written in vanilla JavaScript";

  const list = document.createElement("ul");
  list.classList.add("ul");
  list.textContent = "This app allows you to do the following:";
  const listItem = document.createElement("li");
  listItem.innerHTML = features;
  list.appendChild(listItem);

  const lastParagraph = document.createElement("p");
  lastParagraph.classList.add("paragraph");
  lastParagraph.textContent =
    "User Signup/Login uses a Google Firebase backend.";

  const thanks = document.createElement("h4");
  thanks.classList.add("thanks");
  thanks.textContent = "Thank you very much for trying this app!";

  contentDiv.appendChild(paragraph);
  paragraph.appendChild(list);
  contentDiv.appendChild(lastParagraph);
  contentDiv.appendChild(thanks);
};

export default welcomeScreen;
