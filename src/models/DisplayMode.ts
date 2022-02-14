const background = document.querySelector("#background")!;
const time = document.querySelector("#display")!;
const image = document.querySelector("#image") as HTMLImageElement;

const sun_icon = require("../assets/sun_icon.png");
const moon_icon = require("../assets/moon_icon.png");

/*Custom Component: Button Dark/Light*/
export class DisplayMode {
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
