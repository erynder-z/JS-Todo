import {
  toggleNewTaskModal,
} from './modal';

const floatMenu = () => {
  let toggleIsHidden = true;
  const toggleFloatNewCategory = document.getElementById('myfloat-new-category');
  const toggleFloatNewTask = document.getElementById('myfloat-new-task');
  const toggleFloat = document.getElementById('myfloat');

  toggleFloat.addEventListener('click', () => {
    handleToogle();
  });

  toggleFloatNewCategory.addEventListener('click', () => {
    handleToogle();
  });

  toggleFloatNewTask.addEventListener('click', () => {
    handleToogle();
    toggleNewTaskModal();
  });

  function showToggle() {
    toggleFloatNewCategory.classList.remove('hidden');
    toggleFloatNewTask.classList.remove('hidden');
  }

  function hideToggle() {
    toggleFloatNewCategory.classList.add('hidden');
    toggleFloatNewTask.classList.add('hidden');
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
};

export default floatMenu;
