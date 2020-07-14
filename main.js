const form = document.getElementById("note-form")
const titleElement = document.querySelector("#areas").children[0]
const contentElement = document.querySelector("#areas").children[1]
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-all-notes")

eventListeners()
function eventListeners() {
    form.addEventListener("submit", addNote)
    document.addEventListener("DOMContentLoaded", function () {
        let notes = Storage.getNotesFromStorage()
        UI.loadAllNotes(notes)
    })
    // filter.addEventListener("keyup", filterNotes)
    secondCardBody.addEventListener("click", deleteNote)
    clearButton.addEventListener("click", clearAllNotes)
}

function addNote(e) {
    const title = titleElement.value
    const content = contentElement.value
    if (title === "" || content === "" || title === "-") {
        UI.displayMessages("Tüm alanları doldurun", "danger")
    }
    else {
        const newNote = new Note(title, content)
        UI.addNoteToUI(newNote)
        Storage.addNoteToStorage(newNote)
        UI.displayMessages("Not Kaydedildi...", "success")

    }
    UI.clearInputs(titleElement, contentElement)
    e.preventDefault();
}

// function filterNotes(e) {
//     const filterValue = e.target.value.toLowerCase()
//     const listItems = document.querySelectorAll(".note-tt")
//     console.log(listItems)
//     listItems.forEach(function (listItem) {
//         const text = listItem.textContent.toLowerCase()

//         if (text.indexOf(filterNotes) === -1) {
//             listItem.setAttribute("style", "display:none !important")
//         }
//         else {
//             listItem.setAttribute("style", "display:block")
//         }
//     })
// }

function deleteNote(e) {
    if (e.target.id === "clear-notes") {
        UI.deleteNoteFromUI(e.target)
        Storage.deleteNoteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages("Silindi", "success")
    }
}

function clearAllNotes() {
    if (confirm("All notes will be deleted. Do you confirm?")) {
        UI.clearAllNotesFromUI()
        Storage.clearAllNotesFromStorage()
    }
}




