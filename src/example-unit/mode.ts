// export class Mode {
//   watchNum : number
//   constructor(watchNumber : number) {
//     this.watchNum = watchNumber;
//     // Create button listener
//     let button = document.getElementById("modeButton" + watchNumber);
//     button.addEventListener("click", (e: Event) => this.setMode());
//   }

//   /* Set the currentMode 
//   0 = default mode
//   1 = Change hours mode
//   2 = Change minutes mode
//   */
//   setMode() {
//     if (currentMode[this.watchNum] < 2) {
//       currentMode[this.watchNum]++;
//     } else {
//       currentMode[this.watchNum] = 0;
//     }

//     // Avoid going back 1h when some previous modification has been made
//     // and the date has not been updated yet
//     const date = new Date();
//     if (date.getMinutes() + increasedMinutes >= 60 && currentMode[this.watchNum] == 2) {
//       increasedHours++;
//     }
//   }
// }
