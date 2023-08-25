import validator from "validator"
import chalk from "chalk"
import yargs from "yargs"

import { addNote, removeNote, listNotes, readNote } from "./notes.js"

// const argv = yargs(hideBin(process.argv)).argv
// Adding a new note
yargs.command({
    command: "add",
    describe: "Add a new note.",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Details of the note.",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    },
})

//  Removing a note
yargs.command({
    command: "remove",
    describe: "Remove a new note.",
    builder: {
        title: {
            describe: "Remove a note",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        removeNote(argv.title)
    },
})

// Listing all the notes
yargs.command({
    command: "list",
    describe: "List all notes.",
    handler(argv) {
        listNotes()
    },
})

// Read a note

yargs.command({
    command: "read",
    describe: "Open an existing note.",
    builder: {
        title: {
            describe: "Get details of the note",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        readNote(argv.title)
    },
})

yargs.parse()
