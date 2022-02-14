import "./index.css";
// const sun_icon = require("./assets/sun_icon.png");
// const moon_icon = require("./assets/moon_icon.png");
// import { MyClass } from "./example-unit";

// const background = document.querySelector("#background")!;
const time = document.querySelector("#display")!;
const buttonIncrease = document.querySelector("#increase")!;
const buttonMode = document.querySelector("#mode")!;
const buttonLightDark = document.querySelector("#lightDark")!;
// const image = document.querySelector("#image") as HTMLImageElement;

import { ClockBuilder } from "./models";

const clock = new ClockBuilder(time);
clock.addDisplayModeBtn(buttonLightDark);
clock.addCustomTimeBtn(buttonMode, buttonIncrease);
