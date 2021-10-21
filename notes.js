const notesArray = [ 
    { 
        id: 1,
        subject: "HTML",
        date: "Sept. 29",
        feelings: "good",
        timeSpent: 16
    },
    { 
        id: 2,
        subject: "CSS",
        date: "Sept. 29",
        feelings: "good",
        timeSpent: 16
    }
]

// console.log(notesArray);

// console.log(notesArray.date);

/* for (const note of notesArray) {
    console.log(note)
} */

/* for (const note of notesArray) {
    console.log(note.subject)
} */

// for (const note of notesArray) {
//     console.log(`Subject is ${note.subject}`)
// }

const todaysNote = { 
    id: 3,
    subject: "JavaScript",
    date: "Oct. 6",
    feelings: "a little confused",
    timeSpent: 4
}

notesArray.push(todaysNote)

// console.log(notesArray)

// for (const note of notesArray) {
//     console.log(`Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}.
//     I spent ${note.timeSpent} hours working on it.
//     I felt ${note.feelings}.
//     `)
// }

// const searchTerm = "good" 

// for (const note of notesArray) {
//     if (note.feelings === searchTerm)
//     console.log(`I am enjoying ${note.subject}`)
// }

const createNote = (noteObj) => {

    const lastIndex = notesArray.length - 1
    const currentLastNote = notesArray[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    noteObj.id = idForNewNote
    notesArray.push(noteObj)
}

createNote({ 
    subject: "Python",
    date: "TBD",
    feelings: "none",
    timeSpent: 0
})

for (const noteObj of notesArray) {
    console.log(`I will learn ${note.subject}.`)
 }