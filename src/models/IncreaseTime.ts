import { modeType } from "../constants";

/* This class increment hours/minutes according to the current state*/
export class IncreaseTime {
  addHours: number;
  addMin: number;

  constructor() {
    this.addHours = 0;
    this.addMin = 0;
  }

  updateTime(state: number) {
    switch (state) {
      case modeType.Deactivate:
        break;
      case modeType.SetHours:
        this.setClockHours();
        break;
      case modeType.SetMinutes:
        this.setClockMinutes();
        break;
      default:
        console.error("ModeType could not be found");
        break;
    }
  }

  setClockHours() {
    this.addHours += 1;
  }
  setClockMinutes() {
    this.addMin += 1;
  }
  getAddingHours() {
    return this.addHours;
  }
  getAddingMinutes() {
    return this.addMin;
  }
}
