import { getJournalEntries } from "./database.js"


const journalEntries = getJournalEntries()
let journalHtml = ''

export const writeJournal = () => {
    for(const je of journalEntries){
        journalHtml += `<h3>${je.concept}</h3><p>${je.entry}</p><p>${je.date}</p></p>Mood: ${je.mood}</p><hr>`
    }
    return journalHtml
}