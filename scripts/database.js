/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "07/05/2022",
            concept: "cohort 56 capstones",
            entry: "how am I going to know how to make that in 3 months",
            mood: "Anxious"
        },
        {
            id: 3,
            date: "07/20/2022",
            concept: "object deconstruction",
            entry: "i am learning a ton and having a blast",
            mood: "Thrilled"
        }

    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}