import "./normalize.css";
import "./style.css";
import floatMenu from "./modules/float";
import {
    createNewTaskModal,
} from "./modules/modal";
import showAllTasks from "./modules/showAllTasks";
import {
    activateNav,
    activateSidebar
} from "./modules/buttons";
import {
    toggleSidebarNav
} from "./modules/sidebar";
import { retrieveStorage } from "./modules/storage";

retrieveStorage();
activateNav();
toggleSidebarNav();
activateSidebar();
floatMenu();
createNewTaskModal();

/* showAllTasks(); */
