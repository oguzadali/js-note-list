class UI {

    static addNoteToUI(newNote) {
        // console.log(newNote)
        // <tr>
        // <td scope="col"></td>
        //     <td scope="col"></td>
        //     <td scope="col"></td>
        //     <td scope="col"><a href="#" id="clear-notes" class="btn btn-danger">Clear</a></td>
        // </tr>
        const noteList = document.getElementById("notes")
        //console.log(noteList)
        noteList.innerHTML += `
        <tr>
            <td scope="col">#</td>
            <td scope="col" class="note-tt">${newNote.title}</td>
            <td scope="col" >${newNote.content}</td>
            <td scope="col"><a href="#" id="clear-notes" class="btn btn-danger">Clear</a></td>
        </tr>
        `
    }
    //clear input area after save
    static clearInputs(element1, element2) {
        element1.value = ""
        element2.value = ""
    }


    static loadAllNotes(notes) {
        const noteList = document.getElementById("notes")
        notes.forEach(function (note) {
            noteList.innerHTML += `
        <tr>
            <td scope="col">#</td>
            <td scope="col" class="note-tt">${note.title}</td>
            <td scope="col" >${note.content}</td>
            <td scope="col"><a href="#" id="clear-notes" class="btn btn-danger">Clear</a></td>
        </tr>`
        })
    }

    static displayMessages(message, type) {
        const firstcardBody = document.querySelectorAll(".card-body")[0]
        const div = document.createElement("div")
        div.className = `alert alert-${type}`
        div.textContent = message
        firstcardBody.appendChild(div)
        //clear after few second
        setTimeout(function () {
            div.remove()
        }, 1500)
    }

    static deleteNoteFromUI(element) {
        element.parentElement.parentElement.remove()
    }

    static clearAllNotesFromUI() {
        const filmList = document.getElementById("notes")
        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove()
        }
    }
}