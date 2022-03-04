export class Mode {
  constructor() {
    // Create button listener
    let button = document.getElementById("modeButton");
    button.addEventListener("click", (e: Event) => this.setMode());
  }

  /* Set the currentMode 
  0 = default mode
  1 = Change hours mode
  2 = Change minutes mode
  */
  setMode() {
    if (currentMode < 2) {
      currentMode++;
    } else {
      currentMode = 0;
    }

    // Avoid going back 1h when some previous modification has been made
    // and the date has not been updated yet
    const date = new Date();
    if (date.getMinutes() + increasedMinutes >= 60 && currentMode == 2) {
      increasedHours++;
    }
  }
}
