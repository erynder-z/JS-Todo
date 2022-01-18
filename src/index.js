import "./normalize.css";
import "./style.css";
import floatMenu from "./modules/float";
import {
    createNewTaskModal,
} from "./modules/modal";
import {
    activateNav,
    activateSidebar
} from "./modules/buttons";
import {
    toggleSidebarNav
} from "./modules/sidebar";
import {
    retrieveStorage
} from "./modules/storage";
import welcomeScreen from "./modules/welcome";


const startApp = (() => {
    retrieveStorage();
    activateNav();
    toggleSidebarNav();
    activateSidebar();
    floatMenu();
    createNewTaskModal();
    welcomeScreen();
})();
