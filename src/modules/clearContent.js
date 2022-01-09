const clearMainContent = () => {
    const contentDiv = document.getElementById("mainContent");
    contentDiv.innerHTML = "";
}

const clearContentArea = () => {
    const contentArea = document.querySelector(".taskList-container");
    contentArea.innerHTML = "";
}

export {
    clearMainContent,
    clearContentArea
}