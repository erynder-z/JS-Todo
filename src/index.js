import "./normalize.css";
import "./style.css";

import { async } from "regenerator-runtime/runtime";
import floatMenu from "./modules/float";
import { createNewTaskModal } from "./modules/modal";
import { activateNav, activateSidebar } from "./modules/buttons";
import { toggleSidebarNav } from "./modules/sidebar";
import { clearMainContent } from "./modules/clearContent";
import welcomeScreen from "./modules/welcome";
import switchTheme from "./modules/darkmode";
import { retrieveStorage, retrieveStorageCategories } from "./modules/storage";
import { firebaseAuthentication } from "./modules/authentication";

const loginModal = document.querySelector(".login-modal-overlay");
const offlineBtn = document.getElementById("offlineBtn");
const btnLogout = document.getElementById("btnLogout");

let mode = "";

const startOffline = () => {
  mode = "offline";
  clearMainContent();
  retrieveStorage();
  retrieveStorageCategories();
  welcomeScreen();
  btnLogout.classList.add("hidden");
};

const startOnline = () => {
  mode = "online";
  clearMainContent();
  welcomeScreen();
};

offlineBtn.addEventListener("click", () => {
  loginModal.classList.add("hidden");
  startOffline();
});

const start = (() => {
  activateNav();
  toggleSidebarNav();
  activateSidebar();
  floatMenu();
  createNewTaskModal();
  switchTheme();
  firebaseAuthentication();
})();

export { startOnline, mode };
