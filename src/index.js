import "./normalize.css";
import "./style.css";

const sidebar = document.getElementById("sidebar");
const sidebarBtn = document.getElementById("showSide");

const toggleSidebar = (() => {
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("slide");
    });
})();
