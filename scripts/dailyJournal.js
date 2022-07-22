import { writeJournal } from "./Entries.js"

export const dailyJournal = () => {
    return `


        <article class="entryForm">
        <fieldset>
        <label for="entryDate">Date of entry:</label><br>
        <input type="date" name="entryDate" class="entryForm__date">
    </fieldset>
    <fieldset>
        <label for="concepts">Concepts covered:</label><br>
        <input type="text" name="concepts">
    </fieldset>
    <fieldset>
        <label for="journalEntry">Journal entry:</label><br>
        <textarea type="textarea" name="journalEntry"></textarea>
    </fieldset>
    <fieldset>
        <label for="mood">Mood:</label><br>
        <select id="moodSelect">
        <option value="Thrilled">Thrilled</option>
        <option value="Bummed">Bummed</option>
        <option value="Meh">Meh</option>
        <option value="Despair">Despair</option>
        <option value="Debuffed">Debuffed</option>
        <option value="Happy">Happy</option>
        <option value="Amazed">Amazed</option>
        <option value="Anxious">Anxious</option>
        <option value="Sleepy">Sleepy</option>
        </select>
        </option>
    </fieldset>
        </article>

        <div class="entryList">
        ${ writeJournal() }
    </div>
    `
}