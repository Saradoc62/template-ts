export class TimeView {
    private hoursContainer: HTMLElement;
    private minutesContainer: HTMLElement;
    private secondsContainer: HTMLElement;
    private incrementButton: HTMLButtonElement;
    private modeButton: HTMLButtonElement;
    private colorToggleButton: HTMLButtonElement;
    private currentBackgroundColor: string = '#FBE106';
    private isHoursBlinking: boolean = false;
    private isMinutesBlinking: boolean = false;
    private timeBackground: HTMLElement;



    constructor() {
        this.hoursContainer = document.getElementById("hours-part") as HTMLElement;
        this.minutesContainer = document.getElementById("minutes-part") as HTMLElement;
        this.secondsContainer = document.getElementById("seconds-part") as HTMLElement;
        this.incrementButton = document.getElementById("increment-time-btn") as HTMLButtonElement;
        this.modeButton = document.getElementById("mode-btn") as HTMLButtonElement;
        this.timeBackground = document.getElementById("time-background") as HTMLElement;
        this.colorToggleButton = document.getElementById("color-toggle-btn") as HTMLButtonElement;

    }

    public updateTimeDisplay(time: Date): void {
        this.hoursContainer.textContent = time.getHours().toString().padStart(2, "0");
        this.minutesContainer.textContent = time.getMinutes().toString().padStart(2, "0");
        this.secondsContainer.textContent = time.getSeconds().toString().padStart(2, "0");
    }

    public toggleHoursBlinking(isBlinking: boolean): void {
        this.isHoursBlinking = isBlinking;
        if (isBlinking) {
            let isVisible = true;
            setInterval(() => {
                if (this.isHoursBlinking) {
                    this.hoursContainer.style.visibility = isVisible ? 'visible' : 'hidden';
                    isVisible = !isVisible;
                } else {
                    this.hoursContainer.style.visibility = 'visible';
                }
            }, 100);
        } else {
            this.hoursContainer.style.visibility = 'visible';
        }
    }
    
    public toggleMinutesBlinking(isBlinking: boolean): void {
        this.isMinutesBlinking = isBlinking;
        if (isBlinking) {
            let isVisible = true;
            setInterval(() => {
                if (this.isMinutesBlinking) {
                    this.minutesContainer.style.visibility = isVisible ? 'visible' : 'hidden';
                    isVisible = !isVisible;
                } else {
                    this.minutesContainer.style.visibility = 'visible';
                }
            }, 100);
        } else {
            this.minutesContainer.style.visibility = 'visible';
        }
    }

    public toggleBackgroundColor(): void {
        if (this.currentBackgroundColor === "#FBE106") {
            this.timeBackground.style.backgroundColor = "#FFFFFF";
            this.currentBackgroundColor = "#FFFFFF";
        } else {
            this.timeBackground.style.backgroundColor = "#FBE106";
            this.currentBackgroundColor = "#FBE106";
        }
    }

    public bindIncrementHandler(handler: () => void): void {
        this.incrementButton.addEventListener("click", handler);
    }
    
    public bindModeHandler(handler: () => void): void {
        this.modeButton.addEventListener("click", handler);
    }

    public bindColorToggleHandler(handler: () => void): void {
        this.colorToggleButton.addEventListener("click", handler);
    }

}
