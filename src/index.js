import "./normalize.css";
import "./style.css";
import toggleSidebar from "./modules/sidebar"
import floatMenu from "./modules/float";


const initialize = (() => {
    toggleSidebar();
    floatMenu();
})();


