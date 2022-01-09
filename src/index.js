import "./normalize.css";
import "./style.css";
import toggleSidebar from "./modules/sidebar";
import floatMenu from "./modules/float";
import {
    tasks,
} from "./modules/tasks";
import {
    createNewTaskModal,
} from "./modules/modal";
import showAllTasks from "./modules/showAllTasks";



toggleSidebar();
floatMenu();
createNewTaskModal();

showAllTasks();

export default tasks
