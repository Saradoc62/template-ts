import "./index.css";
const sun_icon = require("./assets/sun_icon.png");
const moon_icon = require("./assets/moon_icon.png");
// import { MyClass } from "./example-unit";

// const a = new MyClass(2);
// console.log("number is", a.get());

const background = document.querySelector("#background")!;
const time = document.querySelector("#display")!;
const buttonIncrease = document.querySelector("#increase")!;
const buttonMode = document.querySelector("#mode")!;
const buttonLightDark = document.querySelector("#lightDark")!;
const image = document.querySelector("#image") as HTMLImageElement;

enum modeType {
  Deactivate,
  SetHours,
  SetMinutes,
}

class ClockBuilder {
  date: Date;
  displayMode: DisplayMode;
  offsetHours: number;
  offsetMin: number;

  constructor(divClock: Element) {
    image.src = sun_icon;
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

  /* This methods add functional components to clock application */
  addDisplayModeBtn(btnElement: Element) {
    this.displayMode = new DisplayMode(btnElement);
    return this;
  }
}
/*Custom Component: Button Dark/Light*/
class DisplayMode {
  light: boolean;
  btnElement: Element;

  constructor(btnElement: Element) {
    this.btnElement = btnElement;
    this.light = true;
    this.btnElement.innerHTML = `Dark`;
    this.btnElement.classList.add("btn");

    this.btnElement.addEventListener("click", () => {
      this.setLightMode();
      //Change button's text and add styles
      this.setStyles();
    });
  }

  isLightMode(): boolean {
    return this.light;
  }

  setLightMode(): void {
    this.light = !this.light;
  }

  setStyles(): void {
    if (this.isLightMode()) {
      this.btnElement.innerHTML = `Dark`;
      background.classList.remove("bg-image-dark");
      background.classList.add("bg-image");
      image.src = sun_icon;
      time.classList.add("clock-display");
      time.classList.remove("clock-displayDark");
    } else {
      this.btnElement.innerHTML = `Light`;
      background.classList.add("bg-image-dark");
      background.classList.remove("bg-image");
      image.src = moon_icon;
      time.classList.remove("clock-display");
      time.classList.add("clock-displayDark");
    }
  }
}

const clock = new ClockBuilder(time);
clock.addDisplayModeBtn(buttonLightDark);
