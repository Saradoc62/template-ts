export class TimeModel {
    private currentTime: Date;

    constructor() {
        this.currentTime = new Date();
    }

    public incrementByMilliseconds(milliseconds: number): void {
        this.currentTime = new Date(this.currentTime.getTime() + milliseconds);
    }

    public incrementByOneHour(): void {
        this.currentTime.setHours(this.currentTime.getHours() + 1);
    }
    public incrementByOneMinute(): void {
        this.currentTime.setMinutes(this.currentTime.getMinutes() + 1);
    }

    public getCurrentTime(): string {
        const hours = this.currentTime.getHours().toString().padStart(2, '0');
        const minutes = this.currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = this.currentTime.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    public getCurrentTimeAsDate(): Date {
        return this.currentTime;
    }
}
