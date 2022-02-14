import { SwitchModeType, IncreaseTime } from ".";
import { modeType } from "../constants";

/*Custom Component: Buttons Update Time */
export class UpdateTime {
  btnElementMode: Element;
  btnElementIncrease: Element;
  state: SwitchModeType;
  increase: IncreaseTime;

  constructor(btnElementMode: Element, btnElementIncrease: Element) {
    /* Create buttons */
    this.btnElementMode = btnElementMode;
    this.btnElementMode.innerHTML = `Mode`;
    this.btnElementMode.classList.add("btn");

    this.btnElementIncrease = btnElementIncrease;
    this.btnElementIncrease.innerHTML = `Change Mode`;
    this.btnElementIncrease.classList.add("btn", "disable");

    /* Set state, styles and funtionalities */
    this.state = new SwitchModeType();
    this.btnElementMode.addEventListener("click", () => {
      this.setStateStyles(this.btnElementIncrease);
      this.state.setState();
    });
    this.increase = new IncreaseTime();
    this.btnElementIncrease.addEventListener("click", () =>
      this.increase.updateTime(this.state.getState())
    );
  }

  setStateStyles(btnElement: Element) {
    switch (this.state.state) {
      case modeType.Deactivate:
        btnElement.innerHTML = `Increase Hours`;
        btnElement.classList.remove("disable");
        break;
      case modeType.SetHours:
        btnElement.innerHTML = `Increase Minutes`;
        btnElement.classList.remove("disable");
        break;
      case modeType.SetMinutes:
        btnElement.innerHTML = `Change Mode`;
        btnElement.classList.add("disable");
        break;

      default:
        console.error("ModeType could not be found");
        break;
    }
  }
}
