import "./normalize.css";
import "./style.css";
import toggleSidebar from "./modules/sidebar";
import floatMenu from "./modules/float";
import createTask from "./modules/tasks";
import { tasks } from "./modules/tasks";
import {createModal, toggleModal} from "./modules/modal";


toggleSidebar();
floatMenu();
createModal();

export default tasks
