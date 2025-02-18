export class ClockView {
    private clockDisplay: HTMLElement;
  
    constructor() {
      this.clockDisplay = document.getElementById("clock-display")!;
    }
  
    public updateDisplay(time: string, editMode: number): void {
     
      const [h, m, s] = time.split(":");
      const hoursElem = document.getElementById("hours")!;
      const minutesElem = document.getElementById("minutes")!;
      const secondsElem = document.getElementById("seconds")!;
  
     
      hoursElem.textContent = h;
      minutesElem.textContent = m;
      secondsElem.textContent = s;

      hoursElem.classList.remove("blink");
      minutesElem.classList.remove("blink");
  
      if (editMode === 1) {
        hoursElem.classList.add("blink");
      } else if (editMode === 2) {
        minutesElem.classList.add("blink");
      }
    }
  
    public updateLightMode(isLightMode: boolean): void {
      this.clockDisplay.style.backgroundColor = isLightMode ? "#FBE106" : "#FFFFFF";
    }
  }
  