// Slide functionality for portrait-view screens
const toggleSidebarNav = () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarBtn = document.getElementById('showSide');
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('slide');
    document.getElementById('toggleSide').classList.toggle('expanded');
  });
};

const toggleSidebar = () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('slide');
};

export {
  toggleSidebarNav,
  toggleSidebar,
};
