const addClassComplete = (objectID) => {
    document.getElementById(objectID).classList.toggle("complete");
}

//show/hide task details when expanded/collapsed
const toggleDetails = (objectID) => {
    const parentNode = document.getElementById(objectID);
    parentNode.classList.toggle("expand");

    const childCategory = parentNode.getElementsByClassName("task-category");
    childCategory[0].classList.toggle("hidden");

    const childDescription = parentNode.getElementsByClassName("description-wrapper");
    if (childDescription[0]) {
        childDescription[0].classList.toggle("hidden");
    }

    const childPriority = parentNode.getElementsByClassName("priority-wrapper");
    childPriority[0].classList.toggle("hidden");

    const childNotes = parentNode.getElementsByClassName("notes-wrapper");
    if (childNotes[0]) {
        childNotes[0].classList.toggle("hidden");
    }
}


export {
    addClassComplete,
    toggleDetails
}