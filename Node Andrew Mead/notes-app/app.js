import validator from "validator"
import chalk from "chalk"
import yargs from "yargs"

import { getNotes } from "./notes.js"

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
    handler: function (argv) {
        console.log(
            `New note ${argv.title} created! and here are the details of the note => "${argv.body}"`,
        )
    },
})

//  Removing a note
yargs.command({
    command: "remove",
    describe: "Remove a new note.",
    handler: function () {
        console.log("Removing a note!")
    },
})

// Listing all the notes
yargs.command({
    command: "list",
    describe: "List all notes.",
    handler: function () {
        console.log("Listing notes!")
    },
})

// Read a note

yargs.command({
    command: "read",
    describe: "Open an existing note.",
    handler: function () {
        console.log("Opening a note!")
    },
})

yargs.parse()
