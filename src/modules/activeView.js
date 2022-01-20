let activeView

//retain the currently selected filter for the main content
const setActiveView = (mode) => {
    activeView = mode;
}

export {
    activeView,
    setActiveView
}