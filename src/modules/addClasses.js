

const addClassComplete = (objectID) => {
    document.getElementById(objectID).classList.toggle("complete");
}


const toggleDetails = (objectID) => {
    const parentNode = document.getElementById(objectID);

    parentNode.classList.toggle("expand");

    const childCategory = parentNode.getElementsByClassName("task-category");
    childCategory[0].classList.toggle("hidden");

    const childDescriptionHeading = parentNode.getElementsByClassName("task-description-heading");
    if (childDescriptionHeading[0]) {
        childDescriptionHeading[0].classList.toggle("hidden");
    }

    const childDescription = parentNode.getElementsByClassName("task-description");
    if (childDescription[0]) {
        childDescription[0].classList.toggle("hidden");
    }

    const childPriorityHeading = parentNode.getElementsByClassName("priority-heading");
    childPriorityHeading[0].classList.toggle("hidden");

    const childPriority = parentNode.getElementsByClassName("priority");
    childPriority[0].classList.toggle("hidden");

    const childNotesHeading = parentNode.getElementsByClassName("notes-heading");
    if (childNotesHeading[0]) {
        childNotesHeading[0].classList.toggle("hidden");
    }
    
    const childNotes = parentNode.getElementsByClassName("notes");
    if (childNotes[0]) {
        childNotes[0].classList.toggle("hidden");
    }
    
}


export {
    addClassComplete,
    toggleDetails
}