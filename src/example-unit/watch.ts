export class Watch {
  // Declare a class variable of type "Element" called el
  watch: Element;
  watchNum: number;
  currentMode: number = 0;
  increasedMinutes: number = 0;
  increasedHours: number = 0;
  ampm: boolean = false;
  watchName : Element;

  constructor(currentWatch: any, watchNumber: any, currentNameElement : any, currentName: string) {
    this.watch = currentWatch;
    this.watchNum = watchNumber;
    this.watchName = currentNameElement;
    this.watchName.textContent = currentName;

    // Update the Watch every 1000 ms
    setInterval(() => this.startWatch(), 1000);

    // Create button listener for AMPM
    let buttonAmpm = document.getElementById("ampmButton" + watchNumber);
    buttonAmpm.addEventListener("click", (e: Event) => this.toggleAMPM());

    // Create button listener for Mode
    let buttonMode = document.getElementById("modeButton" + watchNumber);
    buttonMode.addEventListener("click", (e: Event) => this.setMode());

    // Create button listener for Increase
    let buttonIncrease = document.getElementById("increaseButton" + watchNumber);
    buttonIncrease.addEventListener("click", (e: Event) => this.increaseTime());

    // Create button listener for Light
    let buttonLight = document.getElementById("lightButton" + watchNumber);
    buttonLight.addEventListener("click", (e: Event) => this.toggleLight());

     // Create button listener for Reset
     let buttonReset = document.getElementById("resetButton" + watchNumber);
     buttonReset.addEventListener("click", (e: Event) => this.reset());
  }

  // Start the clock
  startWatch() {
    // Get current Date
    var date = new Date();

    // Avoid changing the hours when modifying the minutes
    if (
      date.getMinutes() + this.increasedMinutes >= 60 &&
      this.currentMode == 2
    ) {
      this.increasedMinutes -= 60;
    }
    date.setHours(date.getHours() + this.increasedHours);
    date.setMinutes(date.getMinutes() + this.increasedMinutes);

    // Concatenate to String in order to modify the value of the String if necessary
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();

    // Add 0 if the number's length is smaller than 2
    if (hours.length < 2) {
      hours = "0" + hours;
    }
    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    // Display by updating the element with the correct time
    var currentTime;
    var moment = "";
    //console.log(this.ampm);
    if (this.ampm) {
      moment = " AM";
      if (Number(hours) > 12) {
        moment = " PM";
        hours = String(Number(hours) - 12);
      }
    }
    currentTime = hours + " : " + minutes + " : " + seconds + moment;
    var mode = "Mode " + this.currentMode;

    this.watch.textContent = currentTime + " - " + mode;
  }

  // Toggle betwwen 24h and AM/PM format
  toggleAMPM() {
    if (this.ampm == false) {
      this.ampm = true;
    } else {
      this.ampm = false;
    }
  }

  // MODE
  setMode() {
    if (this.currentMode < 2) {
      this.currentMode++;
    } else {
      this.currentMode = 0;
    }

    // Avoid going back 1h when some previous modification has been made
    // and the date has not been updated yet
    const date = new Date();
    if (
      date.getMinutes() + this.increasedMinutes >= 60 &&
      this.currentMode == 2
    ) {
      this.increasedHours++;
    }
  }

  // INCREASE
  // Depending on the mode, increase the hours, the minutes or nothing
  increaseTime() {
    if (this.currentMode == 1) {
      if (this.increasedHours == 23) {
        this.increasedHours = 0;
      } else {
        this.increasedHours++;
      }
    } else if (this.currentMode == 2) {
      if (this.increasedMinutes == 59) {
        this.increasedMinutes = 0;
      } else {
        this.increasedMinutes++;
      }
    }
  }

   // Toggle the light mode
   toggleLight() {
    this.watch.classList.toggle("dark-mode");
  }

  // Reset Watch
  reset() {
    this.currentMode = 0;
    this.increasedMinutes = 0;
    this.increasedHours = 0;
  }
}
