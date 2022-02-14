import "./index.css";
const Logo = require("./assets/sun_icon.png");
// import { MyClass } from "./example-unit";

// const a = new MyClass(2);
// console.log("number is", a.get());

const time = document.querySelector("#display") as HTMLImageElement;
const image = document.querySelector("#image") as HTMLImageElement;
image.src = Logo;

class ClockBuilder {
  date: Date;
  offsetHours: number;
  offsetMin: number;

  constructor(divClock: Element) {
    this.date = new Date();
    this.offsetHours = 0;
    this.offsetMin = 0;
    this.displayClock(divClock);
  }

  /* This method custom the clock loop */
  displayClock(divClock: Element) {
    const currentClock: Date = new Date();

    this.setClockTime(currentClock);

    divClock.innerHTML = this.getTimeText(
      this.date.getHours(),
      this.date.getMinutes(),
      this.date.getSeconds()
    );

    setTimeout(() => this.displayClock(divClock), 300);
  }

  /* This method set clock time according to the offset introduced by funtionalities  */
  setClockTime(currentDate: Date) {
    this.date.setHours(currentDate.getHours() + this.offsetHours);
    this.date.setMinutes(currentDate.getMinutes() + this.offsetMin);
    this.date.setSeconds(currentDate.getSeconds());
    return this;
  }

  /* Visualization methods */
  getTimeText(hours: number, minutes: number, seconds: number) {
    return `${this.checkTime(hours % 24)} h ${this.checkTime(
      minutes % 60
    )} m ${this.checkTime(seconds % 60)} s`;
  }
  checkTime(time: number) {
    return time < 10 ? "0" + time : time;
  }
}

const clock = new ClockBuilder(time);
