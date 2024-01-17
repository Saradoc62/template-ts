export enum WatchModeType {NOT_EDITABLE = 0, EDIT_HOUR = 1, EDIT_MINUTE = 2};
const numberOfWatchModeTypes = 3;

export class WatchMode {
  private value: WatchModeType;
    constructor() {
      this.value = 0
    }
  
    get(): number {
      return this.value;
    }

    toggle(): void {
        this.value = (this.value + 1) % numberOfWatchModeTypes ;
    }
  }
  