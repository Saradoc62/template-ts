import { ClockModel } from "./ClockModel";
import { ClockView } from "./ClockView";

export class ClockController {
  private model: ClockModel;
  private view: ClockView;

  constructor(model: ClockModel, view: ClockView) {
    this.model = model;
    this.view = view;

    document.getElementById("mode-btn")!.addEventListener("click", () => this.toggleEditMode());
    document.getElementById("increase-btn")!.addEventListener("click", () => this.increaseTime());
    document.getElementById("light-btn")!.addEventListener("click", () => this.toggleLightMode());

    this.startClock();
  }

  private startClock(): void {
    setInterval(() => {
      this.model.updateTime();
      this.view.updateDisplay(this.model.getTime(), this.model.getEditMode());
    }, 1000);
  }

  private toggleEditMode(): void {
    this.model.toggleEditMode();
  }

  private increaseTime(): void {
    this.model.increaseTime();
  }

  private toggleLightMode(): void {
    this.model.toggleLightMode();
    this.view.updateLightMode(this.model.getLightMode());
  }
}
