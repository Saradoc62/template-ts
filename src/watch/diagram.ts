export class Diagram {
  constructor(
    private mode: number,
    private addedHours: number,
    private addedMinutes: number,
    private clockId: string,
  ) {}

  private oneDay24 = 24;
  private oneMinute = 60;
  private initDate: Date;
  private addedSeconds = 0;
  private clockElement: HTMLElement;

  public initClock = () => {
    this.initDate = new Date();
    this.clockElement = document.getElementById(this.clockId);
  };

  public updateClock = () => {
    const hours = this.initDate.getHours().toString();
    const clockHour = this.clockElement.querySelector("#clockHour")!;

      const newHour = (Number(hours) + this.addedHours) % this.oneDay24;
      clockHour.textContent = newHour.toString();
   

    const minutes = this.initDate.getMinutes().toString();
    const clockMinutes = this.clockElement.querySelector("#clockMinutes")!;
    const newMinutes = (Number(minutes) + this.addedMinutes) % this.oneMinute;
    clockMinutes.textContent = newMinutes.toString();

    this.addedSeconds = this.addedSeconds + 1;
    const seconds = this.initDate.getSeconds().toString();
    const clockSeconds = this.clockElement.querySelector("#clockSeconds")!;
    const newSeconds = (Number(seconds) + this.addedSeconds) % this.oneMinute;

    if (newSeconds === 59) {
      this.addedMinutes = this.addedMinutes + 1;
    }
    if (newMinutes === 59 && newSeconds === 59) {
      this.addedHours = this.addedHours + 1;
    }
    clockSeconds.textContent = newSeconds.toString();
  };

  public getMode(): number {
    return this.mode;
  }

  public changeMode() {
    this.mode < 2 ? (this.mode = this.mode + 1) : (this.mode = 0);
    console.log("Mode : " + this.getMode());
  }

  public addTime() {
    if (this.mode === 0) {
      console.log("No effect");
      return;
    }
    if (this.mode === 1) {
      console.log("Plus one hour");
      this.addedHours = this.addedHours + 1;
      return;
    }
    if (this.mode === 2) {
      console.log("Plus one minute");
      const clockMinutes =
        this.clockElement.querySelector("#clockMinutes")!.textContent;
      if (clockMinutes === "59") {
        this.addedHours = this.addedHours + 1;
      }
      this.addedMinutes = this.addedMinutes + 1;
      return;
    }
  }

  public turnTheLight() {
    const lightElement = this.clockElement.querySelector("#dial");

    if (lightElement.classList.contains("day")) {
      lightElement.classList.remove("day");
      lightElement.classList.add("night");
    } else {
      lightElement.classList.remove("night");
      lightElement.classList.add("day");
    }
  }

}
