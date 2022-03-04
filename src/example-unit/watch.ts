export class Watch {
  // Declare a class variable of type "Element" called el
  element: Element;

  constructor(currentElement: any) {
    this.element = currentElement;
    // Update the Watch every 1000 ms
    setInterval(() => this.startWatch(), 1000);
    // Create button listener
    let button = document.getElementById("ampmButton");
    button.addEventListener("click", (e: Event) => this.toggleAMPM());
  }

  // Start the clock
  startWatch() {
    // Get current Date
    var date = new Date();

    // Avoid changing the hours when modifying the minutes
    if (date.getMinutes() + increasedMinutes >= 60 && currentMode == 2) {
      increasedMinutes -= 60;
    }
    date.setHours(date.getHours() + increasedHours);
    date.setMinutes(date.getMinutes() + increasedMinutes);

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
    if (ampm){
        moment = " AM";
        if (Number(hours) > 12){
            moment = " PM";
            hours = String(Number(hours) - 12);
        }
    }
    currentTime = hours + " : " + minutes + " : " + seconds + moment;
    var mode = "Mode " + currentMode;

    this.element.textContent = currentTime + " - " + mode;
  }

  // Toggle betwwen 24h and AM/PM format
  toggleAMPM(){
      if (ampm == false){
          ampm = true;
      }
      else {
          ampm = false;
      }
  }

}
