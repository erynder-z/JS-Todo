const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarBtn = document.getElementById("showSide");
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("slide");
    });
};

export default toggleSidebar;