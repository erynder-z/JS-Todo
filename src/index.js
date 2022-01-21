import './normalize.css';
import './style.css';
import floatMenu from './modules/float';
import {
  createNewTaskModal,
} from './modules/modal';
import {
  activateNav,
  activateSidebar,
} from './modules/buttons';
import {
  toggleSidebarNav,
} from './modules/sidebar';
import {
  retrieveStorage, retrieveStorageCategories,
} from './modules/storage';
import welcomeScreen from './modules/welcome';
import switchTheme from './modules/darkmode';

const startApp = (() => {
  retrieveStorage();
  retrieveStorageCategories();
  activateNav();
  toggleSidebarNav();
  activateSidebar();
  floatMenu();
  createNewTaskModal();
  switchTheme();
  welcomeScreen();
})();
