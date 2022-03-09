import "./index.css";
import { Watch } from "./example-unit/watch";

// Setup with the creation of the first Watch
globalThis.clockNumber = 0;
const watches = new Array();
watches.push(new Watch(document.getElementById("watch"), "", document.getElementById("watchName"), "Montreal Time"));

// Adds a new watch after clicking on the Add Watch Button
let addWatchButton = document.getElementById("addWatchButton");
addWatchButton.addEventListener("click", (e: Event) => addWatch());
function addWatch() {
    watches.push(new Watch(document.getElementById("watch" + clockNumber), clockNumber, document.getElementById("watchName" + clockNumber), "Watch " + clockNumber));
}

