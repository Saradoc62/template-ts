export class Diagram {
  constructor(
    private mode: number,
    private addedHours: number,
    private addedMinutes: number,
    private clockId: string,
  ) {}

  private oneDay24 = 24;
  private ampmDay = 12;
  private oneMinute = 60;
  private initDate: Date;
  private addedSeconds = 0;
  private clockElement: HTMLElement;
  private initOffset = 0;
  private format = "24h";
  private actualFormat = "";

  // animation
  private rotationAngle = 0;
  private isRotation = false;
  private isFlip = false;
  private flip = -1;
  private multiplyTarget = 0;
  private isTranslating = false;
  private translationX = 0;

  // constants
  private clockHourId = "#clockHour";
  private clockMinutesId = "#clockMinutes";
  private clockSecondId = "#clockSeconds";
  private ampmId = "#amPm";
  private dialId = "#dial";
  private hFormat = "24h";
  private amFormat = "AM";
  private pmFormat = "PM";
  private ampmFormat = "AM/PM";

  public initClock = () => {
    this.initDate = new Date();
    this.clockElement = document.getElementById(this.clockId);
    this.initOffset = this.initOffset + this.addedHours;
  };

  public updateClock = () => {
    const hours = this.initDate.getHours().toString();
    const clockHour = this.clockElement.querySelector(this.clockHourId)!;

    if (this.format === this.hFormat) {
      const newHour = (Number(hours) + this.addedHours) % this.oneDay24;
      clockHour.textContent = newHour.toString();
    } else {
      const newHour = (Number(hours) + this.addedHours) % this.ampmDay;
      clockHour.textContent = newHour.toString();
    }

    const minutes = this.initDate.getMinutes().toString();
    const clockMinutes = this.clockElement.querySelector(this.clockMinutesId)!;
    const newMinutes = (Number(minutes) + this.addedMinutes) % this.oneMinute;
    clockMinutes.textContent = newMinutes.toString();

    this.addedSeconds = this.addedSeconds + 1;
    const seconds = this.initDate.getSeconds().toString();
    const clockSeconds = this.clockElement.querySelector(this.clockSecondId)!;
    const newSeconds = (Number(seconds) + this.addedSeconds) % this.oneMinute;

    if (newSeconds === 59) {
      this.addedMinutes = this.addedMinutes + 1;
    }
    if (newMinutes === 59 && newSeconds === 59) {
      this.addedHours = this.addedHours + 1;
    }
    clockSeconds.textContent = newSeconds.toString();

    const idToUse = "#" + this.clockId + "animation";
    const watchElement = document.querySelector(idToUse) as HTMLElement;

    if (this.isRotation) {
      this.rotationAngle = this.rotationAngle + 10;
      watchElement.style.transform = `rotate(${this.rotationAngle}deg)`;
      for (let index = 0; index < this.multiplyTarget; index++) {
        const newIdToUse = "#" + this.clockId + "Clone" + index;

        const watchElement = document.querySelector(newIdToUse) as HTMLElement;
        this.rotationAngle = this.rotationAngle + 10;
        watchElement.style.transform = `rotate(${this.rotationAngle}deg)`;
      }
    }

    if (this.isFlip) {
      this.flip = this.flip * -1;
      const flipX = "scaleX(" + this.flip + ")";
      watchElement.style.transform = flipX;
      watchElement.style.transition = "transform 0.3s ease-in-out";
      for (let index = 0; index < this.multiplyTarget; index++) {
        const newIdToUse = "#" + this.clockId + "Clone" + index;
        const watchElement = document.querySelector(newIdToUse) as HTMLElement;
        this.flip = this.flip * -1;
        const flipY = "scaleY(" + this.flip + ")";
        watchElement.style.transform = flipY;
        watchElement.style.transition = "transform 0.3s ease-in-out";
      }
    }

    if (this.isTranslating) {
      const distanceX = 50;
      this.translationX += distanceX;
      watchElement.style.transform = `translateX(${this.translationX}px)`;

      for (let index = 0; index < this.multiplyTarget; index++) {
        const newIdToUse = "#" + this.clockId + "Clone" + index;

        const watchElementClone = document.querySelector(
          newIdToUse,
        ) as HTMLElement;

        const cloneDistanceX = 30;
        const cloneTranslationX = index * cloneDistanceX;
        watchElementClone.style.transform = `translateX(${cloneTranslationX}px)`;
      }
    }
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
      if (this.format !== this.hFormat) {
        const clockHour = Number(
          this.clockElement.querySelector(this.clockHourId)!.textContent,
        );
        const ampm = this.clockElement.querySelector(this.ampmId)!.textContent;
        if (clockHour === 11 && ampm === this.pmFormat) {
          this.clockElement.querySelector(this.ampmId)!.textContent =
            this.amFormat;
        } else if (clockHour === 12 && ampm === this.amFormat) {
          this.clockElement.querySelector(this.ampmId)!.textContent =
            this.pmFormat;
        }
      }
      return;
    }
    if (this.mode === 2) {
      console.log("Plus one minute");
      const clockMinutes = this.clockElement.querySelector(
        this.clockMinutesId,
      )!.textContent;
      if (clockMinutes === "59") {
        this.addedHours = this.addedHours + 1;
      }
      this.addedMinutes = this.addedMinutes + 1;
      return;
    }
  }

  public turnTheLight() {
    const lightElement = this.clockElement.querySelector(this.dialId);

    if (lightElement.classList.contains("day")) {
      lightElement.classList.remove("day");
      lightElement.classList.add("night");
    } else {
      lightElement.classList.remove("night");
      lightElement.classList.add("day");
    }
  }

  public resetClock() {
    this.addedHours = this.initOffset;
    this.addedMinutes = 0;
    this.addedSeconds = 0;
    this.clockElement.querySelector(this.ampmId)!.textContent =
      this.actualFormat;
  }

  public changeAmPm() {
    if (this.format === this.hFormat) {
      let clockHours = Number(
        this.clockElement.querySelector(this.clockHourId)!.textContent,
      );
      let ampm = this.amFormat;

      if (clockHours >= 12) {
        ampm = this.pmFormat;
        clockHours %= 12;
      }
      if (clockHours === 0) {
        clockHours = 12;
      }
      this.clockElement.querySelector(this.ampmId)!.textContent = ampm;
      this.actualFormat = ampm;
      this.clockElement.querySelector(this.clockHourId)!.textContent =
        clockHours.toString();
      this.format = this.ampmFormat;
    } else {
      let clockHours = Number(
        this.clockElement.querySelector(this.clockHourId)!.textContent,
      );
      const ampm = this.clockElement.querySelector(this.ampmId)!.textContent;

      if (ampm === this.pmFormat && clockHours < 12) {
        clockHours += 12;
      }

      if (ampm === this.amFormat && clockHours === 12) {
        clockHours = 0;
      }
      this.clockElement.querySelector(this.clockHourId)!.textContent =
        clockHours.toString();
      this.clockElement.querySelector(this.ampmId)!.textContent = "";
      this.actualFormat = "";
      this.format = this.hFormat;
    }
  }

  public activateRotation() {
    this.isRotation = !this.isRotation;
    console.log("Rotate = " + this.isRotation);
  }

  public activateFlip() {
    this.isFlip = !this.isFlip;
    console.log("Flip = " + this.isFlip);
  }

  public multiply() {
    const idToUse = "#" + this.clockId + "animation";
    const watchElement = document.querySelector(idToUse) as HTMLElement;

    this.multiplyTarget = this.multiplyTarget + 1;

    for (let i = 0; i < this.multiplyTarget; i++) {
      const clone = watchElement.cloneNode(true) as HTMLElement;
      clone.id = `${this.clockId}Clone${i}`;
      clone.style.position = "absolute";

      const distance =
        100 * Math.floor(Math.random() * (this.multiplyTarget + 1));
      const randomPosition = Math.floor(Math.random() * 9);
      if (randomPosition === 1) {
        clone.style.transform = `translate(${distance * i}px, ${
          distance * i
        }px)`;
      } else if (randomPosition === 2) {
        clone.style.transform = `translate(${distance * -i}px, ${
          distance * i
        }px)`;
      } else if (randomPosition === 3) {
        clone.style.transform = `translate(${distance * i}px, ${
          distance * -i
        }px)`;
      } else if (randomPosition === 4) {
        clone.style.transform = `translate(${distance * -i}px, ${
          distance * -i
        }px)`;
      } else if (randomPosition === 5) {
        clone.style.transform = `translate(${distance * i}px, 0px)`;
      } else if (randomPosition === 6) {
        clone.style.transform = `translate(${distance * -i}px, 0px)`;
      } else if (randomPosition === 7) {
        clone.style.transform = `translate(0px, ${distance * -i}px)`;
      } else if (randomPosition === 8) {
        clone.style.transform = `translate(0px, ${distance * -i}px)`;
      }

      watchElement.parentElement.appendChild(clone);
    }
  }

  public activateTranslation() {
    this.isTranslating = !this.isTranslating;
  }
}
