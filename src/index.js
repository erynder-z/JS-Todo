import "./normalize.css";
import "./style.css";
import toggleSidebar from "./modules/sidebar"


const initialize = (() => {
    toggleSidebar();
})();


let toggleIsHidden = true;
const toggleFloatToTop = document.getElementById("myfloat-new-project");
const toggleFloatContact = document.getElementById("myfloat-new-task");
const toggleFloat = document.getElementById("myfloat");

toggleFloat.addEventListener("click", () => {
    handleToogle();
});

toggleFloatToTop.addEventListener("click", () => {
    handleToogle();
});

toggleFloatContact.addEventListener("click", () => {
    handleToogle();
});

function showToggle() {
    toggleFloatToTop.classList.remove("hidden");
    toggleFloatContact.classList.remove("hidden");
}

function hideToggle() {
    toggleFloatToTop.classList.add("hidden");
    toggleFloatContact.classList.add("hidden");
}

function handleToogle() {
    if (toggleIsHidden == true) {
        showToggle();
        toggleIsHidden = false;
    } else {
        hideToggle();
        toggleIsHidden = true;
    }
}