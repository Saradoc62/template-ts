export class ClockModel {
    private hours: number;
    private minutes: number;
    private seconds: number;
    // 0 = normal, 1 = edit heur, 2 = édit mnts
    private editMode: number = 0;
    // false blanc ... true jaune
    private isLightMode: boolean = false;
  
    constructor() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
    }
  
    public updateTime(): void {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours = (this.hours + 1) % 24;
        }
      }
    }
  
    public toggleEditMode(): void {
      this.editMode = (this.editMode + 1) % 3;
    }

    public increaseTime(): void {
      if (this.editMode === 1) {
        this.hours = (this.hours + 1) % 24;
      } else if (this.editMode === 2) {
        this.minutes = (this.minutes + 1) % 60;
        if (this.minutes === 0) {
          this.hours = (this.hours + 1) % 24;
        }
      }
    }

    public toggleLightMode(): void {
      this.isLightMode = !this.isLightMode;
    }
  
    public getTime(): string {
      const hh = this.formatNumber(this.hours);
      const mm = this.formatNumber(this.minutes);
      const ss = this.formatNumber(this.seconds);
      return `${hh}:${mm}:${ss}`;
    }
  
    public getEditMode(): number {
      return this.editMode;
    }
  
    public getLightMode(): boolean {
      return this.isLightMode;
    }
  
    private formatNumber(num: number): string {
      return num.toString().padStart(2, "0");
    }
  }
  