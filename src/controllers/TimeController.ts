import { TimeModel } from "../models/TimeModel";
import { TimeView } from "../views/TimeView";

export class TimeController {
    private model: TimeModel;
    private view: TimeView;
    private isEditMode: number = 0;

    constructor(model: TimeModel, view: TimeView) {
        this.model = model;
        this.view = view;

        this.view.bindIncrementHandler(this.handleIncrement);
        this.view.bindModeHandler(this.handleModeToggle);
        this.view.bindColorToggleHandler(this.handleColorToggle);

        this.startClock();
    }

    private handleIncrement = (): void => {
        if (this.isEditMode == 1) {
            this.model.incrementByOneHour();
            this.view.updateTimeDisplay(this.model.getCurrentTimeAsDate());
        }
        if (this.isEditMode == 2){
            this.model.incrementByOneMinute();
            this.view.updateTimeDisplay(this.model.getCurrentTimeAsDate());
        }
    };
    
    private handleModeToggle = (): void => {
        this.view.toggleHoursBlinking(false);
        this.view.toggleMinutesBlinking(false);
    
        this.isEditMode = (this.isEditMode + 1) % 3;
    
        if (this.isEditMode == 1) {
            this.view.toggleHoursBlinking(true);
        } else if (this.isEditMode == 2) {
            this.view.toggleMinutesBlinking(true);
        }
    };

    private handleColorToggle = (): void => {
        this.view.toggleBackgroundColor();
    };
    

    private startClock(): void {
        setInterval(() => {
            // if (!this.isEditMode) {
            //     this.model.incrementByMilliseconds(1000);
            //     this.view.updateTimeDisplay(this.model.getCurrentTimeAsDate()); // Use getCurrentTimeAsDate here
            // }
            if (true) {
                this.model.incrementByMilliseconds(1000);
                this.view.updateTimeDisplay(this.model.getCurrentTimeAsDate()); // Use getCurrentTimeAsDate here
            }
            
        }, 1000);
    }
}
