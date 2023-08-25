import fs from "fs"
import chalk from "chalk"

const readNote = (title) => {
    const notes = loadNotes()
    const fetchNote = notes.find((note) => note.title === title)

    if (fetchNote) {
        console.log(chalk.bold.inverse(fetchNote.title))
        console.log(fetchNote.body)
    } else {
        console.log(chalk.red.inverse("No notes to display."))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length !== 0) {
        console.log(chalk.yellow.inverse("Here are your notes..."))
        notes.forEach((note) => {
            console.log(note.title)
        })
    } else {
        console.log(chalk.red.inverse("No notes to display."))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(`New note ${title} added!`)
    } else {
        console.log("Note title taken! Try with a different title")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    let notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length === notesToKeep.length) {
        console.log(
            chalk.yellow(`Note with title '${title}' is not in the list!`),
        )
    } else {
        saveNotes(notesToKeep)
        console.log(
            chalk.red(
                `Note with title '${title}' has been removed from the list!`,
            ),
        )
    }
}

export { addNote, removeNote, listNotes, readNote }
