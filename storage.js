
class Storage {
    static addNoteToStorage(newNote) {
        let notes = this.getNotesFromStorage()
        notes.push(newNote)
        localStorage.setItem("notes", JSON.stringify(notes))
    }

    static getNotesFromStorage() {
        let notes
        if (localStorage.getItem("notes") === null) {
            notes = []
        }
        else {
            notes = JSON.parse(localStorage.getItem("notes"))
        }
        return notes
    }
    static deleteNoteFromStorage(noteTitle) {
        let notes = this.getNotesFromStorage()
        notes.forEach(function (note, index) {
            if (note.title === noteTitle) {
                notes.splice(index, 1)
            }
        })
        localStorage.setItem("notes", JSON.stringify(notes))
    }
    static clearAllNotesFromStorage() {
        localStorage.removeItem("notes")
    }


}



