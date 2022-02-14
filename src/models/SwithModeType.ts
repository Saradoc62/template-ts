import { modeType } from "../constants";

/* This class manage the state of the buttons */
export class SwitchModeType {
  state: number;

  constructor(initialState: number = 0) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }
  setState() {
    switch (this.state) {
      case modeType.Deactivate:
        this.state = modeType.SetHours;
        break;
      case modeType.SetHours:
        this.state = modeType.SetMinutes;
        break;
      case modeType.SetMinutes:
        this.state = modeType.Deactivate;
        break;

      default:
        console.error("ModeType could not be found");
        break;
    }
  }
}
