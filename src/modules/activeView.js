let activeView

//retain the currently selected filter for the main content
const setActiveView = (mode) => {
    activeView = mode;
    console.log(activeView.id);
}

export {
    activeView,
    setActiveView
}