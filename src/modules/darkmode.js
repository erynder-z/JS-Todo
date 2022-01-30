const switchTheme = () => {
  const darkMode = (() => {
    const toggleDarkmode = document.getElementById("toggleDarkmode");
    toggleDarkmode.addEventListener("click", () => {
      changeTheme();
    });
  })();

  const changeTheme = () => {
    document.body.classList.toggle("darkmode");
  };
};

export default switchTheme;
