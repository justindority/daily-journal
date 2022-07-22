import { dailyJournal } from "./dailyJournal.js";

const jeHtml = dailyJournal()

const jeSelector = document.querySelector("#entries")
jeSelector.innerHTML = jeHtml